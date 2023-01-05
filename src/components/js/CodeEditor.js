import { history, historyKeymap, indentWithTab, redo, undo } from "@codemirror/commands"
import { css } from "@codemirror/lang-css"
import { html } from "@codemirror/lang-html"
import { javascript } from "@codemirror/lang-javascript"
import { EditorState } from "@codemirror/state"
import { oneDark } from "@codemirror/theme-one-dark"
import { keymap } from "@codemirror/view"
import { basicSetup, EditorView } from "codemirror"
import { onMounted, ref, toRefs } from "vue"
import { useClipboard } from '@vueuse/core'

export default {
  props: {
    language: {
      type: String,
      default: 'html'
    }
  },

  emits: ['updateCode', 'runCode'],

  setup(props, { emit }) {
    const { language } = toRefs(props)
    const editorLang = {
      html: {
        ext: html(),
        doc: '<p class="message">Hello World</p>'
      },
      css: {
        ext: css(),
        doc: '.message {\n  color: red;\n}'
      },
      javascript: {
        ext: javascript(),
        doc: 'console.log("Hello World");'
      }
    }
    const code = ref(editorLang[language.value].doc)
    const { copy, copied } = useClipboard({ source: code })

    let editorInstance = null

    function runCode() {
      emit('runCode')
    }

    function undoLast() {
      undo(editorInstance)
    }

    function redoLast() {
      redo(editorInstance)
    }

    function updateDocRef(v) {
      if (v.docChanged) {
        code.value = editorInstance.state.doc.toString()
        emit('updateCode', {lang: language.value.toLowerCase(), code: code.value})
      }
    }

    function downloadFiles() {
      emit('downloadFiles')
    }

    function mountEditor() {
      const parent = document.querySelector(`.code-editor__editor--${language.value}`)
      const extensions = [
        basicSetup,
        history(),
        keymap.of([indentWithTab, ...historyKeymap]),
        editorLang[language.value].ext,
        oneDark,
        EditorView.updateListener.of((v) => updateDocRef(v))
      ]

      return new EditorView({
        state: EditorState.create({
          doc: editorLang[language.value].doc,
          extensions
        }),
        parent
      })
    }

    onMounted(() => {
      editorInstance = mountEditor()
      emit('updateCode', { lang: language.value.toLowerCase(), code: code.value })
    })

    return {
      code,
      language,
      editorInstance,
      undoLast,
      redoLast,
      copy,
      copied,
      runCode,
      downloadFiles
    }
  }
}
