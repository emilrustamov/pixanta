<script setup lang="ts">
import type { MenuCategory } from '../data/menu'

defineProps<{
  categories: MenuCategory[]
  activeIndex: number
}>()

const emit = defineEmits<{
  (e: 'change', index: number): void
}>()
</script>

<template>
  <div class="flex flex-col gap-8 ">
    <router-link
  v-for="(category, index) in categories"
  :key="category.title"
  :to="category.href"
  class="font-oswald text-[28px] uppercase leading-none transition-colors duration-200"
  :class="activeIndex === index ? 'text-primary' : 'text-text'"
  @mouseenter="emit('change', index)"
>
  {{ category.title }}
</router-link>
  </div>
</template>