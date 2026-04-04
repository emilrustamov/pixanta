<script setup lang="ts">
defineProps<{
  items: { label: string; to?: string }[]
}>()
</script>

<template>
  <section class=" border-b border-location-grey/40">
    <div class="mx-auto max-w-[1600px]">
      <div class="flex h-[51px] w-full items-center justify-start gap-1 text-[16px] text-location-grey font-simple">
        <span class="inline-flex items-center justify-center shrink-0 mb-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="block"
          >
            <path d="M4 21V9L12 3L20 9V21H14V14H10V21H4Z" fill="#666666" />
          </svg>
        </span>

        <span class="leading-none">Your Position:</span>

        <template v-for="(item, index) in items" :key="index">
          <router-link
            v-if="item.to && index !== items.length - 1"
            :to="item.to"
            class="leading-none transition hover:text-primary font-simple"
          >
            {{ item.label }}
          </router-link>

          <span v-else class="leading-none text-location-grey font-simple">
            {{ item.label }}
          </span>

          <span
            v-if="index !== items.length - 1"
            class="leading-none text-location-grey font-simple"
          >
            &gt;
          </span>
        </template>
      </div>
    </div>
  </section>
</template>