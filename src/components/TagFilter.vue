<script setup lang="ts">
interface Props {
  tags: string[]
  selectedTag: string | null
  className?: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:selectedTag', value: string | null): void
}>()
</script>

<template>
  <div :class="['flex flex-wrap gap-2', className]">
    <button
      @click="emit('update:selectedTag', null)"
      class="px-3 py-1 rounded-full text-sm"
      :class="{
        'bg-primary-light text-white dark:bg-primary-dark dark:text-gray-900': !selectedTag,
        'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300': selectedTag
      }"
    >
      All
    </button>
    
    <button
      v-for="tag in tags"
      :key="tag"
      @click="emit('update:selectedTag', tag)"
      class="px-3 py-1 rounded-full text-sm"
      :class="{
        'bg-primary-light text-white dark:bg-primary-dark dark:text-gray-900': selectedTag === tag,
        'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300': selectedTag !== tag
      }"
    >
      {{ tag }}
    </button>
  </div>
</template> 