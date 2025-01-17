<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { loadMarkdownContent } from '@/utils/content'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()
const route = useRoute()
const post = ref<any>(null)
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    const postId = route.params.id as string
    post.value = await loadMarkdownContent(`blog/${postId}.md`)
  } catch (e) {
    error.value = 'Failed to load blog post'
    console.error(e)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <div v-if="loading" class="text-center py-8">
      Loading post...
    </div>
    
    <div v-else-if="error" class="text-center py-8 text-red-500">
      {{ error }}
    </div>
    
    <article v-else class="prose dark:prose-invert max-w-none">
      <h1>{{ post.title }}</h1>
      <div class="flex items-center space-x-4 text-gray-500">
        <time>{{ new Date(post.date).toLocaleDateString() }}</time>
        <div class="flex gap-2">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded"
          >
            {{ tag }}
          </span>
        </div>
      </div>
      <div v-html="md.render(post.content)" />
    </article>
  </div>
</template> 