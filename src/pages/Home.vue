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
  },
  {
    id: 2,
    title: '',
    subtitle: '',
    image: '/images/slides/banner-FLM.jpg',
  },
  {
    id: 3,
    title: '',
    subtitle: '',
    image: '/images/slides/banner-FTX.jpg',
  },
  {
    id: 3,
    title: '',
    subtitle: '',
    image: '/images/slides/banner-GLD.jpg',
  },
  {
    id: 4,
    title: '',
    subtitle: '',
    image: '/images/slides/banner-HDC.jpg',
  },
  {
    id: 5,
    title: '',
    subtitle: '',
    image: '/images/slides/banner-HDG.jpg',
  },
  {
    id: 6,
    title: '',
    subtitle: '',
    image: '/images/slides/banner-LFD.jpg',
  },
  {
    id: 7,
    title: '',
    subtitle: '',
    image: '/images/slides/banner-LTD.jpg',
  },
  {
    id: 8,
    title: '',
    subtitle: '',
    image: '/images/slides/banner-MFM.jpg',
  },
  {
    id: 9,
    title: '',
    subtitle: '',
    image: '/images/slides/banner-RTX.jpg',
  },
  {
    id: 10,
    title: '',
    subtitle: '',
    image: '/images/slides/banner-slm.jpg',
  },
  {
    id: 11,
    title: '',
    subtitle: '',
    image: '/images/slides/banner-SPL.jpg',
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
        
        <div 
          class="relative w-full overflow-hidden"
        >
          <img 
            :src="slide.image" 
            alt="" 
            class="w-full h-full object-contain object-center"
            draggable="false"
          >
 
          <div class="absolute inset-0 bg-black/10"></div>
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