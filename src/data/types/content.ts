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