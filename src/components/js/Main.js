import EditorManager from '@/components/EditorManager.vue'
import OutputModule from '@/components/OutputModule.vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { ref } from 'vue'

export default {
  setup() {
    const outputSource = ref('')
    const outputModuleRef = ref(null)
    const breakpoints = useBreakpoints(breakpointsTailwind)
    const isMobile = breakpoints.smaller('lg')
    
    function renderSource(source) {
      outputSource.value = source
      if (outputModuleRef && isMobile.value) {
        outputModuleRef.value.$el.scrollIntoView({
          behavior: 'smooth',
          alignToTop: true
        })
      }
    }

    return {
      outputSource,
      renderSource,
      outputModuleRef
    }
  },

  components: {
    EditorManager,
    OutputModule
  }
}
