import { computed,  ref, toRefs } from 'vue'

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

    function refresh() {
      if(!resultRef.value) return

      resultRef.value.contentWindow.location.reload()
    }

    return {
      output,
      resultRef,
      refresh
    }

  }
}