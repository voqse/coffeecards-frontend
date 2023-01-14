import { computed, ref } from 'vue'
import { contentService } from '@/services'

const collections = contentService.getCollections()
const selectedCollectionId = ref(collections?.[0].id)
const selectedCollection = computed(() => contentService.getCollections(selectedCollectionId.value))
const decks = computed(() => contentService.getDecks(selectedCollectionId.value))
const selectedDeckId = ref(null)
const selectedDeck = computed(() => contentService.getDecks(selectedCollectionId.value))

export default function useState() {
  return {
    collections,
    selectedCollection,
    selectedCollectionId,
    decks,
  }
}
