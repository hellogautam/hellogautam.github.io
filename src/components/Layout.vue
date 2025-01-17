<template>
    <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <NavBar />
      <main class="max-w-5xl mx-auto px-4 pt-20 pb-12">
        <slot></slot>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import NavBar from './NavBar.vue'
  </script>