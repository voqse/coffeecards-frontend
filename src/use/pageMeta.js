import { onBeforeMount } from 'vue'

export default function usePageMeta(emit, meta) {
  // TODO: Update page title

  onBeforeMount(() => {
    emit('update:page', meta)
  })
}
