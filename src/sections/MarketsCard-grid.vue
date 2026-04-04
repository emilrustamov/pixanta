<script setup lang="ts">
import { menuData } from '../data/menu'
import { useRouter } from 'vue-router'

const router = useRouter()

const markets = menuData.find(item => item.key === 'markets')?.categories || []

function goToMarket(href: string) {
    if (href) {
        router.push(href)
    }
}
const getColSpan = (index: number) => {
    if (markets.length === 5) {
        if (index < 3) return 'lg:col-span-2'
        return 'lg:col-span-3'
    }

    return 'lg:col-span-2'
}
</script>
<template>
<section class="bg-white px-4 py-12 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
  <div class="mx-auto max-w-[1600px]">
    <!-- Heading -->
    <div class="mx-auto mb-10 max-w-[1100px] text-center">
      <h2>
        Markets
      </h2>
      <p class="mt-4 font-simple text-text text-[20px] max-w-[1000px] mx-auto font-light">
        Our LED screen solutions are used in a wide range of markets, including retail & hospitality, commercial
        display, rental & staging, DOOH, corporate, command & control rooms, broadcast studio and virtual production
        and more. Discover the Canbest LED solutions that will meet your demands and check out the possibilities.
      </p>
    </div>

    <!-- Cards -->
    <div class="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-6">
      <div
        v-for="(item, index) in markets"
        :key="index"
        class="group cursor-pointer"
        :class="getColSpan(index)"
        @click="goToMarket(item.href)"
        tabindex="0"
        @keydown.enter="goToMarket(item.href)"
        role="button"
        :aria-label="`Go to ${item.title}`"
      >
        <!-- Image -->
        <div class="relative overflow-hidden rounded-[6px]">
          <img
            :src="item.previewImage"
            :alt="item.title"
            class="h-[220px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[300px]"
          />
        </div>

        <!-- Text -->
        <div class="pt-5">
          <h2 class="!text-start !text-text transition-colors duration-300 group-hover:!text-primary">
            {{ item.title }}
          </h2>
          <p class="mt-3 font-simple font-light text-text text-[18px] leading-relaxed">
            {{ item.previewDescription }}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>