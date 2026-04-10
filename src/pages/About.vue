<script setup lang="ts">
import PageLocation from '../components/PageLocation.vue';
import AboutText from '../sections/AboutText.vue';
</script>
<template>
    <section class="relative">
        <div class="banner relative w-full  bg-cover bg-center"
            :style="{ backgroundImage: 'url(/images/new.jpg)' }">
            <div class="absolute inset-0 flex items-center justify-center text-white">
            </div>
        </div>
    </section>

    <PageLocation :items="[
        { label: 'Home', to: '/' },
        { label: 'About' }
    ]" />
    <AboutText />
</template>
<style scoped>
.banner {
  height: clamp(11.25rem, 6.084rem + 22.04vw, 28.125rem);
}
</style>