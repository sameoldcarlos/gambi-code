import { toRefs } from "@vueuse/core"
import { computed } from "vue"

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

    return {
      output
    }

  }
}