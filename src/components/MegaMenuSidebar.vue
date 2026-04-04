<script setup lang="ts">
import type { MenuItem } from '../data/menu'

defineProps<{
  items: MenuItem[]
  activeKey: string
}>()

const emit = defineEmits<{
  (e: 'change', key: MenuItem['key']): void
}>()
</script>

<template>
  <nav class="flex flex-col gap-8">
    <router-link
  v-for="item in items"
  :key="item.key"
  :to="item.href"
  class="font-oswald text-[28px] uppercase leading-none transition-colors duration-200"
  :class="activeKey === item.key ? 'text-primary' : 'text-text'"
  @mouseenter="emit('change', item.key)"
>
  {{ item.title }}
</router-link>
  </nav>
</template>