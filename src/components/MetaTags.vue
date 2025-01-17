<template>
  <div v-once>
    <title>{{ title }} | Gautam City</title>
    <meta name="description" :content="description">
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<script lang="ts">
export default {
  name: 'MetaTags'
}
</script> 