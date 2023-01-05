import CodeEditor from '@/components/CodeEditor.vue'
import {ref} from 'vue'

export default {
  emits: ['runCode'],
  setup({}, { emit }) {
    const tabs = ref(['HTML', 'CSS', 'Javascript'])
    const selectedTab = ref('HTML')
    const editorContent = {
      html: {
        code: ''
      },
      css: {
        code: ''
      },
      javascript: {
        code: ''
      }
    }
    const isTabSelected = tab => selectedTab.value===tab

    function setSelectedTab(tab) {
      selectedTab.value = tab
    }

    function updateContent ({lang, code}) {
      editorContent[lang].code = code
    }

    function notifyRunner() {
      const iFrameSource = getSrcDoc()
      emit('updateSource', iFrameSource)
    }

    function getSrcDoc() {
      const srcDoc = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
          </head>
          <body>
            ${editorContent['html'].code}
            <style>
              ${editorContent['css'].code}
            </style>
            <script>
              ${editorContent['javascript'].code}
            </script>
          </body>
        </html>
      `
      return srcDoc
    }

    return {
      tabs,
      selectedTab,
      setSelectedTab,
      isTabSelected,
      updateContent,
      editorContent,
      notifyRunner
    }
  },

  components: {
    CodeEditor
  }
}
