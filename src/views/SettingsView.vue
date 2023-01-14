<script setup>
import globalStyle from '@/assets/scss/global.module.scss'
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <div :class="globalStyle.wrapper">
    <TheHeader>Settings</TheHeader>
    <div :class="globalStyle.container">
      <h1>Settings</h1>
    </div>
  </div>
</template>
