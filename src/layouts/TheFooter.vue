<script setup lang="ts">
const products = [
    { label: 'Indoor COB Fine Pitch', to: '/products' },
    { label: 'SMD Indoor Fixed', to: '/products' },
    { label: 'All in one', to: '/products' },
    { label: 'Outdoor Fixed', to: '/products' },
    { label: 'Staging & Rentals', to: '/products' },
    { label: 'Mobile Billboard', to: '/products' },
    { label: 'Sports', to: '/products' },
    { label: 'Creative', to: '/products' },
]

const solutions = [
    { label: 'DOOH', to: '/markets' },
    { label: 'Rentals & Staging', to: '/markets' },
    { label: 'Retail & Hospitality', to: '/markets' },
    { label: 'XR & Virtual Production', to: '/markets' },
    { label: 'Broadcast Studio', to: '/markets' },
    { label: 'Command & Control Room', to: '/markets' },
    { label: 'Higher Education', to: '/markets' },
    { label: 'Sports & Arenas', to: '/markets' },
    { label: 'Commercial Corporate', to: '/markets' },
    { label: 'Creative LED Solution', to: '/markets' },
]

const aboutLinks = [
    { label: 'About', to: '/about-us' },
    { label: 'Blog', to: '/about-us' },
    { label: 'Contact', to: '/contact' },
    { label: 'Privacy Policy', to: '/about-us' },
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
        <div class="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-20">
            <div class="py-6 grid gap-12 md:py-14 md:grid-cols-2 xl:grid-cols-[1.35fr_1fr_1fr_0.8fr]">
                <!-- Left -->
                <div class="max-w-[430px]">
                    <router-link to="/" class="mb-10 inline-flex">
                        <img src="/images/white-logo.png" alt="Pixanta logo" class="h-[60px] w-auto" />
                    </router-link>

                    <div class="space-y-3 font-simple text-[16px] leading-8 text-white/85">
                        <p>Phone: +86-371-88887233</p>
                        <p>Email: sales@canbest-led.com</p>
                        <p>WhatsApp: +86 13418683708</p>

                        <div class="">
                            <p>Visit Us:</p>
                            <p>* Zhengzhou Office: Rm. D1, 1/F, No. 2 Energy and Environment Bldg., No. 11, Changchun
                                Rd., High and New Tech Zone, Zhengzhou, China</p>
                            <p>* Shenzhen Office: Xin Qiao Street, Bao'an District, Shenzhen, China</p>
                        </div>
                    </div>

                    <div class="mt-12">
                        <h3 class="mb-6 font-main text-[24px] uppercase leading-none text-white">
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

                <!-- Products -->
                <div class="hidden md:block">
                    <h3 class="mb-8 font-main text-[24px] uppercase leading-none text-white">
                        Products
                    </h3>

                    <ul class="space-y-2">
                        <li v-for="item in products" :key="item.label">
                            <router-link :to="item.to"
                                class="inline-flex items-start gap-3 font-simple text-[16px] leading-8 text-white/85 transition ease-out duration-500 hover:translate-x-[5px]">
                                <span class="mt-[2px] text-white/70">›</span>
                                <span class="hover:underline">{{ item.label }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>

                <!-- Solutions -->
                <div class="hidden md:block">
                    <h3 class="mb-8 font-main text-[24px] uppercase leading-none text-white">
                        Solutions
                    </h3>

                    <ul class="space-y-2">
                        <li v-for="item in solutions" :key="item.label">
                            <router-link :to="item.to"
                                class="inline-flex items-start gap-3 font-simple text-[16px] leading-8 text-white/85 transition ease-out duration-500 hover:translate-x-[5px]">
                                <span class="mt-[2px] text-white/70">›</span>
                                <span class="hover:underline">{{ item.label }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>

                <!-- About -->
                <div class="hidden md:block">
                    <h3 class="mb-8 font-main text-[24px] uppercase leading-none text-white">
                        About
                    </h3>

                    <ul class="space-y-2">
                        <li v-for="item in aboutLinks" :key="item.label">
                            <router-link :to="item.to"
                                class="inline-flex items-start gap-3 font-simple text-[16px] leading-8 text-white/85 transition ease-out duration-500 hover:translate-x-[5px]">
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
            </div>
        </div>
    </footer>
</template>