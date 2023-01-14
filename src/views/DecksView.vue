<script setup>
import useState from '@/use/state'
import globalStyle from '@/assets/scss/global.module.scss'
import TheHeader from '@/components/TheHeader.vue'
import TheTransition from '@/components/TheTransition.vue'

const { selectedCollectionId, collections, decks } = useState()
function resolvePath({ id }) {
  return { name: 'cards', params: { deckId: id } }
}
</script>

<template>
  <div :class="globalStyle.wrapper">
    <TheHeader>
      <select v-model="selectedCollectionId" name="collections">
        <option v-for="collection in collections" :key="collection.id" :value="collection.id">
          {{ collection.title }}
        </option>
      </select>
    </TheHeader>
    <div :class="$style.transition">
      <TheTransition name="fade">
        <div :key="selectedCollectionId" :class="globalStyle.container">
          <div v-for="deck in decks" :key="deck.id">
            <RouterLink :to="resolvePath(deck)">{{ deck.title }}</RouterLink>
          </div>
        </div>
      </TheTransition>
    </div>
  </div>
</template>

<style lang="scss" module>
.transition {
  position: relative;
}
</style>
