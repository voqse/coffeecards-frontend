<script setup>
import transitionStyle from '@/assets/scss/transition.module.scss'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <Transition :name="transitionStyle[props.name]">
    <slot />
  </Transition>
</template>
