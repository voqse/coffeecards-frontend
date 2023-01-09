<script setup>
import { useAuth } from '@/plugins/auth'

const { user } = useAuth()
</script>

<template>
  <div>
    <h1>{{ `${user.username}'s Profile` }}</h1>
  </div>
</template>
