<script setup>
import globalStyle from '@/assets/scss/global.module.scss'
import { onBeforeMount } from 'vue'

const emit = defineEmits(['update:page'])

onBeforeMount(() => {
  emit('update:page', { title: 'Settings' })
})
</script>

<template>
  <div :class="globalStyle.wrapper">
    <div :class="globalStyle.container">
      <h1>Settings</h1>
    </div>
  </div>
</template>
