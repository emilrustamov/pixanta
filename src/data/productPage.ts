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
        image: '/images/features/1fea-1.png',
      },
      {
        title: 'INDOOR & OUTDOOR COMPATIBILITY',
        description:
          'One screen solution suitable for both indoor and outdoor environments with stable performance.',
        image: '/images/features/1fea-2.jpg',
      },
      {
        title: 'SOFT CONNECTION SYSTEM',
        description:
          'Ensures stable and secure signal and power transmission across complex display setups.',
        image: '/images/features/1fea-3.png',
      },
      {
        title: 'LIGHTWEIGHT DESIGN',
        description:
          'Only 7kg per cabinet with compact structure for easy installation, transport, and handling.',
        image: '/images/features/1fea-4.jpg',
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
        label: 'BRIGHTNESS (CD/sqm)',
      },
      {
        value: '500×500×91',
        label: 'CABINET SIZE (mm)',
      },
      {
        value: 'IP65/IP65',
        label: 'PROTECTION',
      },
      {
        value: '100000',
        label: 'PRODUCT LIFE (hrs)',
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

}