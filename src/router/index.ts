import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import OneMarket from '../pages/oneMarket.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Markets from '../pages/Markets.vue'
import { marketPages } from '../data/maketsPage'
import Products from '../pages/Products.vue'
import PrivacyPolicy from '../pages/PrivacyPolicy.vue'
import OneProduct from '../pages/OneProduct.vue'

const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/about-us', component: About, meta: { title: 'About Us' } },
  { path: '/privacy-policy', component: PrivacyPolicy, meta: { title: 'Privacy Policy' } },
  { path: '/contact', component: Contact, meta: { title: 'Contact' } },
  // 🔥 ГЛАВНОЕ
  { path: '/markets/:slug', name: 'market', component: OneMarket },
  { path: '/markets', name: 'markets', component: Markets},
  { path: '/products', name: 'products', component: Products, meta: { forceTopOnHash: true } },
  { path: '/products/:slug', name: 'product', component: OneProduct },
  // ❗ fallback
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
//   scrollBehavior(_to, _from, savedPosition) {
//     if (savedPosition) return savedPosition
//     return { top: 0 }
//   },
// })
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.meta.forceTopOnHash) {
      return { top: 0 }
    }
  
    // обычный hash (для других страниц)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  
    return { top: 0 }
  }
})

/**
 * 🔥 динамический title из твоего marketPages.ts
 */
router.afterEach((to) => {
  const defaultTitle = 'Pixanta'

  if (to.name === 'market' && typeof to.params.slug === 'string') {
    const page = marketPages[to.params.slug]

    if (page?.hero?.title) {
      document.title = `${page.hero.title} | ${defaultTitle}`
      return
    }
  }

  document.title = to.meta?.title
    ? `${to.meta.title} | ${defaultTitle}`
    : defaultTitle
})

export default router

