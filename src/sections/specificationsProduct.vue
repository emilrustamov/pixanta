<script setup lang="ts">
import { ref } from 'vue'
import FormSection from './FormSection.vue'
const openIndex = ref<number | null>(1) // первый открыт по умолчанию

const toggle = (index: number) => {
    openIndex.value = openIndex.value === index ? null : index
}
defineProps<{
    specifications: {
        title: string
        metrics: {
            value: string
            label: string
        }[]
        groups: {
            title: string
            left: { label: string; value: string }[]
            right: { label: string; value: string }[]
        }[]
    }
}>()
</script>

<template>
    <section id="specifications" class="w-full pt-14 md:pt-20">
        <!-- header -->
        <div class="relative bg-[#4c4c4c] py-6 text-center">
            <h2 class="!text-white !text-[24px]">
                {{ specifications.title }}
            </h2>

            <!-- triangle -->
            <div class="absolute left-1/2 top-full -translate-x-1/2">
                <div
                    class="h-0 w-0 border-l-[18px] border-r-[18px] border-t-[18px] border-l-transparent border-r-transparent border-t-[#4c4c4c]">
                </div>
            </div>
        </div>

        <!-- content -->
        <div class="pt-14 md:pt-20">
            <div class="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-16">

                <!-- metrics -->
                <div class="grid grid-cols-2 gap-y-8 text-center sm:grid-cols-3 lg:grid-cols-5">
                    <div v-for="(item, i) in specifications.metrics" :key="i">
                        <div class="font-main text-primary text-[28px] sm:text-[36px] lg:text-[50px] leading-[1]">
                            {{ item.value }}
                        </div>
                        <div class="font-main font-medium text-[18px] uppercase text-[#888888]">
                            {{ item.label }}
                        </div>
                    </div>
                </div>

                <!-- groups -->
                <div class="mt-14 space-y-10">
                    <div v-for="(group, i) in specifications.groups" :key="i" class="">
                        <!-- header -->
                        <div class="border-b border-[#d9d9d9] pb-6 flex cursor-pointer items-center justify-between"
                            @click="toggle(i)">
                            <h3 class="font-main text-primary font-medium text-[24px]">
                                {{ group.title }}
                            </h3>

                            <!-- arrow -->
                            <span class="text-primary text-[20px] transition-transform duration-300"
                                :class="openIndex === i ? 'rotate-180' : ''">
                                <svg width="36" height="36" viewBox="0 0 247 270" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="inline-block align-middle">
                                    <path d="M185.25 168.75L123.5 101.25L61.75 168.75" stroke="#FF6600"
                                        stroke-width="24" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>

                        <!-- content -->
                        <transition name="accordion">
                            <div v-if="openIndex === i">
                                <div class="mt-6  grid grid-cols-1 gap-8 md:grid-cols-2">
                                    <!-- left -->
                                    <div class="space-y-3">
                                        <div v-for="(row, j) in group.left" :key="j"
                                            class="flex flex-wrap gap-1 text-[16px] sm:text-[18px]">
                                            <span class="font-main font-medium uppercase text-text">
                                                {{ row.label }}:
                                            </span>
                                            <span class="font-simple font-light text-text">
                                                {{ row.value }}
                                            </span>
                                        </div>
                                    </div>

                                    <!-- right -->
                                    <div class="space-y-3">
                                        <div v-for="(row, j) in group.right" :key="j"
                                            class="flex flex-wrap gap-1 text-[16px] sm:text-[18px]">
                                            <span class="font-main font-medium uppercase text-text">
                                                {{ row.label }}:
                                            </span>
                                            <span class="font-simple font-light text-text">
                                                {{ row.value }}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <!-- divider -->
                                <div class="mt-8 border-t border-[#d9d9d9]"></div>

                                <!-- note -->
                                <p class="font-main mt-6 text-[16px] leading-[1.6] text-location-grey">
                                    1) Brightness (NITs) is an adjustable specification depending on the application and
                                    how users opt to drive diodes. Brightness levels should be properly managed as power
                                    consumption and LED lifetime can also be affected.
                                </p>
                            </div>
                        </transition>

                        <!-- кнопка ВСЕГДА видна -->
                        <div class="mt-6 flex justify-center">
                            <button @click="toggle(i)"
                                class="inline-flex min-h-[52px] items-center justify-center bg-primary px-8 font-main font-medium text-[18px] uppercase text-white"
                                type="button">
                                ACCESS PRODUCT SPEC SHEET
                            </button>
                        </div>

                        <!-- divider -->
                        <div class="mt-8 border-t border-[#d9d9d9]"></div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="bg-white py-12">
        <div class="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-16">
            <div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">

                <!-- Левая колонка -->
                <div class="w-full lg:w-[70%]">
                    <h2 class="!text-start !text-text">
                        READY TO GET <span class="text-primary">STARTED?</span>
                    </h2>

                    <p class="mt-8 font-simple text-text text-[18px] font-light leading-relaxed">
                        Fill out the form and we’ll start designing a custom solution together.
                    </p>
                </div>

                <!-- Правая колонка -->
                <div class="w-full min-w-0 pt-5">
                    <FormSection :cols="2" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
    overflow: hidden;
    transition:
        max-height 0.45s ease,
        opacity 0.35s ease,
        transform 0.35s ease;
}

.accordion-enter-from,
.accordion-leave-to {
    max-height: 0;
    opacity: 0;
    transform: translateY(-18px);
}

.accordion-enter-to,
.accordion-leave-from {
    max-height: 1000px;
    opacity: 1;
    transform: translateY(0);
}
</style>