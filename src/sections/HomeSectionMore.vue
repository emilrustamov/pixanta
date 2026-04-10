<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <section class="pb-10 lg:pb-16">
    <div class="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-16">
      <button
        type="button"
        class="flex h-[60px] w-full items-center justify-between border border-black/10 px-6 py-5 text-left transition hover:border-black/20"
        @click="isOpen = !isOpen"
      >
        <span class="font-simple font-light text-[20px] text-[#999999]">
          More On Pixanta Displays
        </span>

        <span class="font-bold text-[30px] leading-none text-primary">
          {{ isOpen ? '−' : '+' }}
        </span>
      </button>

      <Transition name="accordion">
        <div v-show="isOpen" class="overflow-hidden">
          <div class="px-6 pt-8">
            <div class="max-w-[1500px] space-y-10 font-simple font-light text-[20px] leading-relaxed text-text/70">
              <p>
                As a trusted provider of innovative one-stop LED display solutions, Canbest LED has been at the forefront of the LED industry since 2008. Our displays cover a wide range of applications including DOOH, commercial display, staging & rentals, virtual production, stadium display and bespoke solution. We bring creative visions to life, so whatever your expected vision is, our solutions are here designed to fit.
              </p>

              <p>
                Also, as the verified pro supplier of Alibaba, we are eager to assist you every step of the way. We keep products inventory for 7 days fast delivery, and provide the pioneering 5 years warranty to keep you worry-free. Meanwhile we have professional service team for 24/7 online technical support and local on-site installation service.
              </p>

              <p>
                Till now Canbest has obtained ISO 9001 Quality Management System, ISO14001 Environmental Management System, OHSAS 18001 Health and Safety Management System. All our products are with CCC, CE, FCC, Rohs certificate for global market. And successfully been delivered more than 10000+ installations in over 120 countries.
              </p>

              <p>
                We are dedicated to your project’s small details while keeping our eyes on the big picture. With our LED screen, you can boost your brand’s reputation, credibility, and revenue easily.
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  overflow: hidden;
  transition:
    max-height 0.45s ease,
    opacity 0.35s ease,
    transform 0.35s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-18px);
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 1000px;
  opacity: 1;
  transform: translateY(0);
}
</style>