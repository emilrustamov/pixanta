<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  slug: string
}>()

// Импорт пропов страницы продукта из productPages
import { productPages } from '../data/productPage'

const product = computed(() => productPages[props.slug])
</script>

<template>
  <section class="one-image-section w-full">
    <img
      v-if="product?.showcase?.image"
      :src="product.showcase.image"
      :alt="product.showcase.alt || product.hero.title"
      class="w-full h-full object-cover block"
      loading="lazy"
    />
  </section>
</template>

<style scoped>
.one-image-section img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
/* @media(max-width:760px){
  .one-image-section img {
 

} */

</style>