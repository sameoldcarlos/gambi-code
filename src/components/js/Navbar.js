import { ref } from 'vue';
import { useEventBus } from '@vueuse/core'

export default {
  setup() {
    const showMenu = ref(false)
    const toggleNav = () => (showMenu.value = !showMenu.value)
    const bus = useEventBus('managerAction')

    function notifyRunner() {
      bus.emit('notifyRunner')
    }

    function downloadFiles() {
      bus.emit('downloadFiles')
    }
    return {
      showMenu,
      toggleNav,
      notifyRunner,
      downloadFiles
    };
  },
};
