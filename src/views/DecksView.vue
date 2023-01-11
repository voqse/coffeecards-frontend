<script setup>
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { useServices } from '@/plugins/servicesPlugin'
import globalStyle from '@/assets/scss/global.module.scss'

const { contentService } = useServices()
const route = useRoute()
const emit = defineEmits(['update:page'])
const decks = contentService.getDecks(route.params.collectionId)

onBeforeMount(() => {
  emit('update:page', { title: null })
})

function resolvePath({ id }) {
  return { name: 'cards', params: { deckId: id } }
}
</script>

<template>
  <div :class="globalStyle.wrapper">
    <div :class="globalStyle.container">
      <h1>Decks</h1>
      <div v-for="deck in decks" :key="deck.id">
        <RouterLink :to="resolvePath(deck)">{{ deck.title }}</RouterLink>
      </div>
    </div>
  </div>
</template>
