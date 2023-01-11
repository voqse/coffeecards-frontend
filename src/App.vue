<script setup>
import { onBeforeMount, ref, watch } from 'vue'
import { useServices } from '@/plugins/servicesPlugin'
import TheHeader from '@/components/TheHeader.vue'
import TheTransition from '@/components/TheTransition.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { contentService } = useServices()
const collections = contentService.getCollections()
const selectedCollection = ref(collections?.[0].id)
const headerTitle = ref(null)

watch(selectedCollection, (value) => {
  router.push(String(value))
})

function updatePage(event) {
  headerTitle.value = event.title
}
</script>

<template>
  <TheHeader>
    <template v-if="!headerTitle">
      <select v-model="selectedCollection" name="collections">
        <option v-for="collection in collections" :key="collection.id" :value="collection.id">
          {{ collection.title }}
        </option>
      </select>
    </template>
    <template v-else>
      {{ headerTitle }}
    </template>
  </TheHeader>
  <div :class="$style.content">
    <RouterView v-slot="{ Component, route }">
      <TheTransition :name="route.meta.transition">
        <component :is="Component" :key="route.path" @update:page="updatePage" />
      </TheTransition>
    </RouterView>
  </div>
</template>

<style lang='scss' module>
.content {
  position: relative;
  display: flex;
  flex: 1 0 auto;
  align-items: stretch;
  justify-content: stretch;
  overflow: hidden;
}
</style>
