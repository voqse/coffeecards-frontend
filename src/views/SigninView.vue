<script setup>
import { reactive, ref } from 'vue'
import { useAuth } from '@/plugins/auth'
import useEvent from '@/use/event'

import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseCheckbox from '@/components/BaseCheckbox.vue'

import globalStyle from '@/assets/scss/global.module.scss'
import inputsStyle from '@/assets/scss/inputs.module.scss'

const { login } = useAuth()
const loginRef = ref(null)
const passwordRef = ref(null)
const formData = reactive({
  login: null,
  password: null,
  remember: false,
})

function onSubmit() {
  if (!formData.login) {
    loginRef.value.$refs.input.focus()
  } else if (!formData.password) {
    passwordRef.value.$refs.input.focus()
  } else {
    login(formData)
  }
}

useEvent(
  document,
  'keyup',
  (event) => {
    if (event.defaultPrevented) return
    if (event.key === 'Enter') {
      onSubmit()
    }
    event.preventDefault()
  },
  true
)
</script>

<template>
  <div :class="globalStyle.wrapper">
    <div :class="[globalStyle.container, $style.centered]">
      <form @submit.prevent="onSubmit">
        <BaseInput ref="loginRef" v-model="formData.login" type="text">Email or Username</BaseInput>
        <BaseInput ref="passwordRef" v-model="formData.password" type="password">Password</BaseInput>
        <div :class="[$style.unionBlock, inputsStyle.wrapper]">
          <BaseCheckbox v-model="formData.remember" :class="$style.checkbox">Remember me</BaseCheckbox>
          <RouterLink to="/signup" :class="$style.recoverLink">Forgot password?</RouterLink>
        </div>
        <BaseButton :class="$style.submit" type="submit">Sign in</BaseButton>
      </form>
      <div :class="$style.switch">Don't have an&nbsp;account? <RouterLink to="/signup">Sign up</RouterLink></div>
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

.unionBlock {
  display: flex;
  align-items: center;
  padding-right: 1rem;
}

.checkbox {
  width: 100%;
}

.recoverLink {
  flex: 0 0 auto;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}
</style>
