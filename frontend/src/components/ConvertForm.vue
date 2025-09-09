<script setup lang="ts">
import { ref } from 'vue'
import InputValueForm from './InputValueForm.vue'
import Button from 'primevue/button'
import { useConversion } from '@/composables/useConversion'

const { value, result, loading, error, convert } = useConversion()
</script>

<template>
  <div class="convert-form">
    <h2>Convert Numerals</h2>
    <InputValueForm :value="value" @update:value="(val) => (value = val)" />
    <form>
      <Button label="Convert" :loading="loading" @click="convert" />
    </form>
    <div v-if="result !== null" class="result">
      <h3>Result: {{ result }}</h3>
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
