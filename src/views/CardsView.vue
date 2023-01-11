<script setup>
import { useRoute } from 'vue-router'
import { useServices } from '@/plugins/servicesPlugin'
import globalStyle from '@/assets/scss/global.module.scss'
import { onBeforeMount } from 'vue'

const { contentService } = useServices()
const route = useRoute()
const emit = defineEmits(['update:page'])
const cards = contentService.getCards(route.params.deckId)

onBeforeMount(() => {
  emit('update:page', { title: 'Cards' })
})
</script>

<template>
  <div :class="globalStyle.wrapper">
    <div :class="globalStyle.container">
      <h1>Cards</h1>
      <div v-for="card in cards" :key="card.id">
        {{ card.word }}<br />
        {{ card.transcription }}<br />
        {{ card.description }}<br /><br />
      </div>
    </div>
  </div>
</template>
