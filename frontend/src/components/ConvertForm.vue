<script setup lang="ts">
import { computed, ref } from 'vue'
import InputValueForm from './InputValueForm.vue'
import Button from 'primevue/button'
import { useConversion } from '@/composables/useConversion'
import { useConversionSSE } from '@/composables/useConversionSSE'
import ToggleSwitch from 'primevue/toggleswitch'
import { Toast } from 'primevue'

const ajaxConversion = useConversion()
const sseConversion = useConversionSSE()

const activeConversion = computed(() => (useSSE.value ? sseConversion : ajaxConversion))

const inputValue = computed(() => activeConversion.value.value)

const convert = () => {
  activeConversion.value.convert()
}

const useSSE = ref(false)
</script>

<template>
  <Toast />
  <div class="convert-form">
    <div
      class="header"
      style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
      "
    >
      <h2>Convert Numerals {{ useSSE ? ' (SSE)' : '' }}</h2>
      <ToggleSwitch v-model="useSSE" @update:model-value="(val) => (useSSE = val)" />
    </div>
    <InputValueForm :value="inputValue.value" @update:value="(val) => (inputValue.value = val)" />
    <form>
      <Button label="Convert" :loading="activeConversion.loading.value" @click="convert" />
    </form>
    <div v-if="activeConversion.result.value" class="result">
      <h3>Result: {{ activeConversion.result.value }}</h3>
    </div>
  </div>
</template>

<style scoped>
.convert-form {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid var(--stroke-color);
  border-radius: 8px;
  background-color: #fff;
}
</style>
