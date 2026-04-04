<script setup lang="ts">
import PageLocation from '../components/PageLocation.vue';
import MarketsCardGrid from '../sections/MarketsCard-grid.vue';
import FormSection from '../sections/FormSection.vue';
</script>
<template>
    <section class="relative">
        <div class="banner relative w-full  bg-cover bg-center"
            :style="{ backgroundImage: 'url(/images/contact/contact-banner.webp)' }">
            <div class="absolute inset-0 flex items-center justify-center text-white">
            </div>
        </div>
    </section>

    <PageLocation :items="[
        { label: 'Home', to: '/' },
        { label: 'Markets' }
    ]" />
    <MarketsCardGrid />
    <section class="bg-white px-4 py-12 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
        <div class="mx-auto max-w-[1600px]">
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
.banner {
    height: clamp(11.25rem, 6.084rem + 22.04vw, 28.125rem);
}
</style>