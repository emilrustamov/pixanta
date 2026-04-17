
import type { MarketPage } from './types/content'

export const marketPages: Record<string, MarketPage> = {
  outdoor: {
    slug: 'outdoor',

    hero: {
      title: 'OUTDOOR SOLUTIONS',
      subtitle: 'Capture attention in any environment',
      mediaType: 'video',
      media: '/video/video-1.mp4',
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
          description: 'LED billboards are primarily used for advertising, with a set of commonly used sizes. They are positioned on highly visible, traffic-heavy locations to promote a specific brand, product, or service on a paid basis.',
          image: '/images/inspir/out-1.jpg',
        },
        {
          title: 'Spectacular',
          description: 'Large, complex, and engaging, the spectaculars use special effects to surprise viewers and grab attention. They are typically positioned in high profile areas, on the walls or roofs of buildings in CBDs and downtown areas.',
          image: '/images/inspir/out-2.jpg',
        },
        {
          title:'Transit Center',
          description:'Providing information to passengers through first-class LED display technology Transit center advertising with LED displays can release massive dynamic ads in real time and achieve accurate advertising placement based on population analysis.',
          image:'/images/inspir/out-3.jpg'
        },
        {
          title:'Smart Pole',
          description:'Smart Pole is an important tool for building a comprehensive perception network of smart cities, integrating 5Gbase stations, intelligent lighting, environmental monitoring, information dissemination, intelligent monitoring, one-key alarms, charging stations, public broadcasting and other functional modules with a centralized management.',
          image:'/images/inspir/out-4.jpg'
        }
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
      subtitle:'Reliable LED solutions for rental and events.',
      mediaType: 'video',
      media: '/video/rental.mp4',
    },
    intro: {
      title: 'RENTAL',
      paragraphs: [
        'Pixanta’s Rental LED Solutions are built for dynamic event environments where speed, flexibility, and reliability are critical. Designed specifically for rental and staging applications, our systems enable fast setup and dismantling, modular configurations, and efficient on-site servicing—ensuring smooth operation throughout the entire production cycle.',
        'In the rental industry, performance under pressure is essential. Pixanta delivers robust and stable LED solutions that withstand frequent transportation, installation, and intensive use. From large-scale concerts and festivals to corporate events and exhibitions, our displays provide consistent visual quality and dependable operation.',
        'With strong industry expertise, the Pixanta team works closely with partners to deliver solutions tailored to each project. Our specialists ensure that every LED setup is optimized for efficiency, scalability, and visual impact—helping you execute events with confidence and precision.'
      ],
    },
    form: { title: 'CONTACT US' },
    inspiring: {  
      items: [
        {
          title: 'Corporate events and conferences',
          description: 'Corporate event such as press conferences, product launches, forums and corporate annual meetings are important occasions where enterprises release new products, promote corporate culture, and attract investment. Elevate your corporate presentations and product launches with crisp, clear visuals that ensure your message is communicated effectively, engaging attendees and leaving a lasting impression.',
          image: '/images/inspir/rent-2.jpg',
        },
        {
          title:'Concerts and Live Performances',
          description:'Elevate your live music experience with cutting-edge LED displays. The LED display wall that can be quickly built in a short time, the combination of LED displays, lasers, dry ice and pyrotechnics greatly enriches the stage effect. Amplify the energy and emotion of live performances with vibrant backdrops and dynamic visuals that sync perfectly with the music, enhancing the audience’s immersion and connection.',
          image:'/images/inspir/rent-1.jpg'
        },
        {
          title:'Trade Shows and Exhibitions',
          description:'Stand out on the trade show with eye-catching led displays and be attractive for attendees to your booth, showcasing your products and service.',
          image:'/images/inspir/rent-3.jpg'
        },
        {
          title:'Public Event',
          description:'Public events usually have a profound impact on influencing its politics, economy, and culture. we are dedicated in providing durable LED displays with high definition and vibrant color reproduction, ensuring the success of public events and leaving audiences with unforgettable memories.',
          image:'/images/inspir/rent-4.jpg'
        },
        {
          title:'Broadcast Studio',
          description:'Television shows are often recorded in broadcasting studios; Studios nowadays pay more attention to interactive displays that can enrich program content and effects through virtual-real fusion and remote interaction.',
          image:'/images/inspir/rent-5.jpg'
        }
      ] 
    },
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
      subtitle:'Sharp visuals for indoor spaces.',
      mediaType: 'video',
      media: '/video/video-3.mp4',
    },
    intro: {
      title: 'INDOOR',
      paragraphs: 
      [
        'Pixanta’s Indoor LED Solutions are designed to deliver exceptional image quality in controlled environments where clarity, precision, and aesthetics are essential. With high resolution and seamless panel integration, our displays ensure sharp visuals, accurate colors, and an immersive viewing experience—ideal for retail spaces, corporate environments, studios, and exhibitions.',
        'Indoor applications demand both performance and visual refinement. Pixanta focuses on lightweight structures, quiet operation, and fine pixel pitch technology to achieve clean, detailed displays suitable for close viewing distances. Every solution is engineered to integrate smoothly into modern interiors while maintaining consistent and reliable performance.',
        'With deep industry expertise, the Pixanta team works closely with clients to understand spatial and technical requirements. Our specialists deliver tailored LED solutions that align with your environment and objectives—ensuring your indoor display enhances both functionality and visual impact.'
      ],
    },
    form: { title: 'CONTACT US' },
    inspiring: {
      items: 
      [
        {
          title:'Shopping mall',
          description:'Enhance malls with LED displays for impactful promotions. 3D videos captivate visitors, providing unique experiences and boosting social media presence. Drive traffic, attract brands, and maximize business results.',
          image:'/images/inspir/in-1.jpg'
        },
        {
          title:'Hospitality',
          description:'significantly enhance guest experiences and operational efficiency. From welcoming guests in lobbies to creating immersive event spaces and offering personalized in-room entertainment, these displays transform hospitality environments into dynamic, engaging, and visually appealing spaces that align with modern guest expectations.',
          image:'/images/inspir/in-2.jpg'
        },
        {
          title:'Flagship Store',
          description:'A flagship store creates a unique image, allowing customers to experience and identify with the brand. LED displays in windows, entrances, and product display areas highlight brand personality, attracting consumers and enhancing their perception, interest, loyalty, and brand reputation.',
          image:'/images/inspir/in-3.jpg'
        },
        {
          title:'Chain Store',
          description:'Use LED displays in chain stores for impactful brand expansion. Enhance store appearance, attract consumers and enrich the shopping experience with creative marketing content strategically placed in windows, display areas, and checkout counters.',
          image:'/images/inspir/in-4.jpg'
        },
        {
          title:'Car Dealer Shop',
          description:'Attract customers and detailed features with Absens reliable and high-resolution LED displays that can be deployed both indoors and outdoors.',
          image:'/images/inspir/in-5.jpg'
        },
        {
          title:'Storefront Signage',
          description:'By integrating LED displays into your storefront signage, you can create a more engaging and effective way to communicate with your customers, ultimately driving more foot traffic and sales.',
          image:'/images/inspir/in-6.jpg'
        }
      ] 
    },
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
      subtitle:'LED floors for interaction.',
      mediaType: 'video',
      media: '/video/floor.mp4',
    },
    intro: {
      title: 'FLOOR',
      paragraphs: 
      [
        'Pixanta’s Floor LED Solutions are engineered for durability and interactivity, transforming surfaces into dynamic visual platforms. Designed to withstand high loads and continuous foot traffic, our LED floors deliver reliable performance in demanding environments such as stages, exhibitions, showrooms, and entertainment venues.',
        'Built with reinforced structures and anti-slip surfaces, these systems ensure safety while maintaining vivid visuals and responsive interaction. Whether used for immersive installations or high-impact event staging, Pixanta’s floor displays provide stable operation and consistent image quality under pressure.',
        'With extensive project experience, the Pixanta team develops tailored floor LED solutions based on specific use cases and technical requirements. From concept to execution, we ensure each installation is optimized for performance, longevity, and maximum visual engagement.'
      ],
    },
    form: { title: 'CONTACT US' },
    inspiring: 
    {  
      items: 
      [
        {
          title:'INTERACTIVE FLOOR SPACES',
          description:'Designed to turn surfaces into engaging visual experiences, combining durability with dynamic content for events and exhibitions.',
          image:'/images/inspir/fl-1.jpg'
        },
        {
          title:'DYNAMIC FLOOR ENVIRONMENTS',
          description:'Designed to turn surfaces into engaging visual experiences, combining durability with dynamic content for events and exhibitions.',
          image:'/images/inspir/fl-2.jpg'
        },
        {
          title:'IMMERSIVE FLOOR EXPERIENCES',
          description:'Designed to transform ordinary surfaces into engaging visual spaces, floor LED displays create interactive and memorable environments. Ideal for events, showrooms, and entertainment venues, they combine durability with dynamic content to captivate every step.',
          image:'/images/inspir/fl-4.jpg'
        }
      ] 
    },
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
      subtitle:'Clear visuals without blocking light.',
      mediaType: 'video',
      media: '/video/glass.mp4',
    },
    intro: {
      title: 'GLASS',
      paragraphs: 
      [
        'Pixanta’s Transparent LED Solutions are designed to seamlessly integrate digital content into glass surfaces without blocking natural light or visibility. These displays maintain architectural openness while adding a dynamic visual layer—making them ideal for storefronts, facades, showrooms, and modern commercial spaces.',
        'By combining high transparency with vivid brightness, our systems allow content to stand out without compromising the design of the environment. Lightweight construction and minimal structural impact ensure easy installation on existing glass surfaces, preserving both aesthetics and functionality.',
        'With extensive experience in creative installations, the Pixanta team delivers tailored transparent LED solutions that align with your space and objectives. The result is a perfect balance between visibility, design, and impactful visual communication.'
      ],
    },
    form: { title: 'CONTACT US' },
    inspiring: 
    { 
      items: 
      [
       {
        title:'TRANSPARENT GLASS DISPLAYS',
        description:'Elegant and innovative, transparent LED displays bring digital content to glass surfaces without blocking light or visibility. Perfect for storefronts and modern architecture, they create eye-catching visuals while preserving openness and design aesthetics.',
        image:'/images/inspir/gl-1.jpg'
       },
       {
        title:'GLASS INTEGRATED DISPLAYS',
        description:'Modern and minimal, these transparent LED solutions blend seamlessly into glass structures, adding dynamic content without disrupting the space. Ideal for retail and commercial environments, they enhance visibility while maintaining a clean architectural look.',
        image:'/images/inspir/gl-2.jpg'
       }
      ] 
    },
    cases: [],
    products: {
      title: 'PRODUCT RANGE',
      description: '',
      category: 'glass',
    },
  },
}