import type { ProductPage } from './types/content'

export const productPages: Record<string, ProductPage> = {
  'bx-series': {
    slug: 'bx-series',

    hero: {
      title: 'Bright Exterior series',
      subtitle: 'Bright Exterior',
      description:
        'DESIGN WHEN OFF. DISPLAY WHEN ON, A WALL THAT PERFORMS AND DECORATES',
      mediaType: 'image',
      media:"/images/products/bx-1.png"
    },

    about: {
      title: 'Bright Exterior series',
      subtitle: 'BX Series — High-Brightness Outdoor LED Display',
      paragraphs: [
        'Designed for demanding outdoor environments, the BX Series LED display combines high brightness, durability, and flexible installation capabilities. Engineered with a modular front-access structure, it enables fast and tool-free maintenance without requiring rear service space—making it ideal for complex installations and tight environments.',
        'Built on a standard 1000×1000 mm cabinet, the BX Series offers a clean and modern appearance with options in pure black or pure white finish. The lightweight yet robust aluminum structure ensures stability, efficient heat dissipation, and long-term reliability under continuous operation. With pixel pitches including P3.9, P4.8, P6.25, and P10.4, the display delivers clear, high-contrast visuals suitable for various viewing distances. Its high brightness level (≥5800–6000 nits) guarantees excellent visibility even under direct sunlight, making it perfect for outdoor advertising, stadiums, and public spaces.',
        'The BX Series features IP67 protection, providing strong resistance to water, dust, and harsh weather conditions. Combined with energy-efficient performance and low power consumption, it ensures stable operation in all climates. Supporting curved and creative configurations, the system adapts easily to architectural and large-scale media applications. Whether for billboards, facades, or stadium perimeters, the BX Series delivers powerful visual impact with reliability you can trust.',
      ],
    },

    media: {
      slides: [
        {
          type: 'image',
          src: '/images/products/bx-1.png',
        },
        {
          type: 'image',
          src: '/images/one-product/1-2.png',
        },
        {
          type: 'image',
          src: '/images/one-product/1-3.png',
          // poster: '/images/products/texture-led-series/video-poster.jpg',
        },
      ],
    },

    showcase: {
      image: '/images/product-banners/ab-1.jpg',
      alt: 'BX series',
    },

    features: {
      title: 'KEY FEATURES',
      items: [
        {
          title: 'FRONT MAINTENANCE DESIGN',
          description:
            'Tool-free front service allows faster maintenance in tight installation spaces.',
          image: '/images/features/1fea-1.png',
        },
        {
          title: 'IP67 WEATHER PROTECTION',
          description:
            'Strong dustproof and waterproof protection for reliable outdoor performance.',
          image: '/images/features/1fea-2.jpg',
        },
        {
          title: 'LIGHTWEIGHT ALUMINUM CABINET',
          description:
            'Slim and durable cabinet structure improves installation efficiency and stability.',
          image: '/images/features/1fea-3.png',
        },
        {
          title: 'CURVED & CREATIVE SUPPORT',
          description:
            'Supports flexible visual layouts for curved and custom outdoor display projects.',
          image: '/images/features/1fea-4.jpg',
        },
      ],
    },

    specifications: {
      title: 'Bright Exterior series SPECIFICATIONS',
      metrics: [
        {
          value: '3840HZ',
          label: 'REFRESH RATE',
        },
        {
          value: '5500-6000',
          label: 'BRIGHTNESS(CD/sqm)',
        },
        {
          value: '500*250',
          label: 'Module size(mm)',
        },
        {
          value: 'IP67',
          label: 'Protection',
        },
        {
          value: '100000',
          label: 'Product life',
        },
      ],
      groups: [
        {
          title: 'Bright Exterior series',
          left: [
            {
              label: 'PIXEL PITCH',
              value: '10.4mm',
            },
            {
              label: 'Operating temperature (°C)',
              value: '-20 ~ +50 °C',
            },
            {
              label: 'MATERIAL',
              value: 'Aluminum',
            },
            {
              label: 'CABINET Size (W×H×D/mm)',
              value: '1000×1000×70mm',
            },
            {
              label: 'BRIGHTNESS (CD/sqm)',
              value: '5000-6000',
            },
            {
              label: 'REFRESH RATE',
              value: '3840Hz',
            },
          ],
          right: [
            {
              label: 'OVERALL SIZE',
              value: '600×337.5mm (23.6×13.2 inches)',
            },
            {
              label: 'CABINET WEIGHT',
              value: '30kg/m²',
            },
            {
              label: 'Physical Density',
              value: '9216 dots/m²',
            },
            {
              label: 'Control Interface',
              value: 'RJ45, WIFI, 4G Network (Optional)',
            },
            {
              label: 'Control Interface',
              value: '20000:1',
            },
            {
              label: 'Module Resolution (dots)',
              value: '48*24',
            },
          ],
        },
      ],
    },
  },

  'spl-series': {
    slug: 'spl-series',

    hero: {
      title: 'STADIUM PERIMETER LED DISPLAY',
      subtitle: 'Engineered for reliable stadium visibility.',
      description:
        'Designed met UEFA criteria for stadium perimeter displays in the industry,the product fully meets the technical requirements for.',      
        mediaType: 'image',
      media:"/images/products/2.png"
    },

    about: {
      title: 'STADIUM PERIMETER LED DISPLAY',
      subtitle: 'SPL Series — Built for stadium performance and player safety.',
      paragraphs: [
        'The SPL Series is a professional stadium perimeter LED display designed to meet UEFA standards and the demanding requirements of modern sports venues. Built specifically for football fields and large arenas, it delivers reliable performance, high visibility, and enhanced safety for both players and audiences.With pixel pitch options of P6 and P10, the display provides clear and dynamic visuals for advertising and live event content. High brightness levels ensure excellent visibility under outdoor lighting conditions, while stable performance guarantees consistent image quality during continuous operation.',
        'The SPL Series features a dedicated player protection design, including a soft protection pad on top, a soft front mask, and an aluminum bottom structure. This combination reduces impact risk and ensures player safety during matches and high-speed collisions. Each module is fully waterproof with independent sealing, preventing moisture ingress and protecting internal components. The parallel module connection design ensures that even if one module fails, the rest of the display continues to operate without interruption.',
        'Constructed with a durable aluminum profile and IP65/IP65 protection rating, the display is built for long-term outdoor use. With a standard panel size of 1600×900×118 mm and lightweight structure, it is easy to install, transport, and maintain. The SPL Series combines safety, reliability, and visual performance, making it an ideal solution for stadium perimeter advertising and professional sports environments.',
      ],
    },

    media: {
      slides: [
        {
          type: 'image',
          src: '/images/products/2.png',
        },
        {
          type: 'image',
          src: '/images/one-product/2-2.png',
        },
        {
          type: 'image',
          src: '/images/one-product/2-3.png',
          // poster: '/images/products/texture-led-series/video-poster.jpg',
        },
      ],
    },

    showcase: {
      image: '/images/product-banners/ab-2.jpg',
      alt: 'spl series',
    },

    features: {
      title: 'KEY FEATURES',
      items: [
        {
          title: 'Player Protection Design',
          description:
            '*Top — Soft protection pad\n*Front — Soft mask\n*Bottom — Aluminum mat',
          image: '/images/features/2fea-1.png',
        },
        {
          title: 'Parallel Module Connection',
          description:
            'The modules are connected in parallel. Even if there is a fault, it will not affect the operation of other modules. ',
          image: '/images/features/2fea-2.jpg',
        },
        {
          title: 'Football Impact Test',
          description:
            'By simulating a live football impact test, the stability of the product is ensured.',
          image: '/images/features/2fea-3.jpg',
        },
        {
          title: 'Independent Waterproof Module',
          description:
            'The power box is sealed, and the modules are independently waterproofed Preventing moisture from entering and damaging components.',
          image: '/images/features/2fea-4.jpg',
        },
      ],
    }, 

    specifications: {
      title: 'STADIUM PERIMETER LED DISPLAY SPECIFICATIONS',
      metrics: [
        {
          value: '15000Hz',
          label: 'REFRESH RATE',
        },
        {
          value: '6000',
          label: 'BRIGHTNESS(CD/sqm)',
        },
        {
          value: '400*300',
          label: 'Module size(mm)',
        },
        {
          value: 'IP65',
          label: 'IP Rating',
        },
        {
          value: 'SPL-P6/P10 ',
          label: 'Pixel Pitch',
        },
      ],
      groups: [
        {
          title: 'STADIUM PERIMETER LED DISPLAY SERIES',
          left: [
            {
              label: 'PIXEL PITCH',
              value: '10mm',
            },
            {
              label: 'Operating temperature (°C)',
              value: '-20 ~ +50 °C',
            },
            {
              label: 'MATERIAL',
              value: 'Aluminum',
            },
            {
              label: 'Size',
              value: '1600×900×118mm',
            },
            {
              label: 'BRIGHTNESS (CD/sqm)',
              value: '6000',
            },
            {
              label: 'REFRESH RATE',
              value: '15000Hz',
            },
          ],
          right: [
            {
              label: 'Color gray scale',
              value: '65536 level',
            },
            {
              label: 'Panel WEIGHT',
              value: '52kg',
            },
            {
              label: 'Power Consumption (Max./Avg.)',
              value: '650/217 W/sq.m',
            },
            {
              label: 'Viewing angle (H/V)',
              value: '160/130 deg.',
            },
            {
              label: 'Module dimensions',
              value: '400×300',
            },
          ],
        },
      ],
    },
  },
  'mfm-series': {
    slug: 'mfm-series',

    hero: {
      title: 'MEDIA FACADE MESH series',
      subtitle: 'MEDIA FACADE MESH',
      description:
        'A premium solution for DJs, bands, clubs, and dynamic stage visuals.',
      mediaType: 'image',
      media:"/images/products/3.png"
    },

    about: {
      title: 'MEDIA FACADE MESH series',
      subtitle: 'Flexible, transparent LED mesh for large-scale visual installations.',
      paragraphs: [
        'MFM Media Facade Mesh is a lightweight LED mesh light curtain designed for creating synchronized visual shows. It is suitable for mobile DJs, bands, clubs, and stage backdrops, providing a practical solution for both indoor and outdoor use. The system can be used for lighting effects as well as streaming media, making it versatile for festivals, events, and building facade displays.',
        'The flexible mesh structure supports various shapes, including curves, arches, and custom forms, allowing adaptation to different installation requirements. High transparency enables light and visual effects to pass through the screen, creating clear and dynamic visuals without blocking the background. The product features tool-free connections, allowing quick setup and easy removal, which is especially important for large-scale installations. Waterproof connectors ensure stable operation in outdoor environments. The system is also designed for fast installation and reliable performance across different use cases.',
        'MFM Media Facade Mesh offers a wide pixel pitch range from P15.625 to P100, with brightness levels up to 38,400 nits and a refresh rate of 3840Hz. It provides a viewing angle of 140° and supports long-term operation with a service life of over 80,000 hours. The display is protected with IP67 rating and uses an outdoor PC housing material, making it suitable for demanding environments.',
      ],
    },

    media: {
      slides: [
        {
          type: 'image',
          src: '/images/products/3.png',
        },
        {
          type: 'image',
          src: '/images/one-product/3-2.jpg',
        },
        {
          type: 'image',
          src: '/images/one-product/3-3.jpg',
          // poster: '/images/products/texture-led-series/video-poster.jpg',
        },
      ],
    },

    showcase: {
      image: '/images/product-banners/ab-3.jpg',
      alt: 'mfm series',
    },

    features: {
      title: 'KEY FEATURES',
      items: [
        {
          title: 'Flexible DESIGN',
          description:
            'The mesh flexible design supports various shapes, including curves, arches, and custom forms, making it suitable for creative and large-scale installations.',
          image: '/images/features/3fea-1.jpg',
        },
        {
          title: 'HIGH TRANSPARENCY',
          description:
            'High transparency allows light and visual effects to pass through the screen, creating dynamic visuals while maintaining the openness of the structure.',
          image: '/images/features/3fea-2.jpg',
        },
        {
          title: 'VERSATILE',
          description:
            'It can be used for stage backdrops, festival and event light shows, outdoor concert installations, streaming media, and building facade displays.',
          image: '/images/features/3fea-3.jpg',
        },
        {
          title: 'WATERPROOF CONNECTORS',
          description:
            'Waterproof connectors provide reliable outdoor performance and support stable operation in demanding environments and large-scale installations.',
          image: '/images/features/3fea-4.jpg',
        },
      ],
    },

    specifications: {
      title: 'MEDIA FACADE MESH SPECIFICATIONS',
      metrics: [
        {
          value: '3840HZ',
          label: 'REFRESH RATE',
        },
        {
          value: '7200cd/m²',
          label: 'SCREEN BRIGHTNESS',
        },
        {
          value: '1:1800',
          label: 'Contrast',
        },
        {
          value: 'IP67',
          label: 'Protection',
        },
        {
          value: '+80000H',
          label: 'Service  life',
        },
      ],
      groups: [
        {
          title: 'MEDIA FACADE MESH series',
          left: [
            {
              label: 'PIXEL PITCH',
              value: '15.625mm',
            },
            {
              label: 'Pixel density per SQM',
              value: '4096',
            },
            {
              label: 'Vertical viewing angle',
              value: '140°',
            },
            {
              label: 'Drive IC characteristics',
              value: 'Dula backup/dual frequency',
            },
            {
              label: 'Color level',
              value: '16bits/65536 levels',
            },
            {
              label: 'Product weight',
              value: '7.2kg/m²',
            },
          ],
          right: [
            {
              label: 'Power supply voltage',
              value: 'DC 5/12V',
            },
            {
              label: 'Power management',
              value: 'Remote 4.0CV',
            },
            {
              label: 'Housing material',
              value: 'Outdoor PC',
            },
            {
              label: 'Housing Color',
              value: 'Black/Clear',
            },
            {
              label: 'Maximum power',
              value: '445W/m²',
            },
            {
              label: 'Average power',
              value: '175W/m²',
            },
          ],
        },
      ],
    },
  },

  'rtx-series': {
    slug: 'rtx-series',

    hero: {
      title: 'RENTAL TECH EXCELLENCE series',
      subtitle: 'RENTAL TECH EXCELLENCE',
      description:
        'The RTX Series from Pixanta is designed to meet the diverse demands of indoor and outdoor rental applications.',
      mediaType: 'image',
      media:"/images/products/4.png"
    },

    about: {
      title: 'RENTAL TECH EXCELLENCE series',
      subtitle: 'Versatile rental LED solution for indoor and outdoor applications.',
      paragraphs: [
        'The RTX Series from Pixanta is designed to meet the diverse demands of indoor and outdoor rental applications. It’s a high-value, cost-eﬀective solution that combines versatility, durability, and precision engineering — making it one of our most popular and widely used series worldwide.',
        'Built with soft connection design, the RTX Series ensures seamless and stable signal and power transmission between cabinets, while providing ﬂexibility for easy assembly and disassembly. Both front and rear maintenance options are available, oﬀering convenience and eﬃciency in various installation environments.',
        'The RTX Series also supports ±5° arc locks, allowing creative curved screen setups to meet diﬀerent stage or display design needs. With lightweight yet robust die-cast aluminum cabinets, this series ensures excellent heat dissipation, high strength, and easy handling — perfect for frequent transport and installation in rental operations. As Pixanta’s best-selling rental cabinet, the RTX Series is compatible with almost all common rental LED display modules, delivering outstanding performance, stable operation, and exceptional visual experience at an aﬀordable cost',
      ],
    },

    media: {
      slides: [
        {
          type: 'image',
          src: '/images/products/4.png',
        },
        {
          type: 'image',
          src: '/images/one-product/4-2.png',
        },
        {
          type: 'image',
          src: '/images/one-product/4-3.png',
          // poster: '/images/products/texture-led-series/video-poster.jpg',
        },
      ],
    },

    showcase: {
      image: '/images/product-banners/ab-4.jpg',
      alt: 'BX series',
    },

    features: {
      title: 'KEY FEATURES',
      items: [
        {
          title: 'FRONT & REAR MAINTENANCE',
          description:
            'Supports both front and rear maintenance access, allowing quick service, easy assembly, and efficient disassembly in various installation environments.',
          image: '/images/features/4fea-4.png',
        },
        {
          title: 'HIGH PROTECTION LEVEL (IP65)',
          description:
            'IP65-rated protection ensures resistance to water, dust, and outdoor conditions, providing stable performance in both indoor and outdoor rental applications.',
          image: '/images/features/4fea-2.png',
        },
        {
          title: 'CUSTOM CURVATURE AVAILABLE',
          description:
            'Supports creative curved installations, enabling flexible screen configurations for stage design and 3D display projects.',
          image: '/images/features/4fea-3.jpg',
        },
        {
          title: 'OPTIONAL ±5° ARC LOCK',
          description:
            'Optional ±5° arc lock system allows precise angle adjustments for building curved LED screens suitable for diverse rental scenarios.',
          image: '/images/features/4fea-1.jpg',
        }
      ],
    },

    specifications: {
      title: 'RENTAL TECH EXCELLENCE series SPECIFICATIONS',
      metrics: [
        {
          value: '3840~7680Hz',
          label: 'REFRESH RATE',
        },
        {
          value: '>600~5000',
          label: 'BRIGHTNESS',
        },
        {
          value: '500*500*70mm',
          label: 'CABINET SIZE',
        },
        {
          value: 'IP65',
          label: 'IP Protection',
        },
        {
          value: '100000',
          label: 'PRODUCT LIFE',
        },
      ],
      groups: [
        {
          title: 'RTX260',
          left: [
            {
              label: 'PIXEL PITCH (mm)',
              value: '2.604',
            },
            {
              label: 'REFRESH RATE (Hz)',
              value: '3840~7680',
            },
            {
              label: 'BRIGHTNESS (CD/sqm)',
              value: '>600~5000',
            },
            {
              label: 'GRAY SCALE (bit)',
              value: '16',
            },
            {
              label: 'CABINET SIZE (W×H×D/mm)',
              value: '500*500*70 / 500*1000*70',
            },
            {
              label: 'CABINET RESOLUTION',
              value: '192*192 / 192*384',
            },
          ],
          right: [
            {
              label: 'CABINET WEIGHT (kg)',
              value: '7 / 13.5',
            },
            {
              label: 'VIEWING ANGLE (H/V)',
              value: '160°/160°',
            },
            {
              label: 'MAX./AVG POWER CONSUMPTION (W/m2)',
              value: '800/320',
            },
            {
              label: 'AC INPUT VOLTAGE (V)',
              value: '110-240±10%',
            },
            {
              label: 'AC INPUT FREQUENCY (Hz)',
              value: '50/60',
            },
            {
              label: 'OPERATING TEMPERATURE (°C)',
              value: '-20~45',
            },
            {
              label: 'OPERATING HUMIDITY (RH)',
              value: '10%~90% No condensation',
            },
            {
              label: 'PRODUCT PROTECTION LEVEL (Front/Rear)',
              value: 'IP65',
            },
            {
              label: 'PRODUCT LIFE (hrs)',
              value: '100000',
            },
          ],
        },
      ],
    },
  
},

'ftx-series': {
  slug: 'ftx-series',

  hero: {
    title: 'FLEX TECH EXCELLENCE series',
    subtitle: 'FLEX TECH EXCELLENCE',
    description:
      'The FTX Series is our next-generation ﬂexible rental LED display',
    mediaType: 'image',
    media:"/images/products/5.png"
  },

  about: {
    title: 'FLEX TECH EXCELLENCE series',
    subtitle: 'FTX Series — INDOOR & OUTDOOR COMPATIBILITY',
    paragraphs: [
      'The FTX Series is our next-generation ﬂexible rental LED display, engineered for maximum creativity and adaptability. Designed to seamlessly integrate with our RTX Series, the FTX Series enables unique curved, circular, and irregular screen conﬁgurations — turning bold ideas into stunning visual reality.',
      'With a compact 500×500×91mm cabinet and a lightweight 7kg design, the FTX Series combines ﬂexibility with strength. Each cabinet supports up to ±45° curvature, allowing 8 cabinets to form a complete circle — perfect for immersive stage designs, creative exhibitions, and eye-catching installations.',
      'Built for both indoor and outdoor environments, this series oﬀers reliable performance under any condition. The die-cast aluminum frame ensures precise alignment, easy assembly, and superior heat dissipation, while its soft connection system maintains stable power and signal transmission across complex setups. Whether used alone or combined with the RTX Series, the FTX Series empowers designers and rental professionals to explore new possibilities in LED display creativity — without compromising durability or ease of operation.',
    ],
  },

  media: {
    slides: [
      {
        type: 'image',
        src: '/images/products/5.png',
      },
      {
        type: 'image',
        src: '/images/one-product/5-2.png',
      },
      {
        type: 'image',
        src: '/images/one-product/5-3.png',
        // poster: '/images/products/texture-led-series/video-poster.jpg',
      },
    ],
  },

  showcase: {
    image: '/images/product-banners/ab-5.jpg',
    alt: 'FTXseries',
  },

  features: {
    title: 'KEY FEATURES',
    items: [
      {
        title: 'ULTRA-FLEXIBLE CURVATURE',
        description:
          'Supports up to ±45° bending, allowing circular and curved screen configurations for creative installations.',
        image: '/images/features/5fea-2.png',
      },
      {
        title: 'INDOOR & OUTDOOR COMPATIBILITY',
        description:
          'One screen solution suitable for both indoor and outdoor environments with stable performance.',
        image: '/images/inspir/out-1.jpg',
      },
      {
        title: 'SOFT CONNECTION SYSTEM',
        description:
          'Ensures stable and secure signal and power transmission across complex display setups.',
        image: '/images/features/5fea-1.png',
      },
      {
        title: 'LIGHTWEIGHT DESIGN',
        description:
          'Only 7kg per cabinet with compact structure for easy installation, transport, and handling.',
        image: '/images/products/5.png',
      },
    ],
  },

  specifications: {
    title: 'FLEX TECH EXCELLENCE series SPECIFICATIONS',
    metrics: [
      {
        value: '>3840Hz',
        label: 'REFRESH RATE',
      },
      {
        value: '800–3500',
        label: 'BRIGHTNESS',
      },
      {
        value: '500×500×91',
        label: 'CABINET SIZE',
      },
      {
        value: 'IP65/IP65',
        label: 'PROTECTION',
      },
      {
        value: '100000',
        label: 'PRODUCT LIFE',
      },
    ],
    groups: [
      {
        title: 'FTX Series',
        left: [
          {
            label: 'PIXEL PITCH',
            value: '2.604mm',
          },
          {
            label: 'REFRESH RATE',
            value: '>3840Hz',
          },
          {
            label: 'GRAY SCALE',
            value: '16 bit',
          },
          {
            label: 'CABINET SIZE (WxHxD/mm)',
            value: '500×500×91',
          },
          {
            label: 'CABINET WEIGHT',
            value: '7kg',
          },
          {
            label: 'IP RATING',
            value: 'IP65/IP65',
          },
        ],
        right: [
          {
            label: 'VIEWING ANGLE (H/V)',
            value: '160° / 160°',
          },
          {
            label: 'AC INPUT VOLTAGE',
            value: '110–240±10%',
          },
          {
            label: 'AC INPUT FREQUENCY',
            value: '50/60Hz',
          },
          {
            label: 'OPERATING TEMPERATURE',
            value: '-20 ~ 45°C',
          },
          {
            label: 'OPERATING HUMIDITY',
            value: '10%–90% (No condensation)',
          },
          {
            label: 'PRODUCT LIFE',
            value: '100000 hrs',
          },
        ],
      },
    ],
  }
},

'slm-series': {
  slug: 'slm-series',

  hero: {
    title: 'SLIM LIGHT MODULAR series',
    subtitle: 'SLIM LIGHT MODULAR',
    description:
      'READY TO USE HIGH QUALITY LED CABINET',
    mediaType: 'image',
    media:"/images/products/6.png"
  },

  about: {
    title: 'SLIM LIGHT MODULAR series',
    subtitle: 'SLM Series — High temperature resistance, exceptional strength, lightweight ﬁberglass body  for deformation-free operation. ',
    paragraphs: [
      'The SLM Series is a slim and lightweight modular LED display designed for high-performance indoor applications. Featuring an integrated cabinet structure, it comes ready to use, eliminating the need for complex on-site assembly. With pixel pitch options of P1.8, P2.0, and P2.5, the system delivers clear visuals and stable performance for various indoor environments.',
      'Built with a reinforced fiberglass body, the SLM Series ensures high strength, temperature resistance, and deformation-free operation. Its lightweight design of only 12kg per cabinet and 45.5mm thickness allows for easy installation and handling. The wireless connection system eliminates internal wiring, while flexible docking and L-shaped angle support enable creative and precise installations.',
      'The cabinet is designed for efficiency and reliability, offering quick installation with increased assembly speed and full frontal maintenance access. With high refresh rate performance, stable structure, and pre-assembled configuration, the SLM Series provides a dependable and convenient solution for modern indoor LED display projects.',
    ],
  },

  media: {
    slides: [
      {
        type: 'image',
        src: '/images/products/6.png',
      },
      {
        type: 'image',
        src: '/images/one-product/6-2.png',
      },
      {
        type: 'image',
        src: '/images/one-product/6-3.jpg',
        // poster: '/images/products/texture-led-series/video-poster.jpg',
      },
    ],
  },

  showcase: {
    image: '/images/product-banners/ab-1.jpg',
    alt: 'SLM series',
  },

  features: {
    title: 'KEY FEATURES',
    items: [
      {
        title: 'READY-TO-USE CABINET',
        description:
          'Integrated cabinet design comes pre-assembled for fast and easy installation without complex setup.',
        image: '/images/products/6.png',
      },
      {
        title: 'LIGHTWEIGHT DESIGN',
        description:
          'Only 12kg per cabinet with a slim 45.5mm profile for easy handling and installation.',
        image: '/images/features/6fea-2.png',
      },
      {
        title: 'WIRELESS CONNECTION',
        description:
          'No internal wiring inside the cabinet ensures a clean structure and stable signal transmission.',
        image: '/images/features/6fea-3.png',
      },
      {
        title: 'FLEXIBLE DOCKING & L-SHAPE SUPPORT',
        description:
          'Supports standard and small panels with L-shaped angle configurations for creative installations.',
        image: '/images/one-product/6-2.png',
      },
    ],
  },

  specifications: {
    title: 'SLIM LIGHT MODULAR series SPECIFICATIONS',
    metrics: [
      {
        value: '600',
        label: 'BRIGHTNESS',
      },
      {
        value: '3840Hz',
        label: 'REFRESH RATE',
      },
      {
        value: '320×240×46.5',
        label: 'PANEL DIMENSIONS',
      },
      {
        value: 'IP40',
        label: 'IP RATING',
      },
      {
        value: '160°/140°',
        label: 'VIEWING ANGLE',
      },
    ],
    groups: [
      {
        title: 'SLM Series',
        left: [
          {
            label: 'PIXEL PITCH',
            value: '1.86 / 2.0 / 2.5 mm',
          },
          {
            label: 'PANEL RESOLUTION',
            value: '172×256 / 160×240 / 128×192',
          },
          {
            label: 'PANEL WEIGHT',
            value: '1.8–1.9 kg',
          },
          {
            label: 'MODULE SIZE',
            value: '320×240 mm',
          },
          {
            label: 'BRIGHTNESS',
            value: '600 nit',
          },
          {
            label: 'REFRESH RATE',
            value: '3840 Hz',
          },
        ],
        right: [
          {
            label: 'GRAY SCALE',
            value: '13/14',
          },
          {
            label: 'VIEWING ANGLE (H/V)',
            value: '160° / 140°',
          },
          {
            label: 'POWER CONSUMPTION (MAX/AVG)',
            value: '336/112 W/m² (SLM1.8)',
          },
          {
            label: 'OPERATING TEMPERATURE',
            value: '-10 ~ 40°C',
          },
          {
            label: 'OPERATING HUMIDITY',
            value: '10%–85%',
          },
          {
            label: 'CERTIFICATION',
            value: 'CCC, FCC, ETL, CE',
          },
        ],
      },
    ],
  }
},

'hdc-series': {
  slug: 'hdc-series',

  hero: {
    title: 'HIGH DEFINITION COB series',
    subtitle: 'HIGH DEFINITION COB',
    description:
      'Unparalleled Durability and Clarity',
    mediaType: 'image',
    media:"/images/products/7.png"
  },

  about: {
    title: 'HIGH DEFINITION COB series',
    subtitle: 'Brings ultimate in durability ,with superior impact, dust,moisture protection, designed for spaces where reliability & engagement are key.',
    paragraphs: [
      'The High Definition COB Series is designed for ultra-fine pixel pitch applications where image clarity and visual precision are critical. Utilizing advanced Chip-on-Board (COB) technology, the display delivers seamless visuals with superior contrast, deep blacks, and outstanding color uniformity, making it ideal for close-viewing environments.',
      'Built with a fully encapsulated LED surface, the COB Series offers enhanced durability and protection against dust, moisture, and physical impact. The robust structure ensures long-term stability, reduced failure rates, and consistent performance even in demanding indoor environments.',
      'With high refresh rates, precise grayscale control, and energy-efficient operation, the High Definition COB Series provides a reliable solution for premium installations such as control rooms, studios, corporate spaces, and high-end retail environments, where both performance and visual quality are essential.',
    ],
  },

  media: {
    slides: [
      {
        type: 'image',
        src: '/images/products/7.png',
      },
      {
        type: 'image',
        src: '/images/one-product/7-2.png',
      },
    ],
  },

  showcase: {
    image: '/images/product-banners/ab-1.jpg',
    alt: 'BX series',
  },

  features: {
    title: 'KEY FEATURES',
    items: [
      {
        title: '16:9 GOLDEN RATIO',
        description:
          'Standard 27.5" Size FHD/4K Pixel to Pixel Resolutions.',
        image: '/images/features/7fea-1.jpg',
      },
      {
        title: 'SUPERIOR PROTECTION',
        description:
          'Fully encapsulated COB surface provides strong resistance to impact, dust, and moisture for long-term reliability.',
        image: '/images/one-product/7-2.png',
      },
      {
        title: 'HIGH DEFINITION VISUALS',
        description:
          'Supports DCI-P3 color gamut, HDR, and 22-bit color depth for precise, vivid, and high-contrast image quality.',
        image: '/images/features/7fea-3.webp',
      },
      {
        title: 'LOW LATENCY & HIGH PERFORMANCE',
        description:
          '3840Hz refresh rate with low latency ensures smooth motion and stable performance in demanding applications.',
        image: '/images/features/7fea-4.png',
      }
    ],
  },

  specifications: {
    title: 'HIGH DEFINITION COB series SPECIFICATIONS',
    metrics: [
      {
        value: '3840HZ',
        label: 'REFRESH RATE',
      },
      {
        value: '800nits',
        label: 'Max.BRIGHTNESS',
      },
      {
        value: ' 15000:1',
        label: 'Contrast',
      },
      {
        value: 'HDR',
        label: 'Dynamic range',
      },
      {
        value: '22bit',
        label: 'Color depth',
      },
    ],
    groups: [
      {
        title: 'HDC COB Series',
        left: [
          {
            label: 'DRIVING TYPE',
            value: '1/48',
          },
          {
            label: 'POWER CONSUMPTION (MAX/AVG)',
            value: '390/130 W/m²',
          },
          {
            label: 'AC OPERATING VOLTAGE',
            value: '100–240V',
          },
          {
            label: 'OPERATING TEMPERATURE',
            value: '-10 ~ 40°C',
          },
          {
            label: 'OPERATING HUMIDITY',
            value: '10%–80%',
          },
          {
            label: 'IP RATING (FRONT/REAR)',
            value: 'IP40/IP21',
          },
        ],
        right: [
          {
            label: 'STORAGE TEMPERATURE',
            value: '-40 ~ 60°C',
          },
          {
            label: 'STORAGE HUMIDITY',
            value: '10%–85%',
          },
          {
            label: 'LED LIFETIME',
            value: '100000 H',
          },
          {
            label: 'MODULE MAINTENANCE',
            value: 'Front',
          },
          {
            label: 'PSU & OTHERS MAINTENANCE',
            value: 'Front',
          },
          {
            label: 'PANEL INSTALLATION TYPE',
            value: 'Stacking / Wall mounting / Hanging',
          },
        ],
      },
    ]
  },
},

'flm-series': {
  slug: 'flm-series',

  hero: {
    title: 'FLEX MODULE series',
    subtitle: 'FLEX MODULE',
    description:
      'Flexible structure for unlimited visual layouts',
    mediaType: 'image',
    media:"/images/products/8.png"
  },

  about: {
    title: 'FLEX MODULE series',
    subtitle: 'FLM Series — Seamless flexibility for dynamic installations',
    paragraphs: [
      'FLM Series is designed as a highly flexible LED module solution for projects where standard flat displays are not enough. With its adaptable structure, it easily conforms to curved, concave, convex, and custom-shaped surfaces, making it ideal for creative installations, architectural media, and immersive environments.',
      'Built with a lightweight and modular design, the FLM Series ensures easy handling and efficient installation across a wide range of applications. The flexible modules maintain stable signal transmission and consistent visual performance, allowing seamless integration into complex layouts without compromising image quality.',
      'Whether used for artistic displays, retail environments, or large-scale visual concepts, the FLM Series provides reliable operation and long-term durability. Its ability to create smooth, continuous surfaces opens new possibilities for designers and engineers, enabling unique and visually striking LED solutions.',
    ],
  },

  media: {
    slides: [
      {
        type: 'image',
        src: '/images/products/8.png',
      },
      {
        type: 'image',
        src: '/images/one-product/8-2.png',
      },
      {
        type: 'image',
        src: '/images/one-product/8-3.jpg',
        // poster: '/images/products/texture-led-series/video-poster.jpg',
      },
    ],
  },

  showcase: {
    image: '/images/product-banners/ab-8.jpg',
    alt: 'FLM series',
  },

  features: {
    title: 'KEY FEATURES',
    items: [
      {
        title: 'FLEXIBLE STRUCTURE',
        description:
          'Soft module design allows bending into curved, cylindrical, and custom shapes for creative installations.',
        image: '/images/one-product/8-3.jpg',
      },
      {
        title: 'CREATIVE SHAPE SUPPORT',
        description:
          'Supports spherical, column, and irregular display forms for immersive and architectural applications.',
        image: '/images/one-product/8-2.png',
      },
      {
        title: 'LIGHTWEIGHT MODULE DESIGN',
        description:
          'Compact and lightweight modules simplify installation on complex surfaces and structures.',
        image: '/images/features/8fea-3.jpg',
      },
      {
        title: 'SEAMLESS VISUAL INTEGRATION',
        description:
          'Flexible modules ensure smooth and continuous display surfaces without visible gaps.',
        image: '/images/features/8fea-4.jpg',
      },
    ],
  },

  specifications: {
    title: 'FLEX MODULE series SPECIFICATIONS',
    metrics: [
      {
        value: '3840HZ',
        label: 'REFRESH RATE',
      },
      {
        value: '1000nits',
        label: 'MAX.BRIGHTNESS',
      },
      {
        value: ' 140°/140° ',
        label: 'Viewing angle ',
      },
      {
        value: '5000:1',
        label: ' Contrast ',
      },
      {
        value: '>14bit',
        label: 'Greyscale',
      },
    ],
    groups: [
      {
        title: 'FLM Series',
        left: [
          {
            label: 'SCANNING',
            value: '1/32',
          },
          {
            label: 'GRAYSCALE',
            value: '>14bit',
          },
          {
            label: 'BRIGHTNESS',
            value: '700–900 nit',
          },
          {
            label: 'DRIVING MODE',
            value: '1/32',
          },
          {
            label: 'REFRESH STRUCTURE',
            value: 'High refresh scanning',
          },
        ],
        right: [
          {
            label: 'AVAILABLE SCANNING OPTIONS',
            value: '1/64 / 1/48 / 1/32 / 1/43 / 1/40 / 1/24 / 1/26 / 1/20 / 1/16',
          },
          {
            label: 'COLOR DEPTH',
            value: '>14bit',
          },
          {
            label: 'BRIGHTNESS RANGE',
            value: '700–900 nit',
          },
          {
            label: 'APPLICATION TYPE',
            value: 'Flexible LED Module',
          },
        ],
      },
    ]
  },
},

'hdg-series': {
  slug: 'hdg-series',

  hero: {
    title: 'HIGH DEFINITION GOB series',
    subtitle: 'HIGH DEFINITION GOB',
    description:
      'GOB Technology Available, Durable & Lasting',
    mediaType: 'image',
    media:"/images/products/9.png"
  },

  about: {
    title: 'HIGH DEFINITION GOB series',
    subtitle: 'HDG Series — Higher stability with longer lifespan.',
    paragraphs: [
      'HIGH DEFINITION GOB Series is engineered to deliver enhanced durability and stable visual performance through advanced Glue-On-Board protection technology. The display surface is reinforced with a protective transparent layer that safeguards LEDs from dust, moisture, and physical impact, making it ideal for high-traffic and demanding indoor environments.',
      'Designed for consistent image quality, the GOB technology improves reliability while maintaining excellent brightness and uniform color output. The protected surface reduces the risk of pixel damage and ensures long-term stability, even in installations where frequent contact or exposure is expected.',
      'With its combination of protection and high-definition clarity, the HIGH DEFINITION GOB Series is well-suited for retail, control rooms, exhibition spaces, and public areas. It offers a balance between visual performance and structural resilience, providing a dependable solution for professional LED display applications.',
    ],
  },

  media: {
    slides: [
      {
        type: 'image',
        src: '/images/products/9.png',
      },
      {
        type: 'image',
        src: '/images/one-product/9-3.jpg',
      },
      {
        type: 'image',
        src: '/images/one-product/9-2.jpg',
        // poster: '/images/products/texture-led-series/video-poster.jpg',
      },
    ],
  },

  showcase: {
    image: '/images/product-banners/ab-1.jpg',
    alt: 'HDG series',
  },

  features: {
    title: 'KEY FEATURES',
    items: [
      {
        title: 'GOB SURFACE PROTECTION',
        description:
          'Advanced GOB technology provides strong resistance to impact, dust, and moisture for long-term durability.',
        image: '/images/features/9fea-1.png',
      },
      {
        title: 'ANTI-COLLISION & WATERPROOF',
        description:
          'Protected surface prevents damage from physical contact while ensuring waterproof and dustproof performance.',
        image: '/images/features/9fea-2.png',
      },
      {
        title: 'FRONT ACCESS MAINTENANCE',
        description:
          'Module, power supply, and receiving card can be serviced from the front without additional maintenance space.',
        image: '/images/one-product/9-2.jpg',
      },
      {
        title: 'CABLE-LESS DESIGN',
        description:
          'Integrated cable-free structure improves installation efficiency and reduces failure risks.',
        image: '/images/features/9fea-4.png',
      },
    ],
  },

  specifications: {
    title: 'HIGH DEFINITION GOB series SPECIFICATIONS',
    metrics: [
      {
        value: '3840HZ',
        label: 'REFRESH RATE',
      },
      {
        value: '600-1000nits',
        label: 'MAX.BRIGHTNESS',
      },
      {
        value: ' DCI-P3 ',
        label: 'Colar gamut',
      },
      {
        value: '5000:1',
        label: 'Contrast',
      },
      {
        value: 'HDR',
        label: 'Dynamic range ',
      },
    ],
    groups: [
      {
        title: 'HIGH DEFINITION GOB Series',
        left: [
          {
            label: 'PIXEL PITCH',
            value: '1.25 mm',
          },
          {
            label: 'MODULE SIZE (W×H×D)',
            value: '320×160×2 mm',
          },
          {
            label: 'MODULE RESOLUTION',
            value: '256×128',
          },
          {
            label: 'CABINET SIZE (W×H×D)',
            value: '640×480×46 mm',
          },
          {
            label: 'CABINET MATERIAL',
            value: 'Die Casting Aluminum',
          },
          {
            label: 'SCANNING MODE',
            value: '1/64',
          },
        ],
        right: [
          {
            label: 'GRAY SCALE',
            value: '14–16 bit',
          },
          {
            label: 'PROTECTION LEVEL (F/R)',
            value: 'IP20/IP45',
          },
          {
            label: 'BRIGHTNESS',
            value: '600–1000 cd/㎡',
          },
          {
            label: 'COLOR TEMPERATURE',
            value: '3200–9300K Adjustable',
          },
          {
            label: 'CONTRAST RATIO',
            value: '≤5000:1',
          },
          {
            label: 'REFRESH RATE',
            value: '≥3840Hz',
          },
        ],
      },
    ]
  },
},

'ltd-series': {
  slug: 'ltd-series',

  hero: {
    title: 'LOUVER TRANSPARENT DISPLAY series',
    subtitle: 'LOUVER TRANSPARENT DISPLAY',
    description:
      'PIXANTA TRANSPARENT LED SCREEN',
    mediaType: 'image',
    media:"/images/products/10.png"
  },

  about: {
    title: 'LOUVER TRANSPARENT DISPLAY series',
    subtitle: 'Product with high coast-eﬀectiveness, designed for varieties of digital glass curtain wall solution requirements.',
    paragraphs: [
      'LTD Series (Louver Transparent Display) is designed to deliver high-impact visuals while maintaining transparency and airflow. The louver structure allows light and air to pass through the display, making it ideal for large-scale installations on building facades, glass surfaces, and outdoor media where visibility and ventilation are essential.',
      'Engineered for architectural integration, the LTD Series combines lightweight construction with a modular design for easy installation and scalability. Its transparent format reduces wind load and structural requirements, while still providing bright, clear content that remains visible in various lighting conditions.',
      'With its balance of visibility, performance, and structural efficiency, the LTD Series is well-suited for retail storefronts, media facades, and public spaces. It enables dynamic digital communication without blocking natural light or the surrounding environment, making it a practical and visually striking display solution.',
    ],
  },

  media: {
    slides: [
      {
        type: 'image',
        src: '/images/products/10.png',
      },
      {
        type: 'image',
        src: '/images/one-product/10-2.jpg',
      },
      {
        type: 'image',
        src: '/images/one-product/10-3.jpg',
        // poster: '/images/products/texture-led-series/video-poster.jpg',
      },
    ],
  },

  showcase: {
    image: '/images/product-banners/ab-1.jpg',
    alt: 'LTD series',
  },

  features: {
    title: 'KEY FEATURES',
    items: [
      {
        title: 'HIGH TRANSPARENCY DESIGN',
        description:
          'Louver structure allows light and visibility through the display while maintaining clear visual content.',
        image: '/images/features/10fea-1.jpg',
      },
      {
        title: 'CUSTOMIZABLE SHAPES',
        description:
          'Supports rectangular, parallelogram, circular, and triangular configurations for flexible architectural designs.',
        image: '/images/features/10fea-2.png',
      },
      {
        title: 'MODULAR & CUSTOM SIZES',
        description:
          'Cabinet width and height can be customized to fit different installation requirements and structures.',
        image: '/images/features/10fea-3.png',
      },
      {
        title: 'EASY INSTALLATION',
        description:
          'Integrated cabinet design with modular structure enables fast and efficient installation.',
        image: '/images/features/10fea-4.jpg',
      },
    ],
  },

  specifications: {
    title: 'LOUVER TRANSPARENT DISPLAY series SPECIFICATIONS',
    metrics: [
      {
        value: '3000–7500 nits',
        label: 'BRIGHTNESS',
      },
      {
        value: '74%–80%',
        label: 'TRANSPARENCY',
      },
      {
        value: 'P3.9 / P8 / P10 / P16',
        label: 'PIXEL PITCH',
      },
      {
        value: '1000×1000 mm',
        label: 'CABINET SIZE',
      },
      {
        value: 'SMD2727',
        label: 'LED TYPE',
      },
    ],
    groups: [
      {
        title: 'LTD Series',
        left: [
          {
            label: 'PIXEL DISTANCE',
            value: 'P3.9 / P8 / P10 / P16',
          },
          {
            label: 'LED TYPE',
            value: 'SMD1921 / SMD2727',
          },
          {
            label: 'CABINET SIZE (W×H)',
            value: '1000×500 / 1000×1000 mm',
          },
        ],
        right: [
          {
            label: 'BRIGHTNESS',
            value: '3000–7500 nits',
          },
          {
            label: 'TRANSPARENCY',
            value: '74%–80%',
          },
        ],
      },
    ],
  }
},

'lfd-series': {
  slug: 'lfd-series',

  hero: {
    title: 'LED FLOOR DISPLAY series',
    subtitle: 'LED FLOOR DISPLAY',
    description:
      'SUPER LOAD-BEARING PERFORMANCE',
    mediaType: 'image',
    media:"/images/products/11.png"
  },

  about: {
    title: 'LED FLOOR DISPLAY series',
    subtitle: 'Featured with the reinforcement for whole back to distribute the force on the surface, working with galvanized ﬂoor support,',
    paragraphs: [
      'LED Floor Display is designed to transform surfaces into dynamic, interactive visual platforms. Built to withstand foot traffic and physical impact, it delivers stable performance while maintaining high brightness and vivid image quality, making it ideal for public spaces, events, and immersive environments.',
      'Engineered with a durable structure and protective surface, the display ensures resistance to pressure, wear, and daily usage. Its modular design allows flexible installation across different floor layouts, enabling seamless integration into stages, retail environments, showrooms, and entertainment venues.',
      'With strong visual performance and reliable operation, LED Floor Display enhances user engagement by turning ordinary floors into eye-catching digital experiences. It provides a balance between durability and visual impact, offering a practical solution for projects that require both performance and interaction.',
    ],
  },

  media: {
    slides: [
      {
        type: 'image',
        src: '/images/products/11.png',
      },
      {
        type: 'image',
        src: '/images/features/11fea-1.jpg',
      },

    ],
  },

  showcase: {
    image: '/images/product-banners/ab-1.jpg',
    alt: 'LFD series',
  },

  features: {
    title: 'KEY FEATURES',
    items: [
      {
        title: 'SUPER LOAD-BEARING PERFORMANCE',
        description:
          'Reinforced back structure distributes surface force, supporting loads over 3T/sqm for walking and jumping crowds.',
        image: '/images/features/11fea-1.jpg',
      },
      {
        title: 'ANTI-SLIP & WATERPROOF SURFACE',
        description:
          'Anti-slip waterproof groove design ensures safety and stability in high-traffic environments.',
        image: '/images/features/11fea-2.png',
      },
      {
        title: 'QUICK INSTALLATION SYSTEM',
        description:
          'Independent cabinet foot design allows fast positioning and quick assembly on-site.',
        image: '/images/features/11fea-3.png',
      },
      {
        title: 'HIGH BRIGHTNESS & VISUAL PERFORMANCE',
        description:
          'Up to 1000 nits brightness with 3840Hz refresh rate and 160° viewing angle for clear visuals.',
        image: '/images/features/11fea-4.png',
      },
    ],
  },

  specifications: {
    title: 'LED FLOOR DISPLAY series SPECIFICATIONS',
    metrics: [
      {
        value: '3840HZ',
        label: 'REFRESH RATE',
      },
      {
        value: '1000nits',
        label: 'MAX.BRIGHTNESS',
      },
      {
        value: ' 160°/160° ',
        label: 'Viewing angle ',
      },
      {
        value: '5000:1',
        label: ' Contrast ',
      },
      {
        value: 'IP54',
        label: 'Protection',
      },
    ],
    groups: [
      {
        title: 'LED Floor Display',
        left: [
          {
            label: 'AVERAGE POWER CONSUMPTION',
            value: '280 W/m²',
          },
          {
            label: 'VIEWING ANGLE',
            value: '160°/160°',
          },
          {
            label: 'DRIVING MODE',
            value: '1/32',
          },
          {
            label: 'REFRESH RATE',
            value: '3840Hz',
          },
        ],
        right: [
          {
            label: 'MAX LOADING BEARING',
            value: '3 tons/m²',
          },
          {
            label: 'WORK TEMPERATURE',
            value: '-20°C ~ +55°C',
          },
          {
            label: 'STORAGE TEMPERATURE',
            value: '-30°C ~ +60°C',
          },
          {
            label: 'PROTECTION LEVEL',
            value: 'Front IP54 / Back IP43',
          },
        ],
      },
    ]
  },
},

'gld-series': {
  slug: 'gld-series',

  hero: {
    title: 'GLASS LED DISPLAY series',
    subtitle: 'GLASS LED DISPLAY',
    description:
      'Pixanta Glass LED use high density industrial tempered glass',
    mediaType: 'image',
    media:"/images/products/12.png"
  },

  about: {
    title: 'GLASS LED DISPLAY series',
    subtitle: 'GLD Series — with Highly customizable options',
    paragraphs: [
      'Pixanta Glass LED uses high-density industrial tempered glass as the base material combined with patented integrated-IC technology and Nano film circuits; it can be installed indoors directly behind building windows, facades, and store fronts, or used as a construction component.',
      'Pixanta Glass LED will transform any glass surface into a high resolution, high transparency and high eﬃciency display!',
      'Highly customizable: large modular Pixanta Glass LED panels maintain facade integrity. Size per panel: short side <1800 mm, long side = 4500 mm. Area per panel: standard panel <3.6 m², custom panel <8 m².',
    ],
  },

  media: {
    slides: [
      {
        type: 'image',
        src: '/images/products/12.png',
      },
      {
        type: 'image',
        src: '/images/one-product/12-2.jpg',
      },
      {
        type: 'image',
        src: '/images/one-product/12-3.jpg',
        // poster: '/images/products/texture-led-series/video-poster.jpg',
      },
    ],
  },

  showcase: {
    image: '/images/product-banners/ab-1.jpg',
    alt: 'GLD series',
  },

  features: {
    title: 'KEY FEATURES',
    items: [
      {
        title: 'HIGH TRANSPARENCY GLASS STRUCTURE',
        description:
          'Uses ultra-clear tempered glass with integrated LED layer, maintaining high transparency for façade applications.',
        image: '/images/products/12.png',
      },
      {
        title: 'INTEGRATED IC & NANO FILM TECHNOLOGY',
        description:
          'Patented integrated-IC design combined with nano film circuits ensures stable performance and high resolution output.',
        image: '/images/features/12fea-2.png',
      },
      {
        title: 'FLEXIBLE INSTALLATION OPTIONS',
        description:
          'Supports behind-glass installation and alternative glass mounting for storefronts and building facades.',
        image: '/images/features/12fea-3.png',
      },
      {
        title: 'CUSTOM SHAPES & PANEL SIZES',
        description:
          'Allows special-shaped customization with various panel sizes while maintaining façade integrity.',
        image: '/images/features/12fea-4.png',
      },
    ],
  },

  specifications: {
    title: 'GLASS LED DISPLAY SPECIFICATIONS',
    metrics: [
      {
        value: '400–6000 nits',
        label: 'BRIGHTNESS',
      },
      {
        value: '86%–99%',
        label: 'TRANSPARENCY',
      },
      {
        value: '45–65 kg/m²',
        label: 'WEIGHT',
      },
      {
        value: '1800×4500',
        label: 'PANEL SIZE',
      },
      {
        value: 'P6–P60',
        label: 'PIXEL PITCH',
      },
    ],
    groups: [
      {
        title: 'Installation',
        left: [
          {
            label: 'INSTALLATION WAY',
            value: 'Behind glass',
          },
          {
            label: 'BASIC STRUCTURE',
            value: 'Laminated',
          },
          {
            label: 'SIZE',
            value: 'Customized',
          },
          {
            label: 'APPLICATION',
            value: 'Indoor / Semi-outdoor',
          },
          {
            label: 'MAINTENANCE',
            value: 'Exchange facade / accessory',
          },
        ],
        right: [
          {
            label: 'INSTALLATION WAY',
            value: 'Alternative glass installation',
          },
          {
            label: 'BASIC STRUCTURE',
            value: 'Laminated / IGU',
          },
          {
            label: 'SIZE',
            value: 'Customized',
          },
          {
            label: 'APPLICATION',
            value: 'Indoor / Outdoor',
          },
          {
            label: 'MAINTENANCE',
            value: 'Exchange facade / accessory',
          },
        ],
      },
    ],
  },
},
}