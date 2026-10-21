<script setup lang="ts">
defineProps<{ message: string }>()
</script>

<template>
  <p class="counter">{{ message }}</p>
</template>

<style>
.counter { color: red; }
</style>
