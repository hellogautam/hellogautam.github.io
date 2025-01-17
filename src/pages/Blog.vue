<template>
  <div class="space-y-8">
    <MetaTags
      title="Blog"
      description="Thoughts and tutorials about web development and software engineering"
    />
    
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Blog</h1>
    
    <div>
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search posts..."
        class="w-full p-2 border dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
      />
    </div>
    
    <div v-if="loading" class="text-center py-12">
      <LoadingSpinner />
    </div>
    
    <div v-else-if="error" class="text-center py-12 text-red-600 dark:text-red-400">
      {{ error }}
    </div>
    
    <div v-else class="grid grid-cols-1 gap-6">
      <RouterLink
        v-for="post in filteredPosts"
        :key="post.id"
        :to="`/blog/${post.id}`"
        class="block"
      >
        <BlogCard :post="post" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import BlogCard from '@/components/BlogCard.vue'
import MetaTags from '@/components/MetaTags.vue'
import { loadBlogPosts } from '@/utils/content'
import { searchContent } from '@/utils/search'
import type { BlogPost } from '@/types'

const posts = ref<BlogPost[]>([])
const searchQuery = ref('')
const loading = ref(true)
const error = ref<string | null>(null)

const filteredPosts = computed(() => 
  searchContent(posts.value, searchQuery.value)
)

onMounted(async () => {
  try {
    posts.value = await loadBlogPosts()
  } catch (e) {
    error.value = 'Failed to load blog posts'
    console.error(e)
  } finally {
    loading.value = false
  }
})
</script> 