<template>
  <div class="space-y-8">
    <MetaTags
      title="Projects"
      description="A showcase of my recent projects and experiments"
    />

    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Projects</h1>

    <!-- Search and Filter -->
    <div class="space-y-4">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search projects..."
        class="w-full p-2 border dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
      />

      <div class="flex flex-wrap gap-2">
        <button
          @click="selectedTag = null"
          class="px-3 py-1 rounded-full text-sm"
          :class="!selectedTag ? 'bg-primary-light dark:bg-primary-dark text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'"
        >
          All
        </button>
        <button
          v-for="tag in allTags"
          :key="tag"
          @click="selectedTag = tag"
          class="px-3 py-1 rounded-full text-sm"
          :class="selectedTag === tag ? 'bg-primary-light dark:bg-primary-dark text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'"
        >
          {{ tag }}
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

    <!-- Projects List -->
    <div v-else>
      <!-- Highlighted Projects -->
      <section v-if="highlightedProjects.length">
        <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
        <div class="grid grid-cols-1 gap-6">
          <ProjectCard
            v-for="project in highlightedProjects"
            :key="project.id"
            :project="project"
          />
        </div>
      </section>

      <!-- All Projects -->
      <section>
        <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">All Projects</h2>
        <div class="grid grid-cols-1 gap-6">
          <ProjectCard
            v-for="project in otherProjects"
            :key="project.id"
            :project="project"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import MetaTags from '@/components/MetaTags.vue'
import { loadProjects } from '@/utils/content'
import { searchContent } from '@/utils/search'
import type { Project } from '@/types'

const projects = ref<Project[]>([])
const searchQuery = ref('')
const selectedTag = ref<string | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

const allTags = computed(() => {
  const tags = new Set<string>()
  projects.value.forEach(project => {
    project.technologies.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
})

const filteredProjects = computed(() => {
  let filtered = searchContent(projects.value, searchQuery.value)
  if (selectedTag.value) {
    filtered = filtered.filter(project => 
      project.technologies.includes(selectedTag.value!)
    )
  }
  return filtered
})

const highlightedProjects = computed(() => 
  filteredProjects.value.filter(p => p.highlighted)
)

const otherProjects = computed(() => 
  filteredProjects.value.filter(p => !p.highlighted)
)

onMounted(async () => {
  try {
    projects.value = await loadProjects()
  } catch (e) {
    error.value = 'Failed to load projects'
    console.error(e)
  } finally {
    loading.value = false
  }
})
</script> 