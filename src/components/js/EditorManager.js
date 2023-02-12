import CodeEditor from '@/components/CodeEditor.vue'
import JSZip from 'jszip'
import {ref} from 'vue'
import { useEventBus } from '@vueuse/core'

export default {
  emits: ['updateSource'],
  setup({}, { emit }) {
    const tabs = ref(['HTML', 'CSS', 'Javascript'])
    const selectedTab = ref('HTML')
    const bus = useEventBus('managerAction')
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

    bus.on((event) => {
      if(event==='notifyRunner') notifyRunner()
      if(event==='downloadFiles') downloadFiles()
    })

    function setSelectedTab(tab) {
      selectedTab.value = tab
    }

    function updateContent ({lang, code}) {
      editorContent[lang].code = code
    }

    function notifyRunner() {
      const iFrameSource = getSrcDoc('run')
      emit('updateSource', iFrameSource)
    }

    function downloadFiles() {
      const zip = new JSZip()
      const styles = zip.folder('css')
      const scripts = zip.folder('js')
      
      styles.file('styles.css', editorContent.css.code)
      scripts.file('scripts.js', editorContent.javascript.code)

      zip.file('index.html', getSrcDoc('download'))
      zip.generateAsync({ type: "blob" })
        .then(function (content) {
          const a = document.createElement("a");
          a.href = window.URL.createObjectURL(new Blob([content], { type: "application/zip" }));
          a.download = "gambi.zip";
          a.click(); 
        });
    }

    function getSrcDoc(command) {
      let tags='', external = ''

      if(command==='run') {
        tags = `
          <style>
            ${editorContent['css'].code}
          </style>
          <script type="module">
            ${editorContent['javascript'].code}
          </script>
          <script src="consoleBuilder.js"></script>
        `
      }

      if(command==='download') {
        external = `
          <link rel="stylesheet" href="./css/styles.css">
          <script type="module" src="./js/scripts.js" defer></script>
        `
      }

      return `
        <!DOCTYPE html>
        <html lang="pt-BR">
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            ${external}
            <title>Gambi Code App</title>
          </head>
          <body>
            ${editorContent['html'].code}
            ${tags}
          </body>
        </html>
      `
    }

    return {
      tabs,
      selectedTab,
      setSelectedTab,
      isTabSelected,
      updateContent,
      editorContent,
      notifyRunner,
      downloadFiles
    }
  },

  components: {
    CodeEditor
  }
}
