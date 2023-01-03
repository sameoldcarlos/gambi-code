import CodeEditor from '@/components/CodeEditor.vue'
import {ref} from 'vue'

export default {
  setup() {
    const tabs = ref(['HTML', 'CSS', 'Javascript'])
    const selectedTab = ref('HTML')

    const setSelectedTab = tab => {
      selectedTab.value = tab
    }

    const isTabSelected = tab => {
      return selectedTab.value === tab
    }

    return {
      tabs,
      selectedTab,
      setSelectedTab,
      isTabSelected
    }
  },

  components: {
    CodeEditor
  }
}
