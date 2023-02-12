import EditorManager from '@/components/EditorManager.vue'
import OutputModule from '@/components/OutputModule.vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { useEventBus } from '@vueuse/core'
import { ref } from 'vue'

export default {
  setup() {
    const outputSource = ref('')
    const outputModuleRef = ref(null)
    const breakpoints = useBreakpoints(breakpointsTailwind)
    const isMobile = breakpoints.smaller('lg')
    const bus = useEventBus('consoleAction')
    
    function renderSource(source) {
      outputSource.value = source
      bus.emit('clearConsole')
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
