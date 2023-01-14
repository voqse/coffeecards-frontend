<script setup>
import TheTransition from '@/components/TheTransition.vue'
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <TheTransition :name="route.meta.transition">
      <component :is="Component" :key="route.path" />
    </TheTransition>
  </RouterView>
</template>
