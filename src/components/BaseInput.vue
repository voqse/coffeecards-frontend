<script setup>
import inputsStyle from '@/assets/scss/inputs.module.scss'

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
  errorMessage: {
    type: String,
    default: null,
  },
  helpMessage: {
    type: String,
    default: null,
  },
})
defineEmits(['update:modelValue'])

const id = `${props.type}-${Math.round(Math.random() * 10 ** 6)}`
</script>

<template>
  <div :class="inputsStyle.wrapper">
    <label v-if="$slots.default" :for="id" :class="inputsStyle.title">
      <slot />
    </label>
    <input
      :id="id"
      ref="input"
      :type="type"
      :value="modelValue"
      :class="$style.input"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div v-if="errorMessage" :class="$style.message">{{ errorMessage }}</div>
    <div v-else-if="helpMessage" :class="$style.message">{{ helpMessage }}</div>
  </div>
</template>

<style lang="scss" module>
.input {
  transition: background-color 0.6s var(--transition-out), border 0.6s var(--transition-out);

  &:focus {
    background-color: #252628;
    border-color: rgba(#fff, 0.2);
  }
}
</style>
