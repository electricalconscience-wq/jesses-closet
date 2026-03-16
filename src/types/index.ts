export type MatchType = 'exact' | 'inspired' | 'budget';

export type Category = 'hoodies' | 'jackets' | 'pants' | 'tees' | 'accessories' | 'shoes';

export type Era = 'season-1' | 'season-2' | 'season-3' | 'season-4' | 'season-5' | 'all-seasons';

export type BuySource = 'amazon' | 'ebay' | 'etsy' | 'brand-site' | 'grailed';

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  matchType: MatchType;
  category: Category;
  era?: Era;
  episode?: string;
  tags: string[];
  colorHex: string;
  colorName: string;
  imageUrl?: string;
  whyItMatches: string;
  affiliateUrl: string;
  buySource: BuySource;
  affiliateNote?: string;
  relatedSlugs: string[];
  featured: boolean;
}

export interface LookPiece {
  name: string;
  description: string;
  productSlug?: string;
  price?: number;
  matchType?: MatchType;
}

export interface Look {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  era: string;
  vibe: string;
  heroColorFrom: string;
  heroColorTo: string;
  intro: string;
  keyPieces: LookPiece[];
  budgetAlternatives: LookPiece[];
  howToWearItNow: string;
  tags: string[];
  featured: boolean;
}
