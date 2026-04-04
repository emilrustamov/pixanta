<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const stats = [
  { value: 14, suffix: '+', label: 'YEARS EXPERIENCE', img: "/images/about/expi.webp" },
  { value: 160, suffix: '+', label: 'COUNTRIES', img:"/images/about/countr.webp" },
  { value: 10000, suffix: '+', label: 'SQM MONTHLY PRODUCTION', img:"/images/about/produc.webp" },
  { value: 10000, suffix: '+', label: 'SUCCESSFUL CASES', img:"/images/about/success.webp" },
]

const items = [
  { title: 'Product', to: '/product', icon: '/images/about/icons/icon-a.png' },
  { title: 'Market', to: '/market', icon: '/images/about/icons/icon-b.png' },
  { title: 'Contact', to: '/contact',  icon: '/images/about/icons/icon-f.png' },
  { title: 'About us', to: '/about', icon: '/images/about/icons/icon-e.png' },
]


const router = useRouter();
const go = (path: string) => {
  router.push(path)
}

const numbers = ref(stats.map(() => 0))
const section = ref<HTMLElement | null>(null)

let started = false

function animate(i: number, end: number) {
  let start = 0
  const duration = 1500
  const stepTime = Math.max(Math.floor(duration / end), 10)

  const timer = setInterval(() => {
    start += Math.ceil(end / 60)

    if (start >= end) {
      numbers.value[i] = end
      clearInterval(timer)
    } else {
      numbers.value[i] = start
    }
  }, stepTime)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !started) {
        started = true
        stats.forEach((item, i) => animate(i, item.value))
      }
    },
    { threshold: 0.3 }
  )

  if (section.value) observer.observe(section.value)
})
</script>

