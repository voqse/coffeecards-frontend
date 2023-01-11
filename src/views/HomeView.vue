<script setup>
import globalStyle from '@/assets/scss/global.module.scss'
import { useServices } from '@/plugins/servicesPlugin'
import { onBeforeMount } from 'vue'

const { contentService } = useServices()
const collections = contentService.getCollections()
const emit = defineEmits(['update:page'])

onBeforeMount(() => {
  emit('update:page', { title: null })
})
</script>

<template>
  <div :class="globalStyle.wrapper">
    <div :class="globalStyle.container">
      <h1>Collections</h1>
      <div v-for="collection in collections" :key="collection.id">
        <div>
          <h2>{{ collection.title }}</h2>
        </div>
        <div v-for="deck in collection.decks" :key="`${collection.id}-${deck.id}`">
          <RouterLink :to="{ name: 'decks', params: { id: deck.id } }">{{ deck.title }}</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
