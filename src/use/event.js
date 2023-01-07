import { onMounted, onUnmounted } from 'vue'

export default function useEvent(target, event, callback) {
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}
