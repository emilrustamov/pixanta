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
    image: '/images/slides/banner-BX.jpg',
    href: '/products/bx-series',
  },
  {
    id: 2,
    title: '',
    subtitle: '',
    image: '/images/slides/banner-FLM.jpg',
    href: '/products/flm-series',
  },
  {
    id: 3,
    title: '',
    subtitle: '',
    image: '/images/slides/banner-FTX.jpg',
    href: '/products/ftx-series',
  },
  {
    id: 4,
    title: '',
    subtitle: '',
    image: '/images/slides/banner-GLD.jpg',
    href: '/products/gld-series',
  },
  {
    id: 5,
    title: '',
    subtitle: '',
    image: '/images/slides/banner-HDC.jpg',
    href: '/products/hdc-series',
  },
  {
    id: 6,
    title: '',
    subtitle: '',
    image: '/images/slides/banner-HDG.jpg',
    href: '/products/hdg-series',
  },
  {
    id: 7,
    title: '',
    subtitle: '',
    image: '/images/slides/banner-LFD.jpg',
    href: '/products/lfd-series',
  },
  {
    id: 8,
    title: '',
    subtitle: '',
    image: '/images/slides/banner-LTD.jpg',
    href: '/products/ltd-series',
  },
  {
    id: 9,
    title: '',
    subtitle: '',
    image: '/images/slides/banner-MFM.jpg',
    href: '/products/mfm-series',
  },
  {
    id: 10,
    title: '',
    subtitle: '',
    image: '/images/slides/banner-RTX.jpg',
    href: '/products/rtx-series',
  },
  {
    id: 11,
    title: '',
    subtitle: '',
    image: '/images/slides/banner-slm.jpg',
    href: '/products/slm-series',
  },
  {
    id: 12,
    title: '',
    subtitle: '',
    image: '/images/slides/banner-SPL.jpg',
    href: '/products/spl-series',
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
      <SwiperSlide v-for="slide in slides" :key="slide.id"  >
        
        <router-link :to="slide.href" 
          class="relative block  w-full overflow-hidden"
        >
          <img 
            :src="slide.image" 
            alt="" 
            class="block w-full h-full object-contain object-center"
            draggable="false"
          >
 
          <div class="absolute inset-0 bg-black/10"></div>
      </router-link>
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
@media(max-width:1000px){
  :deep(.home-hero-swiper .swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background: white;
  opacity: 0.55;
}
:deep(.home-hero-swiper .swiper-pagination) {
  bottom: 6px;
}
}
</style>