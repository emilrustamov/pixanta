<script setup lang="ts">
import { ref, reactive, computed, onMounted, nextTick } from 'vue'
import emailjs from '@emailjs/browser'

// --- EmailJS Configuration ---
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY

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
  honeypot: ''
})

const loading = ref(false)
const success = ref(false)
const error = ref('')
const recaptchaToken = ref('')
const isVerified = ref(false)
const isRecaptchaLoaded = ref(false)
const recaptchaContainerId = ref('')

const gridClass = computed(() => {
  return props.cols === 1
    ? 'grid-cols-1 gap-y-4'
    : 'grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-10 md:gap-y-12'
})

declare global {
  interface Window {
    onRecaptchaVerify: (token: string) => void
    onRecaptchaExpired: () => void
    grecaptcha: any
  }
}

window.onRecaptchaVerify = (token: string) => {
  recaptchaToken.value = token
  isVerified.value = true
  console.log('✅ reCAPTCHA проверена')
}

window.onRecaptchaExpired = () => {
  recaptchaToken.value = ''
  isVerified.value = false
  console.warn('⚠️ reCAPTCHA токен истёк')
}

async function handleSubmit() {
  if (loading.value) return

  if (form.honeypot) {
    console.warn('🤖 Бот обнаружен!')
    return
  }

  if (!isVerified.value) {
    error.value = 'Пожалуйста, подтвердите, что вы не робот'
    setTimeout(() => { error.value = '' }, 5000)
    return
  }

  loading.value = true
  success.value = false
  error.value = ''

  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        message: form.message,
        'g-recaptcha-response': recaptchaToken.value
      },
      PUBLIC_KEY
    )

    if (result.status === 200) {
      success.value = true
      error.value = ''
      isVerified.value = false
      recaptchaToken.value = ''
      
      form.name = ''
      form.company = ''
      form.email = ''
      form.phone = ''
      form.message = ''
      form.honeypot = ''

      if (window.grecaptcha && window.grecaptcha.reset) {
        window.grecaptcha.reset()
      }

      setTimeout(() => {
        success.value = false
      }, 5000)
    } else {
      throw new Error('Failed to send message')
    }

  } catch (err) {
    console.error('EmailJS error:', err)
    error.value = 'Something went wrong. Please try again.'
    
    setTimeout(() => {
      error.value = ''
    }, 5000)
  } finally {
    loading.value = false
  }
}

// ✅ ИСПРАВЛЕННАЯ ИНИЦИАЛИЗАЦИЯ С grecaptcha.ready()
onMounted(async () => {
  console.log('✅ Компонент формы загружен')
  
  await nextTick()
  
  recaptchaContainerId.value = 'recaptcha-' + Math.random().toString(36).substr(2, 9)
  
  await nextTick()
  
  // Функция для рендеринга
  function renderRecaptcha() {
    const container = document.getElementById(recaptchaContainerId.value)
    if (!container) {
      console.warn('⚠️ Контейнер не найден, повтор через 500ms')
      setTimeout(renderRecaptcha, 500)
      return
    }
    
    try {
      window.grecaptcha.render(recaptchaContainerId.value, {
        sitekey: RECAPTCHA_SITE_KEY,
        callback: window.onRecaptchaVerify,
        'expired-callback': window.onRecaptchaExpired,
        theme: 'light',
        size: 'normal'
      })
      
      isRecaptchaLoaded.value = true
      console.log(' reCAPTCHA инициализирована в контейнере:', recaptchaContainerId.value)
    } catch (err) {
      console.error(' Ошибка рендеринга reCAPTCHA:', err)
      setTimeout(renderRecaptcha, 1000)
    }
  }
  
  // ✅ Ждём, пока grecaptcha будет готов
  if (typeof window.grecaptcha !== 'undefined') {
    window.grecaptcha.ready(() => {
      console.log('✅ grecaptcha готов к использованию')
      renderRecaptcha()
    })
  } else {
    console.warn('⚠️ grecaptcha не загружена, ждём...')
    let attempts = 0
    const checkInterval = setInterval(() => {
      attempts++
      if (typeof window.grecaptcha !== 'undefined' && window.grecaptcha.ready) {
        clearInterval(checkInterval)
        window.grecaptcha.ready(() => {
          console.log('✅ grecaptcha готов к использованию (после ожидания)')
          renderRecaptcha()
        })
      } else if (attempts > 30) {
        clearInterval(checkInterval)
        console.error('❌ grecaptcha не загрузилась за 15 секунд')
      }
    }, 500)
  }
})
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
           Thank you! Your message has been sent successfully.
        </div>

        <!-- Ошибка -->
        <div 
          v-if="error" 
          class="mb-6 rounded-lg border border-red-500 bg-red-50 p-4 text-red-700"
        >
           {{ error }}
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

          <!-- Honeypot -->
          <div style="display: none; position: absolute; left: -9999px;">
            <input 
              type="text" 
              v-model="form.honeypot" 
              tabindex="-1" 
              autocomplete="off"
              placeholder="Не заполняйте это поле"
            />
          </div>

          <!-- ✅ reCAPTCHA -->
          <div :class="{ 'md:col-span-2': props.cols === 2 }" class="w-full min-w-0">
            <div v-if="!isRecaptchaLoaded" class="py-4 text-gray-500">
              loading...
            </div>
            <div :id="recaptchaContainerId" class="w-full min-h-[78px]"></div>
          </div>

          <!-- Button -->
          <div :class="{ 'md:col-span-2': props.cols === 2 }">
            <button
              type="submit"
              :disabled="loading || !isVerified"
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