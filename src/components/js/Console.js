import { ref, toRefs } from 'vue'

export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const consoleMsg = ref('')
    const hasError = ref(false)
    const { isVisible } = toRefs(props)

    window.addEventListener('message', event => {
      if (event.origin===window.location.origin) {
        if (event.data.type && event.data.type ==='console') {
          const { data: { message }} = event
          hasError.value = message.toLowerCase().includes('error')
          consoleMsg.value = message
        }
      }
    })

    return { consoleMsg, hasError, isVisible }
  }
}
