<script setup>
import { reactive } from 'vue'
import { useAuth } from '@/plugins/auth'
import globalStyle from '@/assets/scss/global.module.scss'

const { login } = useAuth()

const formData = reactive({
  username: null,
  password: null,
})

function onLogin() {
  login(formData)
}
</script>

<template>
  <div :class="[$style.wrapper, globalStyle.content]">
    <h1>Sign in</h1>
    <input v-model="formData.username" type="text" />
    <input v-model="formData.password" type="password" />
    <button @click="onLogin">Login</button>
  </div>
</template>

<style lang="scss" module>
.wrapper {
  padding-bottom: 2rem;
}
</style>
