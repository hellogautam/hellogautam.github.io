<template>
  <div class="space-y-8">
    <MetaTags
      title="Reading"
      description="A curated list of articles, books, and videos I've found helpful"
    />

    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Reading List</h1>

    <!-- Search and Filter -->
    <div class="space-y-4">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search items..."
        class="w-full p-2 border dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
      />

      <div class="flex flex-wrap gap-2">
        <button
          @click="selectedType = null"
          class="px-3 py-1 rounded-full text-sm"
          :class="!selectedType ? 'bg-primary-light dark:bg-primary-dark text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'"
        >
          All
        </button>
        <button
          v-for="type in allTypes"
          :key="type"
          @click="selectedType = type"
          class="px-3 py-1 rounded-full text-sm"
          :class="selectedType === type ? 'bg-primary-light dark:bg-primary-dark text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'"
        >
          {{ type }}
        </button>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="text-center py-12">
      <LoadingSpinner />
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center py-12 text-red-600 dark:text-red-400">
      {{ error }}
    </div>

    <!-- Content List -->
    <section class="grid grid-cols-1 gap-6">
      <article
        v-for="item in filteredItems"
        :key="item.id"
        class="p-6 border dark:border-gray-700 rounded-lg"
      >
        <div class="flex justify-between items-start">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">{{ item.title }}</h2>
          <span class="text-sm text-gray-500 dark:text-gray-400">{{ item.type }}</span>
        </div>
        <time class="text-sm text-gray-500 dark:text-gray-400">{{ formatDate(item.date) }}</time>
        <p v-if="item.notes" class="mt-2 text-gray-600 dark:text-gray-300">
          {{ item.notes }}
        </p>
        <a
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 inline-block text-primary-light dark:text-primary-dark hover:underline"
        >
          Read More →
        </a>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import MetaTags from '@/components/MetaTags.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { searchContent } from '@/utils/search'
import type { ReadingItem } from '@/types'

const items = ref<ReadingItem[]>([])
const searchQuery = ref('')
const selectedType = ref<string | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

const allTypes = computed(() => {
  const types = new Set<string>()
  items.value.forEach(item => {
    types.add(item.type)
  })
  return Array.from(types).sort()
})

const filteredItems = computed(() => {
  let filtered = searchContent(items.value, searchQuery.value)
  if (selectedType.value) {
    filtered = filtered.filter(item => item.type === selectedType.value)
  }
  return filtered
})

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

onMounted(async () => {
  try {
    const response = await import('@/content/reading/index.json')
    items.value = response.default.items
  } catch (e) {
    error.value = 'Failed to load reading list'
    console.error(e)
  } finally {
    loading.value = false
  }
})
</script> 