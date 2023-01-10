<script setup>
import transitionStyle from '@/assets/scss/transition.module.scss'

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
    transitionStyle.fadeEnterFrom,
    transitionStyle.fadeEnterActive,
    transitionStyle.fadeLeaveActive
  ),
  slideRight: createClassList(
    transitionStyle.slideRightEnterFrom,
    transitionStyle.slideRightEnterActive,
    transitionStyle.slideRightLeaveActive
  ),
  slideLeft: createClassList(
    transitionStyle.slideLeftEnterFrom,
    transitionStyle.slideLeftEnterActive,
    transitionStyle.slideLeftLeaveActive
  ),
}
</script>

<template>
  <Transition v-bind="transitions[props.name]">
    <slot />
  </Transition>
</template>
