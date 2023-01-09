<script setup>
import transitionStyle from '@/assets/scss/transition.module.scss'

const props = defineProps({
  name: {
    type: 'fade' || 'slideRight' || 'slideLeft',
    required: true,
  },
})

const classList = {
  enterFromClass: transitionStyle[`${props.name}EnterFrom`],
  enterActiveClass: transitionStyle[`${props.name}EnterActive`],
  enterToClass: null,
  appearFromClass: null,
  appearActiveClass: null,
  appearToClass: null,
  leaveFromClass: null,
  leaveActiveClass: transitionStyle[`${props.name}LeaveActive`],
  leaveToClass: null,
}
</script>

<template>
  <Transition :name="props.name" v-bind="classList">
    <slot />
  </Transition>
</template>
