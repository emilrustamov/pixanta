<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isHovered = ref(false) // состояние: наведена ли мышка на блок
const mediaOpacity = ref(0)
const props = defineProps<{
  hero: {
    title: string
    subtitle?: string
    description?: string
    mediaType: 'image' | 'video'
    media: string
  }
}>()

const sectionRef = ref<HTMLElement | null>(null)

const mediaWidth = ref(42)
const mediaHeight = ref(28)
const mediaBottom = ref(0)
const mediaRadius = ref(16)
const titleOpacity = ref(1)
const titleScale = ref(1)

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max)
}

const updateAnimation = () => {
  if (!sectionRef.value) return

  const rect = sectionRef.value.getBoundingClientRect()
  const viewportHeight = window.innerHeight

  const totalScrollable = rect.height - viewportHeight
  const passed = clamp(-rect.top, 0, totalScrollable)
  const progress = totalScrollable > 0 ? passed / totalScrollable : 0

  mediaWidth.value = 42 + progress * 58
  mediaHeight.value = 28 + progress * 72
  mediaBottom.value = 0
  mediaRadius.value = 16 - progress * 16

  titleOpacity.value = 1 - progress * 0.45
  titleScale.value = 1 - progress * 0.08
  mediaOpacity.value = clamp(progress * 1.4, 0, 1)
}

const onScroll = () => {
  requestAnimationFrame(updateAnimation)
}

onMounted(() => {
  updateAnimation()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', updateAnimation)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', updateAnimation)
})
</script>

<template>
  <section ref="sectionRef" class="relative h-[220vh] bg-[#f5f5f5]">
    <div class="sticky top-0 h-screen overflow-hidden">
      <div class="relative h-full w-full">

        <!-- title -->
        <div class="absolute inset-x-0 top-[8vh] z-10 px-4 text-center" :style="{
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
        }">
          <h1 class="main mt-12 font-main font-semibold text-text leading-none uppercase">
            {{ hero.title }}
          </h1>

          <h2 v-if="hero.subtitle"
            class="mt-6 font-main uppercase !text-text leading-none text-[26px] sm:text-[38px] md:text-[52px] lg:text-[64px]">
            {{ hero.subtitle }}
          </h2>

          <p v-if="hero.description"
            class="mx-auto mt-8 max-w-[920px] font-simple font-light uppercase leading-[1.7] text-text text-[16px] sm:text-[18px] md:text-[20px]">
            {{ hero.description }}
          </p>

          <!-- Контейнер с классом group -->
          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <!-- ПЕРВАЯ КНОПКА -->
            <RouterLink to="#about" @mouseenter="isHovered = true" @mouseleave="isHovered = false" :class="[
              'inline-flex min-h-[52px] items-center justify-center rounded-full px-8 font-main font-medium text-[20px] transition duration-300',
              isHovered ? 'bg-[#b8b8b8] text-text' : 'bg-primary text-white'
            ]">
              More Information
            </RouterLink>

            <!-- ВТОРАЯ КНОПКА -->
            <RouterLink to="#specifications" :class="[
              'inline-flex min-h-[52px] items-center justify-center rounded-full px-8 font-main font-medium text-[20px] transition duration-300',
              isHovered ? 'bg-primary text-white' : 'bg-[#b8b8b8] text-text'
            ]">
              Specifications
            </RouterLink>

          </div>



        </div>

        <!-- media -->
        <div
          class="absolute left-1/2 z-20 -translate-x-1/2 overflow-hidden  flex items-center justify-center"
          :style="{
            width: `${mediaWidth}%`,
            height: `${mediaHeight}vh`,
            bottom: `${mediaBottom}vh`,
            borderRadius: `${mediaRadius}px`,
            backgroundColor: `rgba(245,245,245,${mediaOpacity})`,
            padding: '20px', // большой паддинг
          }"
        >
          <video
            v-if="hero.mediaType === 'video'"
            :src="hero.media"
            autoplay
            muted
            loop
            playsinline
            class="object-contain max-w-[380px] max-h-[420px] w-full h-full"
          />

          <img
            v-else
            :src="hero.media"
            :alt="hero.title"
            class="object-contain max-w-[380px] max-h-[420px] w-full h-full"
          />
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.main {
  font-size: clamp(2.25rem, 1.431rem + 3.5vw, 5.625rem);
}
</style>