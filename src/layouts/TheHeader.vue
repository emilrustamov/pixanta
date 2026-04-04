<script setup lang="ts">
import Menu from '../components/Menu.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isMenuOpen = ref(false)
const isVisible = ref(true)
const lastScrollY = ref(0)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const handleScroll = () => {
  if (isMenuOpen.value) {
    isVisible.value = true
    return
  }

  const currentScrollY = window.scrollY
  const diff = currentScrollY - lastScrollY.value

  if (currentScrollY <= 10) {
    isVisible.value = true
    lastScrollY.value = currentScrollY
    return
  }

  if (Math.abs(diff) < 10) return

  isVisible.value = diff < 0
  lastScrollY.value = currentScrollY
}

onMounted(() => {
  lastScrollY.value = window.scrollY
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="fixed top-0 left-0 z-[100] w-full transition-transform duration-300"
    :class="isVisible || isMenuOpen ? 'translate-y-0' : '-translate-y-full'">
    <div class="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-20">
      <!-- Mobile / Tablet -->
      <div class="flex h-[72px] items-center justify-between lg:hidden">
        <router-link to="/" class="flex items-center shrink-0">
          <img src="/images/header-logo.png" alt="Canbest Logo" class="h-10 w-auto mr-2" />
        </router-link>

        <div class="flex items-center gap-2">
          <button class="flex h-[26px] w-[26px] items-center justify-center" aria-label="Search">
            <span class="material-symbols-outlined !text-[26px] text-secondary-grey">
              search
            </span>
          </button>

          <button class="flex h-[26px] w-[26px] items-center justify-center" aria-label="Menu" @click="toggleMenu">
            <span class="material-symbols-outlined !text-[26px] text-primary">
              {{ isMenuOpen ? 'close' : 'menu' }}
            </span>
          </button>
        </div>
      </div>

      <!-- Desktop -->
      <div class="hidden h-[140px] items-center justify-between lg:flex">
        <router-link to="/" class="flex items-center shrink-0">
          <img src="/images/header-logo.png" alt="Canbest Logo" class="h-10 w-auto mr-2" />
        </router-link>

        <div class="flex items-center gap-4">
          <button
            class="flex h-[44px] min-w-[146px] items-center justify-center rounded-full px-6 text-lg font-semibold uppercase tracking-wide text-white transition font-main"
            :class="isMenuOpen ? 'bg-primary' : 'bg-secondary-grey hover:bg-primary'" @click="toggleMenu">
            Menu
            <span class="material-symbols-outlined text-[28px] text-white ml-2">
              {{ isMenuOpen ? 'close' : 'menu' }}
            </span>
          </button>

          <a href="#"
            class="flex h-[44px] min-w-[146px] items-center justify-center rounded-full bg-secondary-grey px-6 text-lg font-semibold uppercase tracking-wide text-white transition hover:bg-primary font-main">
            Contact
          </a>

          <button class="flex h-[44px] w-[44px] items-center justify-center bg-primary rounded-full">
            <span class="material-symbols-outlined text-[30px] text-white">
              search
            </span>
          </button>
        </div>
      </div>
    </div>
  </header>
  <Menu :open="isMenuOpen" @close="isMenuOpen = false" />
</template>
