import type { MarketPage } from './types/content'

export const marketPages: Record<string, MarketPage> = {
  outdoor: {
    slug: 'outdoor',

    hero: {
      title: 'OUTDOOR SOLUTIONS',
      subtitle: 'Capture attention in any environment',
      mediaType: 'image',
      media: '/images/slides/slide1.webp',
    },

    intro: {
      title: 'OUTDOOR ',
      paragraphs: [
        'Pixanta’s Outdoor LED Solutions are engineered for staging and rental applications, delivering maximum reliability and performance for live events and outdoor environments. Designed with flexibility in mind, our LED systems support creative installations, quick deployment, and efficient servicing—ensuring seamless operation from setup to teardown.',
        'In live production, there is no room for failure. That’s why Pixanta prioritizes durability and stability in every LED solution we deliver. Whether it’s a large-scale outdoor festival or a high-impact indoor event, our displays are built to perform flawlessly and enhance the visual experience for every audience.',
        'With extensive industry experience, the Pixanta team collaborates closely with clients to understand specific project requirements. Our technical specialists provide tailored solutions that align with your event goals, ensuring your LED setup not only meets expectations but elevates the overall impact of your production.',
      ],
    },

    form: {
      title: 'CONTACT US FOR MORE DETAILS',
      description: 'Tell us about your project and get a solution.',
    },

    inspiring: {
      items: [
        {
          title: 'DIGITAL BILLBOARD',
          description: 'Large-scale outdoor advertising display.',
          image: '/images/slides/slide1.webp',
        },
        {
          title: 'MEDIA FACADE',
          description: 'LED facade for buildings.',
          image: '/images/slides/slide2.webp',
        },
      ],
    },

    cases: [
      {
        title: 'OUTDOOR MEDIA PROJECT',
        image: '/images/markets/outdoor/case-1.jpg',
        href: '/cases/outdoor-1',
      },
    ],

    products: {
      title: 'PRODUCT RANGE',
      description: 'Outdoor LED display products.',
      category: 'outdoor',
    },
  },

  rental: {
    slug: 'rental',
    hero: {
      title: 'RENTAL SOLUTIONS',
      mediaType: 'video',
      media: '/images/markets/rental/hero.jpg',
    },
    intro: {
      title: 'LED DISPLAY FOR EVENTS',
      paragraphs: ['Rental LED for events and concerts.'],
    },
    form: { title: 'CONTACT US' },
    inspiring: {  items: [] },
    cases: [],
    products: {
      title: 'PRODUCT RANGE',
      description: '',
      category: 'rental',
    },
  },

  indoor: {
    slug: 'indoor',
    hero: {
      title: 'INDOOR SOLUTIONS',
      mediaType: 'video',
      media: '/images/markets/indoor/hero.jpg',
    },
    intro: {
      title: 'INDOOR LED',
      paragraphs: ['High definition indoor displays.'],
    },
    form: { title: 'CONTACT US' },
    inspiring: {items: [] },
    cases: [],
    products: {
      title: 'PRODUCT RANGE',
      description: '',
      category: 'indoor',
    },
  },

  floor: {
    slug: 'floor',
    hero: {
      title: 'FLOOR SOLUTIONS',
      mediaType: 'video',
      media: '/images/markets/floor/hero.jpg',
    },
    intro: {
      title: 'FLOOR LED',
      paragraphs: ['Interactive LED floor.'],
    },
    form: { title: 'CONTACT US' },
    inspiring: {  items: [] },
    cases: [],
    products: {
      title: 'PRODUCT RANGE',
      description: '',
      category: 'floor',
    },
  },

  glass: {
    slug: 'glass',
    hero: {
      title: 'TRANSPARENT SOLUTIONS',
      mediaType: 'video',
      media: '/images/markets/glass/hero.jpg',
    },
    intro: {
      title: 'GLASS LED',
      paragraphs: ['Transparent LED displays.'],
    },
    form: { title: 'CONTACT US' },
    inspiring: { items: [] },
    cases: [],
    products: {
      title: 'PRODUCT RANGE',
      description: '',
      category: 'glass',
    },
  },
}