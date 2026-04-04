<script setup lang="ts">
defineProps<{
  intro: {
    title: string
    paragraphs: string[]
  }
}>()

import FormSection from '../sections/FormSection.vue'

</script>

<template>
  <section class="w-full py-14 md:py-20">
    <div class="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-16 pb-12 lg:pb-16 border-b border-secondary-grey/20">
      <div class="flex flex-col gap-10 lg:flex-row justify-between">
        
        <!-- TEXT -->
        <div class="w-full lg:w-[70%]">
          <h2 class="font-main text-primary text-[28px] uppercase text-center leading-[1.1] sm:text-[36px] lg:text-[48px]">
            {{ intro.title }} <span class="uppercase font-main text-third-grey">Solutions</span>
          </h2>

          <div class="mt-8 space-y-8">
            <p
              v-for="(paragraph, index) in intro.paragraphs"
              :key="index"
              class="font-simple text-text text-[20px] leading-[1.8]"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>

        <!-- FORM -->
        <div class="w-full lg:w-[30%] flex-shrink-0">
            <div class="flex min-h-[52px] items-center justify-start rounded-[10px] bg-primary px-4 py-3 text-[14px] font-main font-semibold uppercase leading-tight text-white transition sm:px-8 sm:text-[18px] lg:text-[24px] mb-5">
                CONTACT US FOR MORE DETAILS
            </div>
          <FormSection :cols="1" />
          <div class="text-primary font-simple text-[16px] font-light mt-6">* By Clicking SUBMIT, You Authorize
            Pixanta To Send Communications Regarding The Company, Services, And Products.</div>
        </div>
      </div>
    </div>
  </section>
</template>