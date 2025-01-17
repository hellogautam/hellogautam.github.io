<template>
    <div class="border dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ project.title }}</h3>
      <p class="mt-2 text-gray-600 dark:text-gray-300">{{ project.description }}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
        >
          {{ tech }}
        </span>
      </div>
      <div class="mt-4 flex space-x-4">
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          GitHub
        </a>
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          Demo
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    project: {
      type: Object,
      required: true
    }
  })
  </script>
  
  <script>
  export default {
    name: 'ProjectCard'
  }
  </script>