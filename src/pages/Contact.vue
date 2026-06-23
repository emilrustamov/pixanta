<script setup lang="ts">
import PageLocation from '../components/PageLocation.vue';
import FormSection from '../sections/FormSection.vue';
</script>
<template>
  <section class="relative">
    <div class="banner relative w-full  bg-cover bg-center"
      :style="{ backgroundImage: 'url(/images/new.jpg)' }">
      <div class="absolute inset-0 flex items-center justify-center text-white">
      </div>
    </div>
  </section>

  <PageLocation :items="[
    { label: 'Home', to: '/' },
    { label: 'Contact' }
  ]" />
  
  <section class="w-full py-10 md:py-16 lg:py-20">
    <div class="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-16">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        
        <!-- Левая колонка -->
        <div class="w-full">
          <h2 class="!text-start !text-text">
            BRING YOUR VISION TO LIFE WITH CANBEST LED!
          </h2>

          <p class="mt-5 md:mt-8 font-simple text-text text-[18px] font-light leading-relaxed">
            Discover how our state-of-the-art LED wall solutions can transform your space with
            vibrant, high-quality led displays. Whether it’s for advertising, broadcasting,
            events, or custom projects, we’re here to help.
          </p>

          <div class="mt-4 space-y-4 text-[16px] leading-relaxed text-location-grey font-simple font-light">
            <div class="flex flex-col gap-2 md:flex-row md:gap-10">
              
              <p class="font-simple">Email: info@pixantaled.com</p>
            </div>

            

            <div class="font-simple">
              <p class="mb-2">Visit Us:</p>
              <p >* Building С, Fuzhen lndustrial Park, Changfeng Road, Changzhen Village, Yutang street, Shenzhen, China</p>
             
            </div>
          </div>
        </div>

        <!-- Правая колонка -->
        <div class="w-full min-w-0">
          <FormSection :cols="2" />
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.banner {
  height: clamp(11.25rem, 6.084rem + 22.04vw, 28.125rem);
}
</style>