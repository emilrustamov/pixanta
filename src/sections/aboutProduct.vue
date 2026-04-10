<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
    about: {
        title: string
        subtitle?: string
        paragraphs: string[]
    }
    media: {
        slides: {
            type: 'image' | 'video'
            src: string
            poster?: string
        }[]
    }
}>()

const currentIndex = ref(0)

const currentSlide = computed(() => {
    return props.media.slides[currentIndex.value]
})

const prevSlide = () => {
    if (!props.media.slides.length) return
    currentIndex.value =
        currentIndex.value === 0
            ? props.media.slides.length - 1
            : currentIndex.value - 1
}

const nextSlide = () => {
    if (!props.media.slides.length) return
    currentIndex.value =
        currentIndex.value === props.media.slides.length - 1
            ? 0
            : currentIndex.value + 1
}
</script>

<template>
    <section id="about" class="w-full py-10 md:py-16">
        <div class="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-16">
            <div class="flex flex-col gap-10 md:flex-row md:items-center md:gap-12 lg:gap-16">
                <!-- left -->
                <div class="w-full md:w-[55%]">
                    <h2 class="!text-start">
                        {{ about.title }}
                        <span v-if="about.subtitle" class="text-primary">DESCRIPTION
                            <!-- {{ about.subtitle }} -->
                        </span>
                    </h2>
                    <h3 class="font-simple text-[20px] md:text-[25px] leading-none text-text py-5">{{ about.subtitle }}</h3>
                    <div class="mt-8 space-y-8">
                        <p v-for="(paragraph, index) in about.paragraphs" :key="index"
                            class="font-simple text-[18px] leading-[1.8] font-light text-text sm:text-[20px]">
                            {{ paragraph }}
                        </p>
                    </div>

                    <div class="mt-10">
                        <a href="#contact"
                            class="inline-flex min-h-[50px] items-center justify-center rounded-full bg-primary px-8 font-main text-[18px] uppercase text-white transition hover:opacity-90">
                            Get A Quote
                        </a>
                    </div>
                </div>

                <!-- right -->
                <div class="w-full md:w-[45%]">
                    <div class="p-6 sm:p-8">
                        <div class="relative h-[300px] md:h-[520px] overflow-hidden flex items-center justify-center">
                            <!-- image -->
                            <img v-if="currentSlide?.type === 'image'" :src="currentSlide.src" alt=""  loading="lazy"  decoding="async"
                                class="max-h-full max-w-full object-contain"/>

                            <!-- video poster -->
                            <div v-else class="relative">
                                <img :src="currentSlide.poster || currentSlide.src" alt=""
                                    class="max-h-full max-w-full object-contain" />
                            </div>
                        </div>
                    </div>

                    <div class="mt-6 flex items-center justify-center gap-4">
                        <button type="button" @click="prevSlide"
                            class="flex h-[48px] w-[48px] md:h-[56px] md:w-[56px] items-center justify-center rounded-full transition hover:border-text hover:text-text"
                            aria-label="Previous slide">
                            <svg width="62" height="62" viewBox="0 0 62 62" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M31.0003 56.8346C45.2677 56.8346 56.8337 45.2687 56.8337 31.0013C56.8337 16.7339 45.2677 5.16797 31.0003 5.16797C16.733 5.16797 5.16699 16.7339 5.16699 31.0013C5.16699 45.2687 16.733 56.8346 31.0003 56.8346Z"
                                    stroke="#666666" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M31.0003 20.668L20.667 31.0013L31.0003 41.3346" stroke="#666666"
                                    stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M41.3337 31H20.667" stroke="#666666" stroke-width="1" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>

                        <button type="button" @click="nextSlide"
                            class="flex h-[48px] w-[48px] md:h-[56px] md:w-[56px] items-center justify-center rounded-full transition hover:border-text hover:text-text"
                            aria-label="Next slide">
                            <svg width="62" height="62" viewBox="0 0 62 62" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M31.0003 56.3346C45.2677 56.3346 56.8337 44.7687 56.8337 30.5013C56.8337 16.2339 45.2677 4.66797 31.0003 4.66797C16.733 4.66797 5.16699 16.2339 5.16699 30.5013C5.16699 44.7687 16.733 56.3346 31.0003 56.3346Z"
                                    stroke="#666666" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M31 40.8346L41.3333 30.5013L31 20.168" stroke="#666666" stroke-width="1"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20.667 31H41.3337" stroke="#666666" stroke-width="1" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>