<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { productPages } from '../data/productPage'
import HeroSection from '../sections/heroProduct.vue'
import aboutProduct from '../sections/aboutProduct.vue'
import oneImage from '../sections/oneImage.vue'
import featured from '../sections/featured.vue'
import specificationsProduct from '../sections/specificationsProduct.vue'

const route = useRoute()
const router = useRouter()

const pageData = computed(() => {
  const slug = route.params.slug as string
  return productPages[slug]
})

if (!pageData.value) {
  router.replace('/products')
}
</script>

<template>
  <div v-if="pageData">
    <heroSection :hero="pageData.hero" />
  </div>
    <aboutProduct :about="pageData.about" :media="pageData.media" />
    <oneImage :slug="pageData.slug" />
    <featured :features="pageData.features" />
<specificationsProduct :specifications="pageData.specifications" />
</template>