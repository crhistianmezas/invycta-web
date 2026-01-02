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