<script setup>
import globalStyle from '@/assets/scss/global.module.scss'
</script>

<template>
  <div :class="globalStyle.wrapper">
    <div :class="globalStyle.container">
      <h1>Sign up</h1>
      <input type="text" />
      <input type="password" />
      <input type="password" />
      <button>Sign up</button>
    </div>
  </div>
</template>
