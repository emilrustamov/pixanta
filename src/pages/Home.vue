<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import HomeSectionMarkets from '../sections/HomeSectionMarkets.vue';
import HomeSectionMore from '../sections/HomeSectionMore.vue';



const slides = [
  {
    id: 1,
    title: '',
    subtitle: '',
    image: '/images/slides/slide1.webp',
  },
  {
    id: 2,
    title: '',
    subtitle: '',
    image: '/images/slides/slide2.webp',
  },
  {
    id: 3,
    title: '',
    subtitle: '',
    image: '/images/slides/slide3.webp',
  },
  {
    id: 3,
    title: '',
    subtitle: '',
    image: '/images/slides/slide4.webp',
  },
  {
    id: 4,
    title: '',
    subtitle: '',
    image: '/images/slides/slide5.webp',
  },
  {
    id: 5,
    title: '',
    subtitle: '',
    image: '/images/slides/slide6.webp',
  },
  {
    id: 6,
    title: '',
    subtitle: '',
    image: '/images/slides/slide7.webp',
  },
  {
    id: 7,
    title: '',
    subtitle: '',
    image: '/images/slides/slide1.webp',
  },
  {
    id: 8,
    title: '',
    subtitle: '',
    image: '/images/slides/slide8.webp',
  },
  {
    id: 9,
    title: '',
    subtitle: '',
    image: '/images/slides/slide9.webp',
  },
]
</script>

<template>
  <section class="relative">
    <Swiper :modules="[Autoplay, Pagination]" :slides-per-view="1" :loop="true" :speed="900" :autoplay="{
      delay: 4000,
      disableOnInteraction: false,
    }" :pagination="{
        clickable: true,
      }" class="home-hero-swiper">
      <SwiperSlide v-for="slide in slides" :key="slide.id">
        
        <div class="relative w-full aspect-[16/9] bg-cover bg-center"
          :style="{ backgroundImage: `url(${slide.image})` }">
          <div class="absolute inset-0 bg-black/10"></div>

          <div
            class="relative mx-auto flex h-full max-w-[1440px] flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-10 xl:px-16">
            <!-- <h1
              class="max-w-[1320px] font-main text-[42px] leading-[0.95] text-white sm:text-[64px] lg:text-[96px]"
            >
              {{ slide.title }}
            </h1>

            <p
              class="mt-8 inline-flex min-h-[76px] items-center justify-center rounded-[999px] bg-white/15 px-8 font-main text-[22px] leading-none text-white backdrop-blur-sm sm:text-[28px] lg:min-h-[92px] lg:px-14 lg:text-[40px]"
            >
              {{ slide.subtitle }}
            </p> -->
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
  <HomeSectionMarkets />
  <HomeSectionMore />
</template>

<style scoped>
:deep(.home-hero-swiper .swiper-pagination) {
  bottom: 26px;
}

:deep(.home-hero-swiper .swiper-pagination-bullet) {
  width: 14px;
  height: 14px;
  background: white;
  opacity: 0.55;
}

:deep(.home-hero-swiper .swiper-pagination-bullet-active) {
  opacity: 1;
}
</style>