<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheTransition from '@/components/TheTransition.vue'
</script>

<template>
  <TheHeader title="Header title" />
  <div :class="$style.content">
    <RouterView v-slot="{ Component, route }">
      <TheTransition :name="route.meta.transition">
        <component :is="Component" :key="route.path" />
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
