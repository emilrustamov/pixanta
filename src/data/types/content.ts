export type MarketSlug =
  | 'outdoor'
  | 'rental'
  | 'indoor'
  | 'floor'
  | 'glass'

export type MediaType = 'image' | 'video'

export interface HeroBlock {
  title: string
  subtitle?: string
  mediaType: MediaType
  media: string
}

export interface IntroBlock {
  title: string
  paragraphs: string[]
}

export interface FormBlock {
  title: string
  description?: string
}

export interface InspiringItem {
  title: string
  description: string
  image: string
}

export interface InspiringBlock {
  items: InspiringItem[]
}

export interface CaseItem {
  title: string
  image: string
  href: string
}

export interface ProductsBlock {
  title: string
  description: string
  category: MarketSlug
}

export interface MarketPage {
  slug: MarketSlug
  hero: HeroBlock
  intro: IntroBlock
  form: FormBlock
  inspiring: InspiringBlock
  cases: CaseItem[]
  products: ProductsBlock
}

export interface Product {
  slug: string
  title: string
  category: MarketSlug
  image: string
  href: string
  description: string
}

export interface ProductHeroBlock {
  title: string
  subtitle?: string
  description?: string
  mediaType: 'image' | 'video'
  media: string
}

export interface ProductAboutBlock {
  title: string
  subtitle?: string
  paragraphs: string[]
}

export interface ProductMediaSlide {
  type: 'image' | 'video'
  src: string
  poster?: string
}

export interface ProductMediaBlock {
  slides: ProductMediaSlide[]
}

export interface ProductImageBlock {
  image: string
  alt?: string
}

export interface ProductSpecMetric {
  value: string
  label: string
}

export interface ProductSpecRow {
  label: string
  value: string
}

export interface ProductSpecGroup {
  title: string
  left: ProductSpecRow[]
  right: ProductSpecRow[]
}

export interface ProductSpecificationsBlock {
  title: string
  metrics: ProductSpecMetric[]
  groups: ProductSpecGroup[]
}
export interface ProductFeatureItem {
  title: string
  description: string
  image: string
}

export interface ProductFeaturesBlock {
  title: string
  items: ProductFeatureItem[]
}
export interface ProductPage {
  slug: string
  hero: ProductHeroBlock
  about: ProductAboutBlock
  media: ProductMediaBlock
  showcase: ProductImageBlock
  specifications: ProductSpecificationsBlock
  features: ProductFeaturesBlock
}