<script setup lang="ts">
const products = [
    { label: 'Outdoor', to: '/products#outdoor' },
    { label: 'Rental', to: '/products#rental' },
    { label: 'Indoor', to: '/products#indoor' },
    { label: 'Floor', to: '/products#floor' },
    { label: 'Glass', to: '/products#glass' },
]

const solutions = [
    { label: 'Outdoor Digital (DOOH)', to: '/markets/outdoor' },
    { label: 'Evenets & Rentals', to: '/markets/rental' },
    { label: 'Creative Indoor LED', to: '/markets/indoor' },
    { label: 'XR & Virtual Studios', to: '/markets/floor' },
    { label: 'Transparent Glass Led', to: '/markets/glass' },
]

const aboutLinks = [
    { label: 'About us', to: '/about-us' },
    { label: 'Contact', to: '/contact' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
]

const socials = [
    {
        name: 'Facebook',
        href: '#',
        icon: '/images/socials/f.png',
    },
    {
        name: 'LinkedIn',
        href: '#',
        icon: '/images/socials/l.png',
    },
    {
        name: 'YouTube',
        href: '#',
        icon: '/images/socials/y.png',
    },
    {
        name: 'Instagram',
        href: '#',
        icon: '/images/socials/in.png',
    },
]

</script>

<template>
    <footer class="bg-[#1f1f1f] text-white">
        <div class="mx-auto w-full px-4 sm:px-6 min-[1025px]:px-10 xl:px-20">
            <div
                class="grid grid-cols-1 gap-6 py-6 md:grid-cols-3 md:gap-6 md:py-10 xl:grid-cols-[1.35fr_1fr_1fr_0.8fr] xl:gap-10 xl:py-14"
            >
                <div class="max-w-[430px] md:col-span-3 xl:col-span-1 xl:max-w-[430px]">
                    <router-link to="/" class="mb-6 inline-flex xl:mb-10">
                        <img src="/images/white-logo.png" alt="Pixanta logo" class="h-[52px] w-auto xl:h-[60px]" />
                    </router-link>

                    <div class="space-y-2 font-simple text-[14px] leading-7 text-white/85 xl:space-y-3 xl:text-[16px] xl:leading-8">
                        <p>Phone: +86-371-88887233</p>
                        <p>Email: pixanta-led-displays.com</p>
                        <p>WhatsApp: +86 13418683708</p>

                        <div class="">
                            <p>Visit Us:</p>
                            <p>* Zhengzhou Office: Rm. D1, 1/F, No. 2 Energy and Environment Bldg., No. 11, Changchun
                                Rd., High and New Tech Zone, Zhengzhou, China</p>
                            <p>* Shenzhen Office: Xin Qiao Street, Bao'an District, Shenzhen, China</p>
                        </div>
                    </div>

                    <div class="mt-8 xl:mt-12">
                        <h3 class="mb-4 font-main text-[18px] uppercase leading-none text-white xl:mb-6 xl:text-[24px]">
                            Follow us on
                        </h3>
                        <div class="flex items-center gap-4">
                            <router-link v-for="item in socials" :key="item.name" :to="item.href"
                                class="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white text-black transition hover:translate-y-[-5px] hover:bg-primary"
                                :aria-label="item.name">

                                <!-- Вместо {{ item.icon }} используем тег img -->
                                <img :src="item.icon" :alt="item.name" class="h-6 w-6 object-contain" />

                            </router-link>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 class="mb-4 font-main text-[18px] uppercase leading-none text-white xl:mb-8 xl:text-[24px]">
                        Products
                    </h3>

                    <ul class="space-y-1 xl:space-y-2">
                        <li v-for="item in products" :key="item.label">
                            <router-link :to="item.to"
                                class="inline-flex items-start gap-2 font-simple text-[14px] leading-6 text-white/85 transition ease-out duration-500 hover:translate-x-[5px] xl:gap-3 xl:text-[16px] xl:leading-8">
                                <span class="mt-[2px] text-white/70">›</span>
                                <span class="hover:underline">{{ item.label }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="mb-4 font-main text-[18px] uppercase leading-none text-white xl:mb-8 xl:text-[24px]">
                        Solutions
                    </h3>

                    <ul class="space-y-1 xl:space-y-2">
                        <li v-for="item in solutions" :key="item.label">
                            <router-link :to="item.to"
                                class="inline-flex items-start gap-2 font-simple text-[14px] leading-6 text-white/85 transition ease-out duration-500 hover:translate-x-[5px] xl:gap-3 xl:text-[16px] xl:leading-8">
                                <span class="mt-[2px] text-white/70">›</span>
                                <span class="hover:underline">{{ item.label }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="mb-4 font-main text-[18px] uppercase leading-none text-white xl:mb-8 xl:text-[24px]">
                        About
                    </h3>

                    <ul class="space-y-1 xl:space-y-2">
                        <li v-for="item in aboutLinks" :key="item.label">
                            <router-link :to="item.to"
                                class="inline-flex items-start gap-2 font-simple text-[14px] leading-6 text-white/85 transition ease-out duration-500 hover:translate-x-[5px] xl:gap-3 xl:text-[16px] xl:leading-8">
                                <span class="mt-[2px] text-white/70">›</span>
                                <span class="hover:underline">{{ item.label }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Bottom -->
            <div class="border-t border-white/15 py-5 text-center">
                <p class="font-simple text-[15px] leading-7 text-white/75">
                    Copyright Notice © Pixanta Opto-Electrical Science & Technology Co., Ltd All Right Reserved and by
                    Legal Protection
                </p>
                <p class="mt-3 font-simple text-[14px] leading-6 text-white/55">
                    powered by
                    <a
                        href="https://ltm.studio"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-white/80 underline-offset-2 transition hover:text-primary hover:underline"
                    >
                        ltm.studio
                    </a>
                </p>
            </div>
        </div>
    </footer>
</template>