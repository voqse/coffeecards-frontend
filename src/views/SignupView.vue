<script setup>
import globalStyle from '@/assets/scss/global.module.scss'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseCheckbox from '@/components/BaseCheckbox.vue'
import { onBeforeMount } from 'vue'

const emit = defineEmits(['update:page'])

onBeforeMount(() => {
  emit('update:page', { title: 'Sign up' })
})
</script>

<template>
  <div :class="globalStyle.wrapper">
    <div :class="[globalStyle.container, $style.centered]">
      <form>
        <BaseInput type="email">Email</BaseInput>
        <BaseInput type="text">Username</BaseInput>
        <BaseInput type="password">Password</BaseInput>
        <BaseInput type="password">Repeat password</BaseInput>
        <BaseCheckbox>
          I have read and agree with the
          <RouterLink to="/signin" @click.stop>Terms and&nbsp;Conditions</RouterLink>
        </BaseCheckbox>
        <BaseButton :class="$style.submit" type="submit">Sign up</BaseButton>
      </form>
      <div :class="$style.switch">Already have an&nbsp;account? <RouterLink to="/signin">Sign in</RouterLink></div>
    </div>
  </div>
</template>

<style lang="scss" module>
.centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 25rem;
}

.submit {
  margin: 2rem 0;
}

.switch {
  margin-bottom: 2rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.04em;
}
</style>
