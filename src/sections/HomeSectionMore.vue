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
              <p> As a trusted provider of innovative one-stop LED display solutions, PIXANTA has been at the forefront of the LED industry since 2012. Headquartered in Shenzhen, we are a national high-tech enterprise specializing in R&D, production, and sales. Our displays cover a wide range of applications including outdoor advertising, commercial real estate, staging & rentals, sports facilities, transportation platforms, and smart cities. We bring creative visions to life, designing tailored solutions to fit your exact needs. </p>

              <p> Operating advanced, fully automated production lines in Shenzhen, Huizhou, and Zhongshan, our monthly production capacity for standard outdoor LED screens exceeds 10,000 square meters. Through an integrated production chain, we ensure reliable quality and fast delivery. We are dedicated to providing global customers with professional pre-sales and after-sales support, establishing a premium 4S service model to keep your projects running smoothly and worry-free. </p>

              <p> Driven by strict quality control, PIXANTA operates state-of-the-art laboratories and holds over ten utility model and invention patents. We have successfully obtained ISO9001, ISO14001, and global product certifications including 3C and CE. Backed by a highly qualified management team and top product development specialists, our high-quality displays have been successfully delivered to landmark projects spanning the globe. </p>

              <p> We are dedicated to your project’s small details while keeping our eyes on the big picture. Adhering to the concept of sharing brand value, we combine advanced technology with exceptional service to boost your brand’s reputation, credibility, and revenue easily. </p>
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