import { computed,  ref, toRefs } from 'vue'
import Console from '@/components/Console.vue'

export default {
  props: {
    srcDoc: {
      type: String,
      default: ''
    }
  },

  setup(props) {
    const { srcDoc } = toRefs(props)
    const output = computed(() => srcDoc.value)
    const resultRef = ref(null)
    const showConsole = ref(false)

    function refresh() {
      if(!resultRef.value) return

      resultRef.value.contentWindow.location.reload()
    }

    function toggleShowConsole() {
      showConsole.value = !showConsole.value
    }

    return {
      output,
      toggleShowConsole,
      resultRef,
      refresh,
      showConsole
    }
  },

  components: {
    Console
  }
}
