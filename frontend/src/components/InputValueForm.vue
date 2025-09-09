<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import InputNumber from 'primevue/inputnumber'

const props = defineProps<{
  value: number | null
}>()

const emit = defineEmits<{
  (e: 'update:value', value: number | null): void
}>()

function onInput(newValue: number | null) {
  emit('update:value', newValue)
}
</script>

<template>
  <div class="form-group">
    <label for="inputValue">Input Value:</label>
    <InputNumber
      :modelValue="props.value"
      @update:modelValue="onInput"
      inputId="integeronly"
      fluid
    />
  </div>
</template>

<style lang="css" scoped>
.form-group {
  margin-bottom: 1rem;
}
</style>
