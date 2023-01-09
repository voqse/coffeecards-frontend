<script setup>
import { useAuth } from '@/plugins/auth'
import globalStyle from '@/assets/scss/global.module.scss'

const { user } = useAuth()
</script>

<template>
  <div :class="globalStyle.content">
    <h1>{{ `${user.username}'s Profile` }}</h1>
  </div>
</template>