<template>
   <section class="py-12 lg:py-16">
    <div class="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-16">
      
      <!-- Заголовок -->
      <h2>
        PIXANTA
      </h2>

      <!-- Линия -->
      <div class="mx-auto mt-3 h-[3px] w-[120px] bg-primary"></div>

      <!-- Текст -->
      <div class="mt-8 space-y-6 text-left font-simple font-light text-text text-[20px]">
        
        <p>
          Pixanta, founded in 2012, is a national high-tech enterprise specializing in the research,
          development, production, and sales of LED display solutions.
        </p>

        <p>
          Headquartered in Shenzhen, Guangdong Province, the company operates major production bases
          in Shenzhen, Huizhou, and Zhongshan. Pixanta has obtained international certifications
          including ISO9001, ISO14001, 3C, and CE, and holds multiple utility model and invention patents.
        </p>

        <p>
          By integrating its production chain and leveraging large-scale manufacturing, Pixanta ensures
          stable quality and high production efficiency.
        </p>

        <p>
          Our products are widely used in outdoor advertising, commercial real estate, sports venues,
          public infrastructure, transportation systems, and smart city projects worldwide.
        </p>

      </div>

      <!-- Изображение -->
      <div class="mt-12">
        <img
          src="/images/about/about-w.jpg"
          alt="Pixanta production"
          class="mx-auto w-full rounded-[6px] shadow-md"
        />
      </div>

    </div>
  </section>

  <section class="pb-12 lg:pb-16">
    <div class="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-16 text-text font-simple text-[20px]">

      <h3 class="font-simple text-[22px] md:text-[24px] text-left mb-8">
        Why Choose Pixanta As Your Partner?
      </h3>

      <p class="font-light">
        Choosing <span class="font-medium">Pixanta</span> as your LED display partner can be a strategic and beneficial decision for several reasons.
      </p>

      <div class="mt-8 space-y-8">

        <div>
          <h3 class="font-medium mb-5">1. Expertise and Experience</h3>
          <ul class="list-disc pl-6 font-light">
            <li>
              <span class="font-medium">Industry Knowledge:</span>
              With strong experience in LED display technology, Pixanta delivers reliable and innovative solutions.
            </li>
            <li>
              <span class="font-medium">Technical Expertise:</span>
              Advanced LED display systems tailored for diverse applications.
            </li>
          </ul>
        </div>

        <div>
            <h3 class="font-medium mb-5">2. Quality and Reliability</h3>
          <ul class="list-disc pl-6 font-light">
            <li>
              <span class="font-medium">High-Quality Products:</span>
              Modern technologies and premium components ensure durability and performance.
            </li>
            <li>
              <span class="font-medium">Strict Quality Control:</span>
              Full-cycle testing guarantees compliance with international standards.
            </li>
          </ul>
        </div>

        <div>
            <h3 class="font-medium mb-5">3. Customization</h3>
          <ul class="list-disc pl-6 font-light">
            <li>
              <span class="font-medium">Tailored Solutions:</span>
              Custom LED displays adapted to project requirements.
            </li>
            <li>
              <span class="font-medium">Flexible Applications:</span>
              Suitable for indoor, outdoor, curved, and complex installations.
            </li>
          </ul>
        </div>

        <div>
            <h3 class="font-medium mb-5">4. Comprehensive Services</h3>
          <ul class="list-disc pl-6 font-light">
            <li>
              <span class="font-medium">End-to-End Support:</span>
              From consultation to installation and after-sales service.
            </li>
            <li>
              <span class="font-medium">Technical Support:</span>
              Professional team providing ongoing assistance.
            </li>
          </ul>
        </div>

        <div>
            <h3 class="font-medium mb-5">5. Competitive Pricing</h3>
          <ul class="list-disc pl-6 font-light">
            <li>
              <span class="font-medium">Cost-Effective Solutions:</span>
              Balanced pricing with high quality and performance.
            </li>
          </ul>
        </div>

        <div>
            <h3 class="font-medium mb-5">6. Global Reach and Reputation</h3>
          <ul class="list-disc pl-6 font-light">
            <li>
              <span class="font-medium">Worldwide Projects:</span>
              Delivered solutions across multiple industries globally.
            </li>
            <li>
              <span class="font-medium">Trusted Partner:</span>
              Strong reputation and long-term partnerships.
            </li>
          </ul>
        </div>

      </div>

    </div>
  </section>

  <section
    ref="section" class="relative py-16 md:py-20 bg-cover bg-center" style="background-image: url('/images/about/about-numbers.webp')"
  >

    <div class="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 font-main">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">

        <div v-for="(item, i) in stats" :key="i">
          <!-- circle -->
          <div class="mx-auto mb-6 w-[80px] h-[80px] border border-white rounded-full flex items-center justify-center ">
            <img
              v-if="item.img"
              :src="item.img"
              alt="statistic icon"
              class="w-[80px] h-[80px] object-contain"
            />
          </div>

          <!-- number -->
          <div class="num-st text-[40px] md:text-[56px] font-bold leading-none">
            {{ numbers[i] }}{{ item.suffix }}
          </div>

          <!-- label -->
          <div class="labl-st mt-3 text-[16px] md:text-[18px] tracking-wide">
            {{ item.label }}
          </div>
        </div>

      </div>
    </div>
  </section>

  <section class="pt-16 md:pt-20 bg-white bg-[#f5f5f5]">
    <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 text-center">

      <!-- Title -->
      <h2>
        Global Reach
      </h2>

      <!-- Text -->
      <p class="mt-4 font-simple text-text text-[20px] font-light">
        <span class="text-primary font-semibold font-main text-[24px]">14 Years</span>
        In The LED Display Business, Business In More Than
        <span class="text-primary font-semibold font-main text-[24px]">16</span>
        Countries
        <span class="text-primary font-semibold font-main text-[24px]">10,000+</span>
        Successful Cases.
      </p>

      <!-- Map -->
      <div class="mt-12">
        <img
          src="/images/about/map-2.png"
          alt="Global map"
          class="w-full h-auto object-contain"
        />
      </div>

    </div>
  </section>

  <section class="py-16 md:py-20 bg-white">
    <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 text-center">

      <!-- Title -->
      <h2>
        Mission
      </h2>

      <!-- Text -->
      <p class="mt-4 font-simple text-text text-[20px] max-w-[900px] mx-auto font-light">
        Our principal mission is to provide a complete solution to the digital display marketplace 
        by offering superior products, ethical business practices, and total project satisfaction, 
        all at consistent and competitive pricing.
      </p>

      <!-- Cards -->
      <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">

        <div
          v-for="(item, index) in items"
          :key="index"
          @click="go(item.to)"
          class="group cursor-pointer text-center transition duration-300 hover:-translate-y-2"
        >
          <!-- card -->
          <div class="card h-max-[280px] bg-[#5B5B5B] aspect-square flex items-center justify-center relative overflow-hidden transition duration-300">
            
            <!-- hover overlay -->
            <div class="absolute inset-0 bg-transparent group-hover:bg-black/10 transition duration-300"></div>

            <!-- icon -->
            <img
              :src="item.icon"
              :alt="item.title"
              class="h-auto w-full max-h-[min(100%,280px)] max-w-[min(100%,316px)] object-contain transition duration-300 group-hover:scale-110 sm:max-h-[min(100%,316px)]"
            />
          </div>

          <!-- title -->
          <h3 class="f40 mt-6 font-main text-primary uppercase tracking-wide transition">
            {{ item.title }}
          </h3>
        </div>

      </div>

    </div>
  </section>

</template>

<style scoped>
.num-st{
  font-size: clamp(1.375rem, 0.956rem + 1.76vw, 2.5rem);
}
.labl-st{
  font-size: clamp(0.875rem, 0.828rem + 0.2vw, 1rem);
}
.f40{font-size: clamp(1.375rem, 0.956rem + 1.76vw, 2.5rem);}

</style>