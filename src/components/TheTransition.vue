<script setup>
import transitionsStyle from '@/assets/scss/transitions.module.scss'

const props = defineProps({
  name: {
    type: String,
    default: null,
  },
})

function createClassList(enterFromClass, enterActiveClass, leaveActiveClass) {
  return {
    enterFromClass,
    enterActiveClass,
    enterToClass: '',
    leaveFromClass: '',
    leaveActiveClass,
    leaveToClass: '',
  }
}

const transitions = {
  fade: createClassList(
    transitionsStyle.fadeEnterFrom,
    transitionsStyle.fadeEnterActive,
    transitionsStyle.fadeLeaveActive
  ),
  slideRight: createClassList(
    transitionsStyle.slideRightEnterFrom,
    transitionsStyle.slideRightEnterActive,
    transitionsStyle.slideRightLeaveActive
  ),
  slideLeft: createClassList(
    transitionsStyle.slideLeftEnterFrom,
    transitionsStyle.slideLeftEnterActive,
    transitionsStyle.slideLeftLeaveActive
  ),
}
</script>

<template>
  <Transition v-bind="transitions[props.name]">
    <slot />
  </Transition>
</template>
