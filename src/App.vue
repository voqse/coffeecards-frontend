<script setup>
import TheHeader from '@/components/TheHeader.vue'
import globalStyle from '@/assets/scss/global.module.scss'
</script>

<template>
  <TheHeader title="Header title" />

  <div :class="[globalStyle.container, $style.content]">
    <RouterView v-slot="{ Component, route }">
      <Transition :name="route.meta.transition">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </div>
</template>

<style lang='scss' module>
.content {
  position: relative;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  height: 100%;
}
</style>
