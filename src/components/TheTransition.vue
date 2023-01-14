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
  fadeOverlay: createClassList(
    transitionsStyle.fadeOverlayEnterFrom,
    transitionsStyle.fadeOverlayEnterActive,
    transitionsStyle.fadeOverlayLeaveActive
  ),
  fade: createClassList(
    transitionsStyle.fadeEnterFrom,
    transitionsStyle.fadeEnterActive,
    transitionsStyle.fadeLeaveActive
  ),
  slideOut: createClassList(
    transitionsStyle.slideOutEnterFrom,
    transitionsStyle.slideOutEnterActive,
    transitionsStyle.slideOutLeaveActive
  ),
  slideIn: createClassList(
    transitionsStyle.slideInEnterFrom,
    transitionsStyle.slideInEnterActive,
    transitionsStyle.slideInLeaveActive
  ),
}
</script>

<template>
  <Transition v-bind="transitions[props.name]">
    <slot />
  </Transition>
</template>
