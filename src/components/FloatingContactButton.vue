<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import FormSection from '../sections/FormSection.vue'

const open = ref(false)

const close = () => {
  open.value = false
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close()
}

watch(open, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <button
    type="button"
    class="fixed bottom-6 right-4 z-[95] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_6px_24px_rgba(255,102,0,0.45)] transition hover:brightness-110 hover:shadow-[0_8px_28px_rgba(255,102,0,0.55)] sm:bottom-8 sm:right-6 sm:h-16 sm:w-16"
    aria-label="Open contact form"
    aria-haspopup="dialog"
    :aria-expanded="open"
    @click="open = true"
  >
    <span class="material-symbols-outlined text-[28px] sm:text-[32px]">call</span>
  </button>

  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      leave-active-class="transition duration-150 ease-in"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-[110] flex items-end justify-center p-4 sm:items-center sm:p-6"
        role="presentation"
      >
        <div
          class="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
          aria-hidden="true"
          @click="close"
        />

        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="floating-contact-title"
          class="relative z-10 flex max-h-[min(90vh,720px)] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.2)] sm:max-w-xl sm:rounded-2xl"
          @click.stop
        >
          <div class="flex shrink-0 items-start justify-between gap-4 border-b border-black/10 px-5 py-4 sm:px-6 sm:py-5">
            <h2
              id="floating-contact-title"
              class="font-main text-xl font-medium uppercase tracking-wide text-third-grey sm:text-2xl"
            >
              Contact us
            </h2>
            <button
              type="button"
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-location-grey transition hover:bg-black/5 hover:text-text"
              aria-label="Close"
              @click="close"
            >
              <span class="material-symbols-outlined text-[26px]">close</span>
            </button>
          </div>

          <div class="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-6 sm:py-6">
            <FormSection :cols="1" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
