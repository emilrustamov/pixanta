<script setup lang="ts">
import { reactive, computed } from 'vue'

// Добавляем пропсы для гибкости
interface Props {
  cols?: 1 | 2; // Количество колонок на десктопе
}

const props = withDefaults(defineProps<Props>(), {
  cols: 2
})

type FormData = {
  name: string
  company: string
  email: string
  phone: string
  message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

const form = reactive<FormData>({
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
})

const errors = reactive<FormErrors>({
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
})

const touched = reactive<Record<keyof FormData, boolean>>({
  name: false,
  company: false,
  email: false,
  phone: false,
  message: false,
})

const isSubmitting = reactive({
  value: false,
})

const successMessage = reactive({
  value: '',
})

// Динамический класс для сетки в зависимости от пропса cols
const gridClass = computed(() => {
  return props.cols === 1 
    ? 'grid-cols-1 gap-y-4' 
    : 'grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-10 md:gap-y-12'
})

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^[+]?[0-9\s\-()]{7,20}$/

function validateField(field: keyof FormData): boolean {
  const value = form[field].trim()
  errors[field] = ''

  if (field === 'name') {
    if (!value) {
      errors.name = 'Name is required.'
      return false
    }
    if (value.length < 2) {
      errors.name = 'Name must be at least 2 characters.'
      return false
    }
  }

  if (field === 'email') {
    if (!value) {
      errors.email = 'Email is required.'
      return false
    }
    if (!emailRegex.test(value)) {
      errors.email = 'Please enter a valid email.'
      return false
    }
  }

  if (field === 'phone') {
    if (!value) {
      errors.phone = 'Phone is required.'
      return false
    }
    if (!phoneRegex.test(value)) {
      errors.phone = 'Please enter a valid phone number.'
      return false
    }
  }

  if (field === 'message') {
    if (!value) {
      errors.message = 'Message is required.'
      return false
    }
    if (value.length < 10) {
      errors.message = 'Message must be at least 10 characters.'
      return false
    }
  }

  return true
}

function handleBlur(field: keyof FormData) {
  touched[field] = true
  validateField(field)
}

function validateForm(): boolean {
  const requiredFields: (keyof FormData)[] = ['name', 'email', 'phone', 'message']
  let isValid = true

  requiredFields.forEach((field) => {
    touched[field] = true
    if (!validateField(field)) {
      isValid = false
    }
  })

  return isValid
}

function resetForm() {
  Object.keys(form).forEach(key => (form[key as keyof FormData] = ''))
  Object.keys(errors).forEach(key => (errors[key as keyof FormErrors] = ''))
  Object.keys(touched).forEach(key => (touched[key as keyof FormData] = false))
}

async function handleSubmit() {
  successMessage.value = ''
  if (!validateForm()) return

  try {
    isSubmitting.value = true
    await new Promise((resolve) => setTimeout(resolve, 1500)) // Имитация запроса
    successMessage.value = 'Form submitted successfully.'
    resetForm()
  } catch (error) {
    console.error('Submit error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="w-full">
    <div class="mx-auto w-full max-w-[1600px] ">
      <div :class="props.cols === 2 ? 'max-w-[920px]' : 'max-w-full'" class="w-full min-w-0">
        <form
          :class="gridClass"
          class="grid"
          @submit.prevent="handleSubmit"
        >
          <!-- Name -->
          <div class="w-full min-w-0">
            <input
              v-model="form.name"
              type="text"
              placeholder="Name"
              class="h-[52px] w-full rounded-[10px] border border-[#d3d3d3] bg-white px-4 text-[16px] text-[#666666] outline-none transition focus:border-[#24479c]"
              :class="{ '!border-red-500': touched.name && errors.name }"
              @blur="handleBlur('name')"
              @input="validateField('name')"
            />
            <p v-if="touched.name && errors.name" class="mt-2 text-sm text-red-500">{{ errors.name }}</p>
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
              placeholder="*Email"
              class="h-[52px] w-full rounded-[10px] border border-[#d3d3d3] bg-white px-4 text-[16px] text-[#666666] outline-none transition focus:border-[#24479c]"
              :class="{ '!border-red-500': touched.email && errors.email }"
              @blur="handleBlur('email')"
              @input="validateField('email')"
            />
            <p v-if="touched.email && errors.email" class="mt-2 text-sm text-red-500">{{ errors.email }}</p>
          </div>

          <!-- Phone -->
          <div class="w-full min-w-0">
            <input
              v-model="form.phone"
              type="tel"
              placeholder="Phone"
              class="h-[52px] w-full rounded-[10px] border border-[#d3d3d3] bg-white px-4 text-[16px] text-[#666666] outline-none transition focus:border-[#24479c]"
              :class="{ '!border-red-500': touched.phone && errors.phone }"
              @blur="handleBlur('phone')"
              @input="validateField('phone')"
            />
            <p v-if="touched.phone && errors.phone" class="mt-2 text-sm text-red-500">{{ errors.phone }}</p>
          </div>

          <!-- Message -->
          <div class="w-full min-w-0" :class="{ 'md:col-span-2': props.cols === 2 }">
            <textarea
              v-model="form.message"
              placeholder="*Message"
              class="min-h-[185px]  max-h-[300px] w-full rounded-[10px] border border-[#d3d3d3] bg-white p-4 text-[16px] text-[#666666] outline-none transition focus:border-[#24479c]"
              :class="{ '!border-red-500': touched.message && errors.message }"
              @blur="handleBlur('message')"
              @input="validateField('message')"
            />
            <p v-if="touched.message && errors.message" class="mt-2 text-sm text-red-500">{{ errors.message }}</p>
          </div>

          <!-- Button -->
          <div class="" :class="{ 'md:col-span-2': props.cols === 2 }">
            <button
              type="submit"
              class="flex h-[52px] min-w-[110px] items-center justify-center rounded-[10px] bg-primary px-8 text-[24px] font-main font-semibold uppercase text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              :disabled="isSubmitting.value"
            >
              {{ isSubmitting.value ? 'Sending...' : 'Submit' }}
            </button>
            <p v-if="successMessage.value" class="mt-3 text-sm text-green-600">{{ successMessage.value }}</p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
