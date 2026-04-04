export type MenuSeriesItem = {
    title: string
    href: string
    image: string
    description: string
    specs?: string[]
  }
  
  export type MenuCategory = {
    title: string
    href: string
    previewImage?: string
    previewDescription?: string
    series?: MenuSeriesItem[]
  }
  
  export type MenuItem = {
    key: 'products' | 'markets' | 'contacts' | 'about-us'
    title: string
    href: string
    type: 'products' | 'default'
    categories: MenuCategory[]
  }
  
  export const menuData: MenuItem[] = [
    {
      key: 'products',
      title: 'Products',
      href: '/products',
      type: 'products',
      categories: [
        {
          title: 'Outdoor',
          href: '/products/outdoor',
          previewDescription: 'Outdoor LED display solutions for exterior advertising, stadium perimeter and media facade applications.',
          series: [
            {
              title: 'BX Series',
              href: '/products/outdoor/bx',
              image: '/images/menu/products/outdoor-bx.jpg',
              description: 'With modular front access, maintenance becomes faster and easier — no need for rear space or complex tools. The display adopts a standard 1000×1000mm cabinet, available in pure black or pure white, ensuring a clean and modern look for any installation.',
              specs: ['P3.9', 'P4.8', 'P6.25', 'P10.4'],
            },
            {
              title: 'SPL Series',
              href: '/products/outdoor/spl',
              image: '/images/menu/products/outdoor-spl.jpg',
              description: 'Stadium perimeter LED display designed for sports environments and player protection.',
              specs: ['P6', 'P10'],
            },
            {
              title: 'MFM Series',
              href: '/products/outdoor/mfm',
              image: '/images/menu/products/outdoor-mfm.jpg',
              description: 'Media facade mesh with high transparency and flexible configuration for large-scale facade visuals.',
              specs: ['P15.625', 'P31.25', 'P42', 'P50', 'P62.5', 'P88', 'P100'],
            },
          ],
        },
        {
          title: 'Rental',
          href: '/products/rental',
          previewDescription: 'Rental LED solutions for stage, event, curved and modular display configurations.',
          series: [
            {
              title: 'RTX Series',
              href: '/products/rental/rtx',
              image: '/images/menu/products/rental-rtx.jpg',
              description: 'Versatile indoor and outdoor rental LED display with front and rear maintenance.',
              specs: ['P2.6', 'P2.97', 'P3.91'],
            },
            {
              title: 'FTX Series',
              href: '/products/rental/ftx',
              image: '/images/menu/products/rental-ftx.jpg',
              description: 'Flexible rental LED display for curved, circular and custom stage configurations.',
              specs: ['P2.6', 'P2.97', 'P3.91'],
            },
          ],
        },
        {
          title: 'Indoor',
          href: '/products/indoor',
          previewDescription: 'Indoor LED cabinets, COB, GOB, transparent and flexible module solutions.',
          series: [
            {
              title: 'SLM Series',
              href: '/products/indoor/slm',
              image: '/images/menu/products/indoor-slm.jpg',
              description: 'Slim light modular cabinet with quick installation and frontal maintenance.',
              specs: ['P1.8', 'P2.0', 'P2.5'],
            },
            {
              title: 'HDC Series',
              href: '/products/indoor/hdc',
              image: '/images/menu/products/indoor-hdc.jpg',
              description: 'High definition COB LED display with integrated cabinet design and strong visual performance.',
              specs: ['P0.7', 'P0.9', 'P1.2', 'P1.5'],
            },
            {
              title: 'FLM Series',
              href: '/products/indoor/flm',
              image: '/images/menu/products/indoor-flm.jpg',
              description: 'Flexible LED module for curved surfaces, creative forms and custom installations.',
              specs: ['P0.9', 'P1.2', 'P1.56', 'P1.8', 'P2', 'P2.5', 'P3', 'P4'],
            },
            {
              title: 'HDG Series',
              href: '/products/indoor/hdg',
              image: '/images/menu/products/indoor-hdg.jpg',
              description: 'High definition GOB LED display with durable protective surface and frontal service.',
              specs: ['P1.2', 'P1.5', 'P1.8', 'P2', 'P2.5'],
            },
            {
              title: 'LTD Series',
              href: '/products/indoor/ltd',
              image: '/images/menu/products/indoor-ltd.jpg',
              description: 'Louver transparent LED display for glass curtain walls and transparent media surfaces.',
              specs: ['P3.9', 'P8', 'P10', 'P16'],
            },
          ],
        },
        {
          title: 'Floor',
          href: '/products/floor',
          previewDescription: 'Interactive and heavy-duty LED floor display solutions.',
          series: [
            {
              title: 'LFD Series',
              href: '/products/floor/lfd',
              image: '/images/menu/products/floor-lfd.jpg',
              description: 'LED floor display with high load-bearing performance for stage, museum and venue use.',
              specs: ['P2.5', 'P2.6', 'P2.9', 'P3.9'],
            },
          ],
        },
        {
          title: 'Glass',
          href: '/products/glass',
          previewDescription: 'Glass LED display systems with transparency and architectural integration.',
          series: [
            {
              title: 'GLD Series',
              href: '/products/glass/gld',
              image: '/images/menu/products/glass-gld.jpg',
              description: 'Glass LED display solution for storefronts, facades and transparent building installations.',
              specs: ['P6', 'P8', 'P10', 'P16', 'P20', 'P25', 'P30', 'P40', 'P50', 'P60'],
            },
          ],
        },
      ],
    },
    {
      key: 'markets',
      title: 'Markets',
      href: '/markets',
      type: 'default',
      categories: [
        {
          title: 'Outdoor solutions',
          href: '/markets/outdoor',
          previewImage: '/images/markets/markets-outdoor.jpg',
          previewDescription: 'High-brightness LED displays for outdoor advertising, facades, stadiums and public spaces. Designed for durability, weather resistance and long-distance visibility.',
        },
        {
          title: 'Rental solutions',
          href: '/markets/rental',
          previewImage: '/images/markets/markets-rental.jpg',
          previewDescription: 'Modular LED systems for events, concerts and exhibitions. Fast installation, lightweight cabinets and flexible configurations for stage production.',
        },
        {
          title: 'Indoor solutions',
          href: '/markets/indoor',
          previewImage: '/images/markets/markets-indoor.jpg',
          previewDescription: 'High-definition LED displays for retail, corporate environments and control rooms. Seamless visuals with fine pixel pitch and stable performance.',
        },
        {
          title: 'Floor solutions',
          href: '/markets/floor',
          previewImage: '/images/markets/markets-floor.jpg',
          previewDescription: 'Interactive LED floor displays designed for heavy load and dynamic environments. Ideal for stages, exhibitions and immersive installations.',
        },
        {
          title: 'Transparent solutions',
          href: '/markets/glass',
          previewImage: '/images/markets/yyy.jpg',
          previewDescription: 'Transparent LED displays for storefronts and building facades. Maintain visibility while delivering high-impact visual content.',
        },
      ]
    },
    {
      key: 'about-us',
      title: 'About us',
      href: '/about-us',
      type: 'default',
      categories: [
        {
          title: 'Company Profile',
          href: '/about-us/company-profile',
          previewImage: '/images/menu/company-profile.jpg',
          previewDescription: 'Learn more about the company, production capabilities and global LED display solutions.',
        },
        {
          title: 'Blog',
          href: '/about-us/blog',
          previewImage: '/images/menu/blog.jpg',
          previewDescription: 'News, updates and articles about products, projects and the LED display market.',
        },
      ],
    },
    {
      key: 'contacts',
      title: 'Contact',
      href: '/contact',
      type: 'default',
      categories: [
        {
          title: 'Contact Us',
          href: '/contact',
          previewImage: '/images/contact/contact-banner.webp',
          previewDescription: 'Get in touch with our team for product consultation, quotations and project support.',
        },
      ],
    },
  ]