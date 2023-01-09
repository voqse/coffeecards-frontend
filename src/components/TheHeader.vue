<script setup>
import globalStyle from '@/assets/scss/global.module.scss'
import { useAuth } from '@/plugins/auth'

const auth = useAuth()
</script>

<template>
  <header :class="globalStyle.container">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <template v-if="!auth.user.authenticated">
        <RouterLink to="/signin">Sign in</RouterLink>
        <RouterLink to="/signup">Sign up</RouterLink>
      </template>
      <RouterLink to="/decks">Decks</RouterLink>
      <RouterLink to="/cards">Cards</RouterLink>
      <template v-if="auth.user.authenticated">
        <RouterLink to="/profile">{{ auth.user.username }}</RouterLink>
        <RouterLink to="/settings">Settings</RouterLink>
        <b @click="auth.logout">Logout</b>
      </template>
    </nav>
  </header>
</template>

<style lang="scss" module>
nav {
  display: flex;

  a {
    display: block;
    flex: 1 0 auto;
    padding: 0.75rem 0.5rem;
    text-align: center;
  }
}
</style>
