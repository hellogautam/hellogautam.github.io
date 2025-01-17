<template>
  <nav class="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-sm z-50">
    <div class="max-w-5xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <RouterLink to="/" class="text-xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Gautam City</RouterLink>
        
        <div class="flex items-center space-x-4">
          <RouterLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {{ link.text }}
          </RouterLink>
          <ThemeToggle />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'

const links = [
  { to: '/projects', text: 'Projects' },
  { to: '/blog', text: 'Blog' },
  { to: '/reading', text: 'Reading' },
  { to: '/contact', text: 'Contact' }
]
</script>

<script lang="ts">
export default {
  name: 'NavBar'
}
</script>