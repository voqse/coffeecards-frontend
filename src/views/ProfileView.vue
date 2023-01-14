<script setup>
import { useAuth } from '@/plugins/authPlugin'
import globalStyle from '@/assets/scss/global.module.scss'
import TheHeader from '@/components/TheHeader.vue'

const { user } = useAuth()
</script>

<template>
  <div :class="globalStyle.wrapper">
    <TheHeader>{{ `${user.username}'s profile` }}</TheHeader>
    <div :class="globalStyle.container">
      <h1>{{ `${user.username}'s Profile` }}</h1>
    </div>
  </div>
</template>
