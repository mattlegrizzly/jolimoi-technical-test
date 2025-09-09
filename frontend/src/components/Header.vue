<template>
  <div class="header">
    <img src="@/assets/logo.png" alt="Logo" height="50" />
    <h1>Numeral Converter</h1>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  border-bottom: 1px solid var(--stroke-color);
  color: var(--primary-color);
  padding: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  margin: 0;
  font-size: 2rem;
}
</style>
