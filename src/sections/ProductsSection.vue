<script setup lang="ts">
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import { productsData } from '../data/products'

const props = defineProps<{
  products: {
    category: string
  }
}>()

const modules = [Pagination]

const filteredProducts = computed(() => {
  return productsData.filter(item => item.category === props.products.category)
})
</script>

<template>
  <section v-if="filteredProducts.length" class="w-full pb-10 md:pb-16">
    <div class="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-16">
      <!-- top -->
      <div class="mx-auto max-w-[1100px] text-center">
        <h2>
            PRODUCT RANGE
        </h2>

        <p class="mx-auto mt-6 max-w-[1100px] font-light font-simple text-[18px] leading-[1.8] text-text sm:text-[20px]">
            We build high-end digital displays as vivid and dynamic as the imagination. With our clients, we've designed and built some of the largest and most recognizable digital spectaculars in the world.
        </p>
      </div>

      <!-- swiper -->
      <div class="mt-12">
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="24"
          :pagination="{ clickable: true }"
          :breakpoints="{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 28
            }
          }"
          class="products-swiper"
        >
          <SwiperSlide
            v-for="item in filteredProducts"
            :key="item.slug"
            class="h-auto"
          >
            <router-link
              :to="item.href"
              class="group flex h-full flex-col overflow-hidden rounded-[10px] border border-[#d9d9d9] bg-white transition hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              <!-- image -->
              <div class="flex h-[260px] items-center justify-center overflow-hidden bg-white p-6 sm:h-[300px] lg:h-[320px]">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="max-h-full w-auto max-w-full object-contain transition duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <!-- content -->
              <div class="flex flex-1 flex-col border-t border-[#e5e5e5] px-6 py-7 text-center">
                <h3 class="font-main text-text text-[24px] uppercase leading-relaxed transition duration-300 group-hover:text-primary">
                  {{ item.title }}
                </h3>

                <p class="mt-4 font-simple font-light text-[18px] leading-relaxed text-text">
                  {{ item.description }}
                </p>
              </div>
            </router-link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style scoped>
:deep(.products-swiper) {
  padding-bottom: 56px;
}

:deep(.products-swiper .swiper-pagination) {
  bottom: 0;
}

:deep(.products-swiper .swiper-pagination-bullet) {
  width: 14px;
  height: 14px;
  background: #d9d9d9;
  opacity: 1;
  margin: 0 6px !important;
}

:deep(.products-swiper .swiper-pagination-bullet-active) {
  background: #24479c;
}
</style>