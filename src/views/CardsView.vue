<script setup>
import { useRoute } from 'vue-router'
import useState from '@/use/state'
import globalStyle from '@/assets/scss/global.module.scss'
import TheHeader from '@/components/TheHeader.vue'
import { contentService } from '@/services'

const { selectedCollection } = useState()
const route = useRoute()
const cards = contentService.getCards(route.params.deckId)
</script>

<template>
  <div :class="globalStyle.wrapper">
    <TheHeader>{{ `${selectedCollection.title} cards` }}</TheHeader>
    <div :class="globalStyle.container">
      <div v-for="card in cards" :key="card.id">
        {{ card.word }}<br />
        {{ card.transcription }}<br />
        {{ card.description }}<br /><br />
      </div>
    </div>
  </div>
</template>
