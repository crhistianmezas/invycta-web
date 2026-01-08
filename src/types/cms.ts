// src/types/cms.ts

export interface WebContent {
  id: string;
  sectionType: 'HERO' | 'SECTOR_CARD' | 'PRODUCT_ROW' | 'CLIENT_LOGO' | 'TESTIMONIAL';
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  ctaText?: string;
  ctaLink?: string;
  displayOrder: number;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  image?: string;
  slug?: string;
  price?: number;
  categoryId?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  products?: Product[];
}

export interface Solution {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  products?: Product[];
}