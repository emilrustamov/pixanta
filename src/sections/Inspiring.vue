<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'

type InspiringItem = {
  title: string
  description: string
  image: string
}

const props = defineProps<{
  inspiring: {
    items: InspiringItem[]
  }
}>()

const desktopSwiper = ref<any>(null)
const mobileSwiper = ref<any>(null)

const formatNumber = (value: number) => String(value).padStart(2, '0')

const onPrevDesktop = () => desktopSwiper.value?.slidePrev()
const onNextDesktop = () => desktopSwiper.value?.slideNext()

const onPrevMobile = () => mobileSwiper.value?.slidePrev()
const onNextMobile = () => mobileSwiper.value?.slideNext()
</script>

<template>
  <section v-if="inspiring.items.length" class="w-full py-14 md:py-20">
    <div class="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-16">
      <!-- top -->
      <div class="mx-auto max-w-[1100px] text-center">
        <h2>
          Inspiring Screens
        </h2>

        <p class="mx-auto mt-6 max-w-[1100px] font-simple font-light text-[18px] leading-[1.8] text-text sm:text-[20px]">
          The led display for staging rental solutions can be widely used for indoor and outdoor concerts & live performance, corporate events & conference, tradeshow and exhibitions, public events, broadcast studio etc.        </p>
      </div>

      <!-- DESKTOP -->
      <div class="mt-12 hidden lg:block">
        <Swiper :modules="[Navigation]" @swiper="(swiper) => (desktopSwiper = swiper)" :slides-per-view="1"
          :space-between="0" :speed="650" :loop="inspiring.items.length > 1" class="inspiring-swiper">
          <SwiperSlide v-for="(item, index) in inspiring.items" :key="`desktop-${item.title}-${index}`">
            <div class="grid grid-cols-[520px_minmax(0,1fr)] gap-7">
              <!-- left card -->
              <div class="w-full">
                <div class="flex min-h-[520px] flex-col rounded-[10px] bg-[#f3f3f3] p-10">
                  <div>
                    <h2 class="!text-start">
                      {{ item.title }}
                    </h2>

                    <p class="mt-6 font-simple text-[20px] leading-[1.8] text-text font-light">
                      {{ item.description }}
                    </p>
                  </div>

                  <div class="mt-auto flex items-end justify-between pt-10">
                    <div class="flex items-center gap-3">
                      <button type="button" @click="onPrevDesktop"
                        class="flex h-[56px] w-[56px] items-center justify-center rounded-full transition hover:border-text hover:text-text"
                        aria-label="Previous slide">
                        <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M31.0003 56.8346C45.2677 56.8346 56.8337 45.2687 56.8337 31.0013C56.8337 16.7339 45.2677 5.16797 31.0003 5.16797C16.733 5.16797 5.16699 16.7339 5.16699 31.0013C5.16699 45.2687 16.733 56.8346 31.0003 56.8346Z" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M31.0003 20.668L20.667 31.0013L31.0003 41.3346" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M41.3337 31H20.667" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </button>

                      <button type="button" @click="onNextDesktop"
                        class="flex h-[56px] w-[56px] items-center justify-center rounded-full transition hover:border-text hover:text-text"
                        aria-label="Next slide">
                        <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M31.0003 56.3346C45.2677 56.3346 56.8337 44.7687 56.8337 30.5013C56.8337 16.2339 45.2677 4.66797 31.0003 4.66797C16.733 4.66797 5.16699 16.2339 5.16699 30.5013C5.16699 44.7687 16.733 56.3346 31.0003 56.3346Z" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M31 40.8346L41.3333 30.5013L31 20.168" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M20.667 31H41.3337" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </button>
                    </div>

                    <div class="font-simple text-[20px] text-text font-light">
                      {{ formatNumber(index + 1) }}/{{ formatNumber(inspiring.items.length) }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- right image -->
              <div class="w-full">
                <div class="h-full overflow-hidden rounded-[10px]">
                  <img :src="item.image" :alt="item.title" class="h-full min-h-[520px] w-full object-cover"
                    draggable="false" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- MOBILE -->
      <div class="mt-12 lg:hidden">
        <Swiper :modules="[Navigation]" @swiper="(swiper) => (mobileSwiper = swiper)" :slides-per-view="1"
          :space-between="0" :speed="650" :loop="inspiring.items.length > 1" class="inspiring-swiper-mobile">
          <SwiperSlide v-for="(item, index) in inspiring.items" :key="`mobile-${item.title}-${index}`">
            <div class="rounded-[10px] bg-[#f3f3f3] p-5 sm:p-7">
              <h2 class="!text-start">
                {{ item.title }}
              </h2>

              <p class="mt-5 font-simple text-[16px] leading-[1.8] text-text sm:text-[20px] font-light">
                {{ item.description }}
              </p>

              <!-- image сразу после текста -->
              <div class="mt-6 overflow-hidden rounded-[10px]">
                <img :src="item.image" :alt="item.title" class="h-[320px] w-full object-cover sm:h-[420px]"
                  draggable="false" />
              </div>

              <!-- buttons + counter внизу -->
              <div class="mt-6 flex items-end justify-between">
                <div class="flex items-center gap-3">
                  <button type="button" @click="onPrevMobile"
                    class="flex h-[48px] w-[48px] items-center justify-center rounded-full transition hover:border-text hover:text-text sm:h-[56px] sm:w-[56px]"
                    aria-label="Previous slide">
                    <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.0003 56.8346C45.2677 56.8346 56.8337 45.2687 56.8337 31.0013C56.8337 16.7339 45.2677 5.16797 31.0003 5.16797C16.733 5.16797 5.16699 16.7339 5.16699 31.0013C5.16699 45.2687 16.733 56.8346 31.0003 56.8346Z" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M31.0003 20.668L20.667 31.0013L31.0003 41.3346" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M41.3337 31H20.667" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>

                  <button type="button" @click="onNextMobile"
                    class="flex h-[48px] w-[48px] items-center justify-center rounded-full transition hover:border-text hover:text-text sm:h-[56px] sm:w-[56px] p-0"
                    aria-label="Next slide">
                    <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.0003 56.3346C45.2677 56.3346 56.8337 44.7687 56.8337 30.5013C56.8337 16.2339 45.2677 4.66797 31.0003 4.66797C16.733 4.66797 5.16699 16.2339 5.16699 30.5013C5.16699 44.7687 16.733 56.3346 31.0003 56.3346Z" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M31 40.8346L41.3333 30.5013L31 20.168" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M20.667 31H41.3337" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </div>

                <div class="font-simple text-[16px] text-text font-light sm:text-[18px]">
                  {{ formatNumber(index + 1) }}/{{ formatNumber(inspiring.items.length) }}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style scoped>
:deep(.inspiring-swiper),
:deep(.inspiring-swiper-mobile) {
  overflow: hidden;
}

:deep(.inspiring-swiper .swiper-slide),
:deep(.inspiring-swiper-mobile .swiper-slide) {
  height: auto;
}

:deep(.inspiring-swiper .swiper-wrapper),
:deep(.inspiring-swiper-mobile .swiper-wrapper) {
  transition-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
}
</style>