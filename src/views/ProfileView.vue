<script setup>
import { onBeforeMount } from 'vue'
import { useAuth } from '@/plugins/authPlugin'
import globalStyle from '@/assets/scss/global.module.scss'

const { user } = useAuth()
const emit = defineEmits(['update:page'])

onBeforeMount(() => {
  emit('update:page', { title: user.username })
})
</script>

<template>
  <div :class="globalStyle.wrapper">
    <div :class="globalStyle.container">
      <h1>{{ `${user.username}'s Profile` }}</h1>
    </div>
  </div>
</template>
