<template>
  <div class="bg-white text-black min-h-screen flex flex-col">
    <TheHeader />

    <main class="flex-1 w-full pt-12 min-[1025px]:pt-[92px]">
      <slot />

    </main>

    <TheFooter />

    <FloatingContactButton />
  </div>
</template>

<script setup lang="ts">
import TheHeader from './TheHeader.vue'
import TheFooter from './TheFooter.vue'
import FloatingContactButton from '../components/FloatingContactButton.vue'
</script>