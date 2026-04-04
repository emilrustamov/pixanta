<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{
  hero: {
    title: string
    subtitle?: string
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

  // старт: приклеен снизу как wide banner
  // конец: растёт до full screen
  mediaWidth.value = 42 + progress * 58
  mediaHeight.value = 28 + progress * 72
  mediaBottom.value = 0
  mediaRadius.value = 16 - progress * 16

  // title уходит назад
  titleOpacity.value = 1 - progress * 0.45
  titleScale.value = 1 - progress * 0.08
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
  <section
    ref="sectionRef"
    class="relative h-[220vh] bg-[#f5f5f5]"
  >
    <div class="sticky top-0 h-screen overflow-hidden">
      <div class="relative h-full w-full">

        <!-- title -->
        <div
          class="absolute inset-x-0 top-[10vh] z-10 px-4 text-center"
          :style="{
            opacity: titleOpacity,
            transform: `scale(${titleScale})`,
          }"
        >
          <h1
            class="font-main uppercase text-text leading-none text-[54px] sm:text-[72px] md:text-[110px] lg:text-[150px] xl:text-[180px]"
          >
            {{ props.hero.title }}
          </h1>

          <p
            v-if="props.hero.subtitle"
            class="mt-5 font-simple uppercase tracking-[1px] text-third-grey text-[11px] sm:text-[12px] md:text-[13px]"
          >
            {{ props.hero.subtitle }}
          </p>
        </div>

        <!-- media -->
        <div
          class="absolute left-1/2 z-20 -translate-x-1/2 overflow-hidden"
          :style="{
            width: `${mediaWidth}%`,
            height: `${mediaHeight}vh`,
            bottom: `${mediaBottom}vh`,
            borderRadius: `${mediaRadius}px`,
          }"
        >
          <video
            v-if="props.hero.mediaType === 'video'"
            :src="props.hero.media"
            autoplay
            muted
            loop
            playsinline
            class="h-full w-full object-cover"
          />

          <img
            v-else
            :src="props.hero.media"
            :alt="props.hero.title"
            class="h-full w-full object-cover"
          />

          <!-- arrows -->
          <div class="pointer-events-none absolute inset-0 flex items-end justify-center pb-8 sm:pb-10">
            <div class="flex flex-col items-center gap-1">
              <span class="hero-chevron"></span>
              <span class="hero-chevron delay-1"></span>
              <span class="hero-chevron delay-2"></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-chevron {
  width: 18px;
  height: 18px;
  border-right: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  transform: rotate(45deg);
  opacity: 0.95;
  animation: heroArrowMove 1.5s infinite;
}

.delay-1 {
  animation-delay: 0.18s;
}

.delay-2 {
  animation-delay: 0.36s;
}

@keyframes heroArrowMove {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-4px, -4px);
  }
  50% {
    opacity: 1;
    transform: rotate(45deg) translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(4px, 4px);
  }
}
</style>