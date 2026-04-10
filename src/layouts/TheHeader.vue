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
  <header
    class="fixed top-0 left-0 z-[100] w-full border-b border-white/10 bg-[#1f1f1f] shadow-[0_1px_0_rgba(0,0,0,0.15)] transition-transform duration-300"
    :class="isVisible || isMenuOpen ? 'translate-y-0' : '-translate-y-full'"
  >
    <div class="mx-auto w-full px-4 sm:px-6 min-[1025px]:px-10 xl:px-20">
      <div class="flex h-12 items-center justify-between min-[1025px]:hidden">
        <router-link to="/" class="flex items-center shrink-0">
          <img src="/images/header-logo.png" alt="Canbest Logo" class="h-5 md:h-8 w-auto mr-2" />
        </router-link>

        <button
          type="button"
          class="flex h-8 w-8 shrink-0 items-center justify-center"
          aria-label="Menu"
          @click="toggleMenu"
        >
          <span class="material-symbols-outlined !text-[22px] text-primary">
            {{ isMenuOpen ? 'close' : 'menu' }}
          </span>
        </button>
      </div>

      <div class="hidden h-[92px] items-center justify-between min-[1025px]:flex">
        <router-link to="/" class="flex items-center shrink-0">
          <img src="/images/header-logo.png" alt="Canbest Logo" class="h-9 w-auto mr-2" />
        </router-link>

        <div class="flex items-center gap-3">
          <button
            type="button"
            class="flex h-10 min-w-[118px] items-center justify-center rounded-full border-2 border-primary/80 bg-primary px-4 text-base font-semibold uppercase tracking-wide text-white shadow-[0_3px_10px_rgba(255,102,0,0.35)] transition font-main hover:brightness-110 hover:shadow-[0_4px_14px_rgba(255,102,0,0.45)]"
            @click="toggleMenu"
          >
            Menu
            <span class="material-symbols-outlined ml-1.5 text-[22px] text-white">
              {{ isMenuOpen ? 'close' : 'menu' }}
            </span>
          </button>

          <router-link
            to="/contact"
            class="flex h-10 min-w-[118px] items-center justify-center rounded-full border-2 border-white bg-white px-4 text-base font-semibold uppercase tracking-wide text-[#1f1f1f] transition font-main hover:border-primary hover:bg-primary hover:text-white"
          >
            Contact
          </router-link>
        </div>
      </div>
    </div>
  </header>
  <Menu :open="isMenuOpen" @close="isMenuOpen = false" />
</template>
<style scoped>
@media(max-width:768px){
  .logo{
  width: 55px !important;
  height: 20px !important;
}
}
</style>