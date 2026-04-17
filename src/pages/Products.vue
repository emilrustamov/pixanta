<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PageLocation from '../components/PageLocation.vue';
import { productsData } from '../data/products'
import { menuData } from '../data/menu'

const route = useRoute()
const router = useRouter()
const productsMenu = menuData.find(item => item.key === 'products')
const productCategories = productsMenu?.categories ?? []
const activeCategory = ref('all')
const currentPage = ref(1)
const perPage = 9
const productsSection = ref<HTMLElement | null>(null)
    const activeCategoryData = computed(() => {
    if (activeCategory.value === 'all') {
        return {
            title: '',
            description: '',
        }
    }

    const currentCategory = productCategories.find(category => {
        const hash = category.href.split('#')[1]?.toLowerCase()
        return hash === activeCategory.value
    })

    return {
        title: currentCategory?.title ?? 'PRODUCT RANGE',
        description: currentCategory?.previewDescription ?? '',
    }
})

const categoryLabels: Record<string, string> = {
    all: 'All',
    outdoor: 'Outdoor',
    rental: 'Rental',
    indoor: 'Indoor',
    floor: 'Floor',
    glass: 'Glass',
}

const categories = computed(() => {
    const unique = [...new Set(productsData.map(item => item.category))]

    return [
        { key: 'all', label: categoryLabels.all },
        ...unique.map(category => ({
            key: category,
            label: categoryLabels[category] ?? category,
        })),
    ]
})

const filteredProducts = computed(() => {
    if (activeCategory.value === 'all') {
        return productsData
    }

    return productsData.filter(item => item.category === activeCategory.value)
})

const totalPages = computed(() => {
    return Math.ceil(filteredProducts.value.length / perPage)
})

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * perPage
    return filteredProducts.value.slice(start, start + perPage)
})

const goToPage = (page: number) => {
    if (page < 1 || page > totalPages.value) return

    currentPage.value = page

    requestAnimationFrame(() => {
        if (!productsSection.value) return

        const offset = 96
        const top =
            productsSection.value.getBoundingClientRect().top +
            window.pageYOffset -
            offset

        window.scrollTo({
            top,
            behavior: 'smooth',
        })
    })
}

const syncCategoryFromHash = () => {
    const hash = route.hash.replace('#', '').toLowerCase()

    if (!hash) {
        activeCategory.value = 'all'
        return
    }

    const exists = categories.value.some(category => category.key === hash)
    activeCategory.value = exists ? hash : 'all'
}

const setCategory = (key: string) => {
    activeCategory.value = key
    currentPage.value = 1

    router.replace({
        path: '/products',
        hash: key === 'all' ? '' : `#${key}`,
    })
}

watch(activeCategory, () => {
    currentPage.value = 1
})
watch(() => route.hash, () => {
    syncCategoryFromHash()
})

onMounted(() => {
    syncCategoryFromHash()
})

