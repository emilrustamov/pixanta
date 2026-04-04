<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { marketPages } from '../data/maketsPage'
import VideoScrollSecion from '../components/videoScrollSecion.vue'
import MarketText from '../sections/maketText.vue'
import InspiringSection from '../sections/Inspiring.vue'
import ProductsSection from '../sections/ProductsSection.vue'



const route = useRoute()
const router = useRouter()

const pageData = computed(() => {
  const slug = route.params.slug as string
  return marketPages[slug]
})

if (!pageData.value) {
  router.replace('/')
}
</script>

<template>
  <template v-if="pageData">
    <VideoScrollSecion :hero="pageData.hero" />
    <MarketText :intro="pageData.intro" :form="pageData.form" />
    <InspiringSection :inspiring="pageData.inspiring" />
    <ProductsSection :products="pageData.products" />
  </template>
</template>