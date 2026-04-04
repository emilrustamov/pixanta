<script setup lang="ts">
defineProps<{
  items: { label: string; to?: string }[]
}>()
</script>

<template>
  <section class=" border-b border-location-grey/40">
    <div class="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-16">
      <div class="flex min-h-[51px] w-full min-w-0 flex-wrap items-center justify-start gap-x-1 gap-y-1 py-2 text-[14px] text-location-grey font-simple sm:h-[51px] sm:py-0 sm:text-[16px]">
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