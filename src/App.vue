<script setup>
import { useAuth } from '@/plugins/auth'

const { logout, user } = useAuth()
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <template v-if="!user.authenticated">
          <RouterLink to="/signin">Sign in</RouterLink>
          <RouterLink to="/signup">Sign up</RouterLink>
        </template>
        <RouterLink to="/decks">Decks</RouterLink>
        <RouterLink to="/cards">Cards</RouterLink>
        <template v-if="user.authenticated">
          <RouterLink to="/profile">{{ user.username }}</RouterLink>
          <RouterLink to="/settings">Settings</RouterLink>
          <b @click="logout">Logout</b>
        </template>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang='scss' module>
nav {
  & > * + * {
    margin-left: 0.5em;
  }
}
</style>
