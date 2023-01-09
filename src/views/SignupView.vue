<script setup>
import globalStyle from '@/assets/scss/global.module.scss'
</script>

<template>
  <div :class="[$style.wrapper, globalStyle.content]">
    <h1>Sign up</h1>
    <input type="text" />
    <input type="password" />
    <input type="password" />
    <button>Sign up</button>
  </div>
</template>

<style lang="scss" module>
.wrapper {
  justify-content: flex-end;
  padding-bottom: 2rem;
}
</style>
