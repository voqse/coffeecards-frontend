import { onMounted, onUnmounted } from 'vue'

export default function useEvent(target, event, callback, options) {
  onMounted(() => target.addEventListener(event, callback, options))
  onUnmounted(() => target.removeEventListener(event, callback, options))
}
