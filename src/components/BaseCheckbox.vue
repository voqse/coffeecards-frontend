<script setup>
import inputsStyle from '@/assets/scss/inputs.module.scss'

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String,
    default: null,
  },
  error: {
    type: Boolean,
    default: false,
  },
})
defineEmits(['update:modelValue'])

const id = `checkbox-${Math.round(Math.random() * 10 ** 6)}`
</script>

<template>
  <div :class="[inputsStyle.wrapper, $style.checkboxWrapper]">
    <input
      :id="id"
      type="checkbox"
      :value="value"
      :checked="modelValue"
      :class="$style.checkbox"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label v-if="$slots.default" :for="id" :class="$style.label"><slot /></label>
  </div>
</template>

<style lang="scss" module>
.checkboxWrapper {
  display: flex;
  align-items: flex-start;
  padding: 0.5rem 1rem;
}

.checkbox {
  display: block;
  flex: 0 0 auto;
  width: 1rem;
  height: 1rem;
  padding: 0;
  margin: 0.15625rem 0;
  border: 2px solid var(--color-text-dimmed);
  border-radius: 3px;

  &:checked {
    background-color: var(--color-accent);
    border-color: transparent;
  }
}

.label {
  display: block;
  width: 100%;
  margin-left: 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}
</style>
