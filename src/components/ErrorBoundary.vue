<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue'

const error = ref<Error | null>(null)

onErrorCaptured((err) => {
  error.value = err as Error
  return false
})
</script>

<template>
  <div v-if="error" class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
    <h3 class="text-lg font-semibold text-red-800 dark:text-red-200">Something went wrong</h3>
    <p class="mt-2 text-red-700 dark:text-red-300">{{ error.message }}</p>
  </div>
  <slot v-else></slot>
</template> 