</script>
<template>
    <section class="relative">
        <div class="banner relative w-full  bg-cover bg-center"
            :style="{ backgroundImage: 'url(/images/new.jpg)' }">
            <div class="absolute inset-0 flex items-center justify-center text-white">
            </div>
        </div>
    </section>
    <PageLocation :items="[
        { label: 'Home', to: '/' },
        { label: 'Products' }
    ]" />
    <section ref="productsSection" class="relative w-full pt-14 md:pt-20">
        <div class="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-16">
            <!-- filters -->
            <div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 pb-8 sm:gap-x-8 sm:gap-y-4">
                <template v-for="(category, idx) in categories" :key="category.key">
                    <button type="button" @click="setCategory(category.key)"
                        class="font-main text-[20px] uppercase transition font-medium md:text-[24px]"
                        :class="activeCategory === category.key ? 'text-primary' : 'text-text'">
                        {{ category.label }}
                    </button>
                    <span v-if="idx < categories.length - 1"
                        class="mx-1 mb-1 text-text text-[16px] font-medium select-none sm:mx-2 sm:text-[20px] lg:text-[24px]">|</span>
                </template>
            </div>
        </div>

        <div class="relative bg-[#f5f5f5] w-full py-8 mx-auto">
            <!-- triangle -->
            <div class="absolute left-1/2 top-0 -translate-x-1/2
           border-l-[28px] border-r-[28px] border-t-[28px]
           md:border-l-[42px] md:border-r-[28px] md:border-t-[28px]
           border-l-transparent border-r-transparent border-t-white z-3"></div>
            <div class="mx-auto max-w-[1100px] text-center mt-12 px-4 sm:px-6 lg:px-10 xl:px-16">
                <h2>
          
                    {{ activeCategoryData.title }}
                </h2>

                <p
                    class="mx-auto mt-6 max-w-[1100px] font-light font-simple text-[18px] leading-[1.8] text-text sm:text-[20px]">
                    {{ activeCategoryData.description }}
                </p>
            </div>
            <!-- cards -->
            <div
                class="max-w-[1600px] mx-auto  mt-[50px] md:mt-[70px] mb-12 px-6 grid grid-cols-1 gap-6 xl:gap-12 sm:grid-cols-2 xl:grid-cols-3">
                <router-link v-for="item in paginatedProducts" :key="item.slug" :to="item.href"
                    class="group flex h-full flex-col overflow-hidden rounded-[10px] border border-[#d9d9d9] bg-white transition hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                    <!-- image -->
                    <div
                        class="flex h-[260px] items-center justify-center overflow-hidden bg-white p-6 sm:h-[300px] lg:h-[320px]">
                        <img 
                        :src="item.image" 
                        :alt="item.title"
                        loading="lazy"
                        decoding="async"
                            class="max-h-full w-auto max-w-full object-contain transition duration-300 group-hover:scale-[1.03]" />
                    </div>

                    <!-- content -->
                    <div class="flex flex-1 flex-col border-t border-[#e5e5e5] px-6 py-7 text-center">
                        <h3
                            class="font-main text-text text-[24px] uppercase leading-relaxed transition duration-300 group-hover:text-primary">
                            {{ item.title }}
                        </h3>

                        <p class="mt-4 font-simple font-light text-[18px] leading-relaxed text-text whitespace-pre-line">
                            {{ item.description }}
                        </p>
                    </div>
                </router-link>
            </div>
            
            <div v-if="totalPages > 1" class="flex items-center justify-center gap-3 pb-10 pt-4">
                <!-- prev -->
                <button
                    v-if="currentPage > 1"
                    type="button"
                    @click="goToPage(currentPage - 1)"
                    class="flex h-[42px] min-w-[42px] items-center justify-center rounded-[4px] border border-[#d9d9d9] bg-white px-3 text-[18px] text-text transition hover:border-primary hover:text-primary">
                    &laquo;
                </button>

                <!-- pages -->
                <button
                    v-for="page in totalPages"
                    :key="page"
                    type="button"
                    @click="goToPage(page)"
                    class="flex h-[42px] min-w-[42px] items-center justify-center rounded-[4px] border text-[18px] font-simple transition"
                    :class="page === currentPage
                        ? 'border-primary bg-primary text-white'
                        : 'border-[#d9d9d9] bg-white text-text hover:border-primary hover:text-primary'">
                    {{ page }}
                </button>

                <!-- next -->
                <button
                    v-if="currentPage < totalPages"
                    type="button"
                    @click="goToPage(currentPage + 1)"
                    class="flex h-[42px] min-w-[42px] items-center justify-center rounded-[4px] border border-[#d9d9d9] bg-white px-3 text-[18px] text-text transition hover:border-primary hover:text-primary">
                    &raquo;
                </button>
            </div>
        </div>
    </section>

</template>
<style scoped>
.banner {
    height: clamp(11.25rem, 6.084rem + 22.04vw, 28.125rem);
}
</style>