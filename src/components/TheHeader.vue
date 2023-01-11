<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuth } from '@/plugins/authPlugin'

import globalStyle from '@/assets/scss/global.module.scss'
import BaseButton from '@/components/BaseButton.vue'

import BackIcon from '@/assets/icons/IconBack.svg'
import MenuIcon from '@/assets/icons/IconMenu.svg'

defineProps({
  title: {
    type: String,
    default: null,
  },
})

const { user } = useAuth()
const router = useRouter()
const route = useRoute()
const isChildRoute = computed(() => route.path.split('/').length > 2)

function goBack() {
  const path = route.path.split('/').slice(0, -1).join('/') || '/'
  router.push(path)
}
</script>

<template>
  <div :class="[globalStyle.wrapper]">
    <header :class="[globalStyle.container, $style.header]">
      <BaseButton v-if="isChildRoute" :class="$style.backButton" @click="goBack"><BackIcon /></BaseButton>
      <div :class="$style.title">
        <slot />
      </div>
      <RouterLink to="/logout">
        <BaseButton v-if="user.authenticated" :class="$style.menuButton"><MenuIcon /></BaseButton>
      </RouterLink>
    </header>
  </div>
</template>

<style lang="scss" module>
.header {
  display: flex;
  align-items: center;
  height: 4rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-text-button);
}

.title {
  width: 100%;
}

.backButton,
.menuButton {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  color: var(--color-text-button);
  background-color: var(--color-element-button);
}

.backButton {
  margin-right: 0.5rem;
}

.menuButton {
  margin-left: 0.5rem;
}
</style>
