<template>
    <article class="border dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 class="text-xl font-bold">{{ post.title }}</h3>
      <time class="text-sm text-gray-500">{{ formatDate(post.date) }}</time>
      <p class="mt-2">{{ post.excerpt }}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded"
        >
          {{ tag }}
        </span>
      </div>
    </article>
  </template>
  
  <script setup lang="ts">
  import { BlogPost } from '@/types'
  
  defineProps<{
    post: BlogPost
  }>()
  
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
  </script>
  
  <script lang="ts">
  export default {
    name: 'BlogCard'
  }
  </script>