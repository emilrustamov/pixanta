<script setup lang="ts">
import PageLocation from '../components/PageLocation.vue'
</script>

<template>
  <section class="relative">
    <div
      class="banner relative w-full bg-cover bg-center"
      :style="{ backgroundImage: 'url(/images/contact/contact-banner.webp)' }"
    >
      <div class="absolute inset-0 flex items-center justify-center text-white"></div>
    </div>
  </section>

  <PageLocation
    :items="[
      { label: 'Home', to: '/' },
      { label: 'Privacy Policy' },
    ]"
  />

  <section class="w-full py-12 md:py-16 lg:py-20">
    <div class="mx-auto w-full max-w-[900px] px-4 sm:px-6 lg:px-10 xl:px-16">
      <h1 class="!text-start font-main text-[1.75rem] font-medium uppercase tracking-wide text-third-grey sm:text-[2rem]">
        Privacy Policy
      </h1>
      <p class="mt-4 font-simple text-[15px] text-location-grey">
        Last updated: April 4, 2026
      </p>

      <div class="mt-10 space-y-8 font-simple text-[18px] font-light leading-relaxed text-text">
        <p>
          Pixanta Opto-Electrical Science &amp; Technology Co., Ltd (&quot;Pixanta&quot;, &quot;we&quot;, &quot;us&quot;)
          respects your privacy. This policy describes how we collect, use, and protect information when you use our
          website and contact us about our products and services.
        </p>

        <div>
          <h2 class="mb-3 font-main text-[1.125rem] font-medium uppercase tracking-wide text-third-grey">
            Information we collect
          </h2>
          <p>
            We may collect information you provide directly, such as your name, company name, email address, phone number,
            and message content when you submit a contact or inquiry form. We may also collect technical data such as IP
            address, browser type, device type, and pages visited, through standard server logs or similar technologies.
          </p>
        </div>

        <div>
          <h2 class="mb-3 font-main text-[1.125rem] font-medium uppercase tracking-wide text-third-grey">
            How we use your information
          </h2>
          <p>
            We use this information to respond to your requests, provide quotations and support, improve our website and
            offerings, comply with legal obligations, and communicate with you about products or services you have
            asked about. We do not sell your personal data to third parties.
          </p>
        </div>

        <div>
          <h2 class="mb-3 font-main text-[1.125rem] font-medium uppercase tracking-wide text-third-grey">
            Cookies and similar technologies
          </h2>
          <p>
            Our site may use cookies or similar tools to ensure basic functionality, remember preferences, or understand
            how visitors use the site. You can control cookies through your browser settings; disabling them may affect
            some features.
          </p>
        </div>

        <div>
          <h2 class="mb-3 font-main text-[1.125rem] font-medium uppercase tracking-wide text-third-grey">
            Data retention and security
          </h2>
          <p>
            We retain information only as long as needed for the purposes above or as required by law. We apply
            reasonable technical and organizational measures to protect personal data against unauthorized access, loss,
            or misuse.
          </p>
        </div>

        <div>
          <h2 class="mb-3 font-main text-[1.125rem] font-medium uppercase tracking-wide text-third-grey">
            Your rights
          </h2>
          <p>
            Depending on your location, you may have rights to access, correct, delete, or restrict processing of your
            personal data, or to object to certain processing. To exercise these rights, contact us using the details on
            our Contact page.
          </p>
        </div>

        <div>
          <h2 class="mb-3 font-main text-[1.125rem] font-medium uppercase tracking-wide text-third-grey">
            Changes to this policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top will
            change when we do. Continued use of the site after changes constitutes acceptance of the updated policy.
          </p>
        </div>

        <div>
          <h2 class="mb-3 font-main text-[1.125rem] font-medium uppercase tracking-wide text-third-grey">
            Contact
          </h2>
          <p>
            For privacy-related questions, please reach us via the
            <router-link to="/contact" class="text-primary underline-offset-2 hover:underline">Contact</router-link>
            page or the contact details shown in the website footer.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner {
  height: clamp(11.25rem, 6.084rem + 22.04vw, 28.125rem);
}
</style>
