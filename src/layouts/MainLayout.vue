<template>
  <div class="bg-white text-black min-h-screen flex flex-col">
    <TheHeader />

    <main class="flex-1 w-full ">
      <slot />

    </main>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from './TheHeader.vue'
import TheFooter from './TheFooter.vue'
</script>