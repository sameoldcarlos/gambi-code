import CodeEditor from '@/components/CodeEditor.vue'
import {ref} from 'vue'

export default {
  setup() {
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

    return {
      tabs,
      selectedTab,
      setSelectedTab,
      isTabSelected,
      updateContent,
      editorContent
    }
  },

  components: {
    CodeEditor
  }
}
