<script setup>
import globalStyle from '@/assets/scss/global.module.scss'
import { useAuth } from '@/plugins/authPlugin'

defineProps({
  title: {
    type: String,
    default: null,
  },
})
const auth = useAuth()
</script>

<template>
  <div :class="[globalStyle.wrapper]">
    <div :class="$style.header">
      <header :class="globalStyle.container">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/decks">Decks</RouterLink>
          <RouterLink to="/cards">Cards</RouterLink>
          <template v-if="auth.user.authenticated">
            <RouterLink to="/profile">{{ auth.user.username }}</RouterLink>
            <RouterLink to="/settings">Settings</RouterLink>
            <RouterLink to="/logout">Logout</RouterLink>
          </template>
        </nav>
      </header>
    </div>
  </div>
</template>

<style lang="scss" module>
.header {
  overflow-x: auto;
}

nav {
  display: flex;

  a {
    display: block;
    flex: 1 0 auto;
    padding: 0.75rem 0.5rem;
    color: var(--color-text-dimmed);
    text-align: center;
  }
}
</style>
