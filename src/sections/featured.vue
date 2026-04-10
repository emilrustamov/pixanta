<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  features: {
    title: string
    items: {
      title: string
      description: string
      image: string
    }[]
  }
}>()

// Permits multiple items to be open at once
const openIndexes = ref<Set<number>>(new Set())

const toggle = (index: number) => {
  if (openIndexes.value.has(index)) {
    openIndexes.value.delete(index)
    // Trigger reactivity for Set in Vue 3
    openIndexes.value = new Set(openIndexes.value)
  } else {
    openIndexes.value.add(index)
    openIndexes.value = new Set(openIndexes.value)
  }
}
</script>

<template>
  <section class="w-full py-14 md:py-20">
    <div class="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-16">
      <div class="text-center">
        <h2>
          {{ features.title.split(' ')[0] }}
          <span class="text-primary">
            {{ features.title.split(' ').slice(1).join(' ') }}
          </span>
        </h2>
      </div>

      <div class="mt-10 border-t border-[#d9d9d9]">
        <div v-for="(item, index) in features.items" :key="index" class="border-b border-[#d9d9d9]">
          <button type="button" @click="toggle(index)"
            class="flex w-full items-center justify-between gap-6 py-8 text-left">
            <span class="font-main text-[20px] lg:text-[24px] uppercase leading-none text-text sm:text-[30px]">
              {{ item.title }}
            </span>

            <span class="shrink-0 font-light text-[36px] lg:text-[56px] leading-none text-text transition-transform duration-300"
              :class="openIndexes.has(index) ? 'rotate-45' : 'rotate-0'">
              +
            </span>
          </button>

          <div class="accordion-grid" :class="{ 'accordion-grid-open': openIndexes.has(index) }">
            <div class="min-h-0">
              <div class="pb-10">
                <div class="flex flex-col gap-8 md:gap-12"
                  :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">
                  <div class="w-full md:w-1/2">
                    <p
                      class="whitespace-pre-line font-simple font-light text-[18px] leading-[1.8] text-text sm:text-[20px]">
                      {{ item.description }}
                    </p>
                  </div>

                  <div class="w-full flex justify-center md:w-1/2"
                    :class="index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'">
                    <div class="overflow-hidden inline-block rounded-[10px] bg-[#f3f3f3]">
                      <img :src="item.image" :alt="item.title" loading="lazy" decoding="async" class="h-auto w-[320px] object-cover px-6 py-3 rounded-[12px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.accordion-grid {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  /* ВАЖНО */
  transition: grid-template-rows 0.4s ease;
}

.accordion-grid-open {
  grid-template-rows: 1fr;
}
</style>