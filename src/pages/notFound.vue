<script setup lang="ts">
</script>
<template>
<div class="relative flex flex-col items-center justify-center h-[70vh] bg-[#1f1f1f] overflow-hidden">
 
  <div class="relative z-10 flex flex-col items-center">
    <h1 class="font-main text-9xl font-extrabold text-gray-400 tracking-widest">404</h1>
    <div class="bg-primary px-2 text-sm rounded rotate-12 absolute mt-[5rem] text-white shadow-md">
      Page Not Found
    </div>
    
    <div class="mt-8 text-center font-simple font-light text-white text-[20px]">
      Sorry, the page you are looking for does not exist.
    </div>

    <router-link
      to="/"
      class=" font-main mt-8 px-6 py-2 bg-primary hover:bg-primary/80 text-white rounded-lg text-lg shadow transition-all active:scale-95"
    >
      Go Home
    </router-link>
  </div>
</div>

</template>

<style scoped>

</style>