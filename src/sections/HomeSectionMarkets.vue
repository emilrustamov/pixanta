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
    <section class="py-10 lg:py-24">
        <div class="w-full">

            <!-- Title -->
            <div class="mb-8 md:mb-12 text-center">
                <h2>
                    Bring Creative Visions To Life
                </h2>

                <p class="mt-4 font-simple text-text text-[20px] max-w-[1000px] mx-auto font-light">
                    Pixanta offers an extensive range of LED display solutions designed
                    for various industries and applications.
                </p>
            </div>

            <!-- Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 bg-white">
                <div v-for="(item, index) in markets" :key="index" class="group relative overflow-hidden cursor-pointer"
                    :class="getColSpan(index)" @click="goToMarket(item.href)" tabindex="0"
                    @keydown.enter="goToMarket(item.href)" role="button" :aria-label="`Go to ${item.title}`">
                    <!-- Image -->
                    <img :src="item.previewImage" :alt="item.title"
                        class="h-[180px] w-full object-cover sm:h-[220px] lg:h-[260px] xl:h-[320px] 2xl:h-[420px] transition duration-500 group-hover:scale-105" />

                    <!-- Overlay -->
                    <div
                        class="absolute inset-0 bg-[rgba(62,62,62,0.9)] opacity-0 transition duration-300 group-hover:opacity-100 flex flex-col items-center justify-center text-center px-4">
                        <div class="font-main text-white text-[14px] sm:text-[16px] uppercase">
                            {{ item.title }}
                        </div>
                        <p class="font-simple text-white text-sm sm:text-base leading-relaxed">
                            {{ item.previewDescription }}
                        </p>
                    </div>

                    <!-- Title -->
                    <div class="absolute bottom-0 left-0 right-0 overflow-hidden">
                        <div class="bg-black/60 text-center py-3 transition-transform duration-500 ease-out
           translate-y-0 group-hover:translate-y-full">
                            <span class="font-main text-white text-[14px] sm:text-[16px] uppercase">
                                {{ item.title }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>