<script setup lang="ts">
import type { MenuSeriesItem } from '../data/menu'

defineProps<{
  series: MenuSeriesItem[]
  activeIndex: number
}>()

const emit = defineEmits<{
  (e: 'change', index: number): void
}>()
</script>

<template>
  <div class="grid grid-cols-2 gap-x-1 gap-y-1 h-fit">
    <router-link
      v-for="(item, index) in series"
      :key="item.title"
      :to="`/products/${item.slug}`"
      class="flex flex-col items-start gap-2 transition-colors duration-200"
      @mouseenter="emit('change', index)"
    >
      <div class="h-[38px] w-[58px] rounded-[8px] border border-black/15 bg-black/5 flex items-center justify-center">
        <img
          v-if="item.logo"
          :src="item.logo"
          :alt="`${item.title} logo`"
          class="max-h-[34px] max-w-[50px] object-contain"
          loading="lazy"
        />
      </div>

      <span
        class="font-roboto text-[18px] leading-[1.25]"
        :class="activeIndex === index ? 'text-primary' : 'text-text'"
      >
        {{ item.title }}
      </span>
    </router-link>
  </div>
</template>