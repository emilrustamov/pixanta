<script setup lang="ts">
defineProps<{
  title: string
  image?: string
  description?: string
  specs?: string[]
}>()
</script>

<template>
  <div class="min-w-0 max-w-[520px]">
    <div
      v-if="image"
      class="mb-8 overflow-hidden rounded-[14px]"
    >
      <img
        :src="image"
        :alt="title"
        :class="[
          'w-full object-cover',
          $props.specs?.length ? 'h-auto' : 'h-[280px]'
        ]"
      />
    </div>

    <h3 class="mb-4 font-oswald text-[28px] leading-tight text-text sm:text-[36px] lg:text-[42px] lg:leading-none">
      {{ title }}
    </h3>

    <p
      v-if="description"
      class="mb-5 font-roboto text-[18px] leading-[1.7] text-text"
    >
      {{ description }}
    </p>

    <ul
      v-if="specs?.length"
      class="flex flex-wrap gap-2"
    > PIXEL PITCH
      <li
        v-for="spec in specs"
        :key="spec"
        class="rounded-full bg-black/5 px-4 py-2 font-roboto text-[14px] text-text"
      > 
        {{ spec }}
      </li>
    </ul>
  </div>
</template>