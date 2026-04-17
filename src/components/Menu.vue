<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router' // 1. Импортируем хук роутера
import { menuData } from '../data/menu'
import MegaMenuSidebar from './MegaMenuSidebar.vue'
import MegaMenuCategories from './MegaMenuCategories.vue'
import MegaMenuSeries from './MegaMenuSeries.vue'
import MegaMenuPreview from './MegaMenuPreview.vue'

const props = defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const route = useRoute() // 2. Получаем текущий маршрут

const activeMainKey = ref<'products' | 'markets' | 'contacts' | 'about-us'>('products')
const activeCategoryIndex = ref(0)
const activeSeriesIndex = ref(0)

// 3. АВТО-ЗАКРЫТИЕ: Если URL изменился, закрываем меню
watch(
  () => route.fullPath,
  () => {
    emit('close')
  }
)

const activeMainItem = computed(() => {
  return menuData.find(item => item.key === activeMainKey.value) ?? menuData[0]
})

const activeCategory = computed(() => {
  return activeMainItem.value.categories[activeCategoryIndex.value]
})

const activeSeries = computed(() => {
  return activeCategory.value?.series?.[activeSeriesIndex.value]
})

const previewTitle = computed(() => {
  if (activeMainItem.value.type === 'products') {
    return activeSeries.value?.title || activeCategory.value?.title || ''
  }
  return activeCategory.value?.title || ''
})

const previewImage = computed(() => {
  if (activeMainItem.value.type === 'products') {
    return activeSeries.value?.image || ''
  }
  return activeCategory.value?.previewImage || ''
})

const previewDescription = computed(() => {
  if (activeMainItem.value.type === 'products') {
    return activeSeries.value?.description || activeCategory.value?.previewDescription || ''
  }
  return activeCategory.value?.previewDescription || ''
})

const previewSpecs = computed(() => {
  if (activeMainItem.value.type === 'products') {
    return activeSeries.value?.specs || []
  }
  return []
})

watch(activeMainKey, () => {
  activeCategoryIndex.value = 0
  activeSeriesIndex.value = 0
})

watch(activeCategoryIndex, () => {
  activeSeriesIndex.value = 0
})

const closeOnEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emit('close')
  }
}

watch(
  () => props.open,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  },
)

onMounted(() => {
  window.addEventListener('keydown', closeOnEscape)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', closeOnEscape)
  document.body.style.overflow = ''
})

// 4. Функция для ручного закрытия при клике на финальный элемент
const handleSelect = () => {
  emit('close')
}
</script>

<template>
  <Transition name="mega-menu">
    <div
      v-if="open"
      class="fixed inset-0 z-[70] bg-white/90 md:bg-white/75 backdrop-blur-md"
      @click.self="emit('close')"
    >
      <div
        class="mx-auto grid h-full max-h-full max-w-[1440px] grid-cols-1 gap-8 overflow-y-auto px-4 pb-12 pt-16 sm:px-6 sm:pt-20 min-[1025px]:gap-10 min-[1025px]:px-12 min-[1025px]:!pt-[150px] xl:px-16"
        :class="
          activeMainItem.type === 'products'
            ? 'xl:grid-cols-[220px_280px_320px_minmax(0,1fr)]'
            : 'min-[1025px]:grid-cols-[220px_minmax(0,320px)_minmax(0,1fr)]'
        "
      >
        <MegaMenuSidebar
          :items="menuData"
          :active-key="activeMainKey"
          @change="activeMainKey = $event"
        />

        <!-- Добавляем обработчик клика @click="handleSelect" 
             на компоненты, где есть финальные ссылки -->
        <MegaMenuCategories
         
          :categories="activeMainItem.categories"
          :active-index="activeCategoryIndex"
          @change="activeCategoryIndex = $event"
          @click="handleSelect" 
        />

        <MegaMenuSeries
        
          v-if="activeMainItem.type === 'products'"
          :series="activeCategory?.series || []"
          :active-index="activeSeriesIndex"
          @change="activeSeriesIndex = $event"
          @click="handleSelect"
        />

        <MegaMenuPreview
        
          :title="previewTitle"
          :image="previewImage"
          :description="previewDescription"
          :specs="previewSpecs"
          @click="handleSelect"
        />
      </div>
    </div>
  </Transition>
</template>

<style scoped>

.mega-menu-enter-active,
.mega-menu-leave-active {
  transition: all 0.3s ease-out;
}

.mega-menu-enter-from,
.mega-menu-leave-to {
  opacity: 0;
  transform: scale(0.98); /* Легкое уменьшение */

  
}
</style>
