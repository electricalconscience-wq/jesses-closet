export type MatchType = 'exact' | 'inspired' | 'budget';

export type Category = 'hoodies' | 'jackets' | 'pants' | 'tees' | 'accessories' | 'shoes';

export type Era = 'season-1' | 'season-2' | 'season-3' | 'season-4' | 'season-5';

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  description: string;
  matchType: MatchType;
  category: Category;
  era?: Era;
  tags: string[];
  colorHex: string;
  colorName: string;
  whyItMatches: string;
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
