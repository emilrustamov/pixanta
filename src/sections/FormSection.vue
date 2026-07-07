<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

interface Props {
  cols?: 1 | 2
}

const props = withDefaults(defineProps<Props>(), {
  cols: 2
})

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
})

const loading = ref(false)
const success = ref(false)
const error = ref('')

const gridClass = computed(() => {
  return props.cols === 1
    ? 'grid-cols-1 gap-y-4'
    : 'grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-10 md:gap-y-12'
})

async function handleSubmit() {
  if (loading.value) return

  loading.value = true
  success.value = false
  error.value = ''

  try {
    // 👇 ЗАМЕНИТЕ НА ВАШ URL ИЗ FORMSPREE
    const response = await fetch('https://formspree.io/f/xbdvbpzo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        message: form.message,
      }),
    })

    if (response.ok) {
      success.value = true
      form.name = ''
      form.company = ''
      form.email = ''
      form.phone = ''
      form.message = ''
    } else {
      const data = await response.json()
      throw new Error(data.error || 'Submission failed')
    }
  } catch (err) {
    error.value = 'Something went wrong. Please try again.'
    console.error('Form error:', err)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="w-full">
    <div class="mx-auto w-full max-w-[1600px]">
      <div :class="props.cols === 2 ? 'max-w-[920px]' : 'max-w-full'" class="w-full min-w-0">
        <!-- Успех -->
        <div 
          v-if="success" 
          class="mb-6 rounded-lg border border-green-500 bg-green-50 p-4 text-green-700"
        >
          ✅ Thank you! Your message has been sent successfully.
        </div>

        <!-- Ошибка -->
        <div 
          v-if="error" 
          class="mb-6 rounded-lg border border-red-500 bg-red-50 p-4 text-red-700"
        >
          ❌ {{ error }}
        </div>

        <!-- Форма -->
        <form 
          v-if="!success"
          :class="gridClass" 
          class="grid" 
          @submit.prevent="handleSubmit"
        >
          <!-- Name -->
          <div class="w-full min-w-0">
            <input
              v-model="form.name"
              type="text"
              placeholder="Name *"
              required
              class="h-[52px] w-full rounded-[10px] border border-[#d3d3d3] bg-white px-4 text-[16px] text-[#666666] outline-none transition focus:border-[#24479c]"
            />
          </div>

          <!-- Company -->
          <div class="w-full min-w-0">
            <input
              v-model="form.company"
              type="text"
              placeholder="Company"
              class="h-[52px] w-full rounded-[10px] border border-[#d3d3d3] bg-white px-4 text-[16px] text-[#666666] outline-none transition focus:border-[#24479c]"
            />
          </div>

          <!-- Email -->
          <div class="w-full min-w-0">
            <input
              v-model="form.email"
              type="email"
              placeholder="*Email *"
              required
              class="h-[52px] w-full rounded-[10px] border border-[#d3d3d3] bg-white px-4 text-[16px] text-[#666666] outline-none transition focus:border-[#24479c]"
            />
          </div>

          <!-- Phone -->
          <div class="w-full min-w-0">
            <input
              v-model="form.phone"
              type="tel"
              placeholder="Phone"
              class="h-[52px] w-full rounded-[10px] border border-[#d3d3d3] bg-white px-4 text-[16px] text-[#666666] outline-none transition focus:border-[#24479c]"
            />
          </div>

          <!-- Message -->
          <div class="w-full min-w-0" :class="{ 'md:col-span-2': props.cols === 2 }">
            <textarea
              v-model="form.message"
              placeholder="*Message *"
              required
              class="min-h-[185px] max-h-[300px] w-full rounded-[10px] border border-[#d3d3d3] bg-white p-4 text-[16px] text-[#666666] outline-none transition focus:border-[#24479c]"
            />
          </div>

          <!-- Button -->
          <div :class="{ 'md:col-span-2': props.cols === 2 }">
            <button
              type="submit"
              :disabled="loading"
              class="flex h-[52px] min-w-[110px] items-center justify-center rounded-[10px] bg-primary px-8 text-[24px] font-main font-semibold uppercase text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {{ loading ? 'Sending...' : 'Submit' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>