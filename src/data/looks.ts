import { Look } from '@/types';

export const looks: Look[] = [
  {
    id: '1',
    slug: 'season-1-streetwear',
    title: 'Season 1 Streetwear',
    subtitle: 'The Original Blueprint',
    era: 'Season 1',
    vibe: 'Loud, unfiltered, skate-rat energy',
    heroColorFrom: '#e8c840',
    heroColorTo: '#2a2a2a',
    intro: 'Before the story got dark, the wardrobe was already iconic. Season 1 gave us the template: oversized everything, loud colors, graphic tees that screamed louder than the dialogue. Volcom, Metal Mulisha, baggy denim — this is where it all started.',
    keyPieces: [
      { name: 'Volcom x Sheckler Hoodie', description: 'The all-over print grail. Eye of Providence graphics.', productSlug: 'volcom-sheckler-hoodie', price: 150, matchType: 'exact' },
      { name: 'Levi\'s 550 Relaxed Jeans', description: 'Relaxed stonewash denim, wide leg, zero pretension.', productSlug: 'levis-550-relaxed-jeans', price: 50, matchType: 'budget' },
      { name: 'Metal Mulisha Pinkman Tee', description: 'The brand literally named a tee after him.', productSlug: 'metal-mulisha-pinkman-tee', price: 30, matchType: 'exact' },
      { name: 'Nike Air Max 90 (White)', description: 'Clean white kicks to ground the loud layers.', productSlug: 'nike-air-max-90-white', price: 130, matchType: 'inspired' },
    ],
    budgetAlternatives: [
      { name: 'Any oversized yellow hoodie', description: 'Check thrift stores — the more washed out, the better.', price: 25 },
      { name: 'Dickies 874 Work Pants', description: 'The ultimate budget baggy pant. Under $30.', productSlug: 'dickies-874-pants', price: 30, matchType: 'budget' },
      { name: 'Vans Old Skool', description: 'Classic skate shoes in black/white. Always in stock.', productSlug: 'vans-old-skool', price: 70, matchType: 'inspired' },
    ],
    howToWearItNow: 'The key is proportions. Everything should be slightly oversized but not sloppy. Layer the zip hoodie over a plain white tee, leave it unzipped. Let the jeans stack at the ankle. Keep the shoes clean — that contrast between the worn-in layers and fresh kicks is what makes this work. Skip the flame graphics unless you can pull them off with complete sincerity.',
    tags: ['season-1', 'streetwear', 'volcom', 'iconic'],
    featured: true,
  },
  {
    id: '2',
    slug: 'loud-hoodie-era',
    title: 'The Loud Hoodie Era',
    subtitle: 'Color as Character Development',
    era: 'Seasons 1-3',
    vibe: 'Bold, defiant, chromatic chaos',
    heroColorFrom: '#c0392b',
    heroColorTo: '#8b1a1a',
    intro: 'If there was one consistent thread through the early seasons, it was the hoodies. Not subtle earth tones — full-saturation primary colors. Red, yellow, purple. The hoodies weren\'t just clothing, they were mood rings. Over 62 episodes, Jesse wore 53 unique hoodies. Brands like Volcom, Kenpo, and SRH made up the rotation.',
    keyPieces: [
      { name: 'Volcom x Sheckler Hoodie', description: 'The original. All-over print optimism.', productSlug: 'volcom-sheckler-hoodie', price: 150, matchType: 'exact' },
      { name: 'Champion Reverse Weave (Red)', description: 'Heavyweight crimson pullover. Confidence with an edge.', productSlug: 'champion-red-hoodie', price: 55, matchType: 'budget' },
      { name: 'Kenpo Crown Print Hoodie', description: 'Money symbols, crowns — peak Jesse.', productSlug: 'kenpo-printed-hoodie', price: 80, matchType: 'exact' },
      { name: 'Carhartt Beanie', description: 'The constant. Every hoodie needs its beanie.', productSlug: 'carhartt-black-beanie', price: 20, matchType: 'exact' },
    ],
    budgetAlternatives: [
      { name: 'Champion Reverse Weave Hoodie', description: 'Available in most of the right colors. Heavy weight.', price: 55 },
      { name: 'Carhartt A18 Beanie', description: 'The #1 selling hat on Amazon. Under $20.', productSlug: 'carhartt-black-beanie', price: 20, matchType: 'exact' },
    ],
    howToWearItNow: 'Commit to the color. Don\'t hedge with a navy or a burgundy — go full red, full yellow. The hoodie is the outfit. Everything else supports it: dark jeans, simple shoes, maybe a chain. The beanie ties it together. Wear the hood down unless it\'s actually cold.',
    tags: ['hoodies', 'bold', 'color', 'volcom', 'kenpo'],
    featured: true,
  },
  {
    id: '3',
    slug: 'beanies-and-baggy-fits',
    title: 'Beanies & Baggy Fits',
    subtitle: 'The Uniform',
    era: 'All Seasons',
    vibe: 'Effortless, layered, perma-casual',
    heroColorFrom: '#1a1a1a',
    heroColorTo: '#3a3a3a',
    intro: 'Strip away the loud colors and the plot, and you\'re left with the foundation: a Carhartt beanie pulled low, Dickies or baggy denim, and the general energy of someone who got dressed in 30 seconds and somehow nailed it. This is the everyday uniform.',
    keyPieces: [
      { name: 'Carhartt Knit Cuffed Beanie', description: 'Ribbed acrylic knit, fold-up cuff, Carhartt label.', productSlug: 'carhartt-black-beanie', price: 20, matchType: 'exact' },
      { name: 'Dickies 874 Work Pants', description: 'Straight leg, relaxed fit, durable twill.', productSlug: 'dickies-874-pants', price: 30, matchType: 'budget' },
      { name: 'Metal Mulisha Pinkman Tee', description: 'Graphic tee from a brand Jesse actually wore on screen.', productSlug: 'metal-mulisha-pinkman-tee', price: 30, matchType: 'exact' },
    ],
    budgetAlternatives: [
      { name: 'Dickies 874 in Olive', description: 'Same pant, earth tone. Utility without trying.', price: 30 },
      { name: 'Any thrifted band tee', description: 'The more faded, the better. Bonus if nobody recognizes the band.', price: 8 },
    ],
    howToWearItNow: 'This is the easiest look to pull off. Beanie, oversized tee, baggy pants, clean shoes. Done. The trick is fit — everything should drape, not drown. Tuck nothing in. Cuff nothing. Let gravity do the styling.',
    tags: ['beanie', 'baggy', 'carhartt', 'dickies', 'everyday'],
    featured: true,
  },
  {
    id: '4',
    slug: 'desert-chaos-style',
    title: 'Desert Chaos Style',
    subtitle: 'Albuquerque After Dark',
    era: 'Seasons 3-4',
    vibe: 'Dusty, tonal, low-key menacing',
    heroColorFrom: '#c4b9a8',
    heroColorTo: '#5c5c4a',
    intro: 'As the story moved deeper into the desert, the wardrobe followed. The loud primaries gave way to something more muted — sand tones, olive, faded earth colors. Carhartt workwear, Dickies utility pants, and the kind of palette that says you\'ve seen things.',
    keyPieces: [
      { name: 'Carhartt Washed Duck Jacket', description: 'Heavyweight duck canvas. The desert, wearable.', productSlug: 'carhartt-washed-duck-jacket', price: 100, matchType: 'inspired' },
      { name: 'Dickies 874 (Olive/Khaki)', description: 'Relaxed work pants in earth tones.', productSlug: 'dickies-874-pants', price: 30, matchType: 'budget' },
      { name: 'Carhartt Beanie', description: 'Dark anchor for the dusty palette.', productSlug: 'carhartt-black-beanie', price: 20, matchType: 'exact' },
    ],
    budgetAlternatives: [
      { name: 'Any sand/tan work jacket', description: 'Uniqlo or Carhartt WIP in beige gets close.', price: 60 },
      { name: 'Khaki work pants', description: 'Dickies in sand/khaki. Under $30.', price: 30 },
    ],
    howToWearItNow: 'Go tonal. Pick two or three earth tones and build the outfit around them. The jacket is the centerpiece — everything else should be quiet. Dark beanie, neutral pants, muted shoes. Think desert at dusk, not desert at a costume party.',
    tags: ['desert', 'carhartt', 'earth-tones', 'workwear', 'tonal'],
    featured: true,
  },
  {
    id: '5',
    slug: 'the-windbreaker-files',
    title: 'The Windbreaker Files',
    subtitle: 'Nylon and Audacity',
    era: 'Season 2',
    vibe: 'Reckless, sporty, early-2000s nostalgia',
    heroColorFrom: '#c0392b',
    heroColorTo: '#e8c840',
    intro: 'The windbreaker era was brief but unforgettable. Colorblock nylon, loud zippers, the kind of jacket that makes noise when you walk. Combined with baggy Levi\'s and a Cuban link chain, it was the sartorial equivalent of making an entrance.',
    keyPieces: [
      { name: 'Levi\'s 550 Relaxed Jeans', description: 'Wide-leg stonewash to balance the loud top half.', productSlug: 'levis-550-relaxed-jeans', price: 50, matchType: 'budget' },
      { name: 'Cuban Link Chain', description: 'Bold accessory to match bold outerwear.', productSlug: 'cuban-link-chain', price: 16, matchType: 'inspired' },
      { name: 'Vans Old Skool', description: 'Clean skate shoes. The right foundation.', productSlug: 'vans-old-skool', price: 70, matchType: 'inspired' },
    ],
    budgetAlternatives: [
      { name: 'Vintage windbreaker from eBay', description: 'Search "90s colorblock windbreaker." Trust the algorithm.', price: 30 },
      { name: 'Stainless steel Cuban chain', description: 'Amazon has solid options under $20.', productSlug: 'cuban-link-chain', price: 16, matchType: 'inspired' },
    ],
    howToWearItNow: 'The windbreaker is the statement — let it speak. Keep everything else simple and slightly oversized. The jeans should be relaxed, the shoes should be clean. Add one accessory maximum. This isn\'t about layering, it\'s about impact.',
    tags: ['windbreaker', 'colorblock', 'sporty', 'bold'],
    featured: true,
  },
  {
    id: '6',
    slug: 'late-season-minimalism',
    title: 'Late Season Minimalism',
    subtitle: 'When the Wardrobe Got Quiet',
    era: 'Season 5',
    vibe: 'Subdued, worn-in, understated weight',
    heroColorFrom: '#3a3a3a',
    heroColorTo: '#888888',
    intro: 'By the final stretch, the wardrobe had been through as much as the character. The loud Volcom hoodies were gone, replaced by SRH brand and muted greys and blacks. It was quieter, but it carried more weight. The final 8 episodes saw Jesse in SRH hoodies and stripped-back basics.',
    keyPieces: [
      { name: 'SRH Spade Logo Hoodie', description: 'The final-season hoodie. Collector\'s piece.', productSlug: 'srh-hoodie', price: 65, matchType: 'exact' },
      { name: 'Carhartt Beanie', description: 'The one constant through every era.', productSlug: 'carhartt-black-beanie', price: 20, matchType: 'exact' },
      { name: 'Dickies 874 (Black)', description: 'Simple, dark, utility. Final-act energy.', productSlug: 'dickies-874-pants', price: 30, matchType: 'budget' },
    ],
    budgetAlternatives: [
      { name: 'Any grey zip hoodie', description: 'H&M, Uniqlo, whatever. Keep it plain.', price: 25 },
      { name: 'Plain black tee', description: 'Gildan heavy cotton. Under $10.', price: 8 },
    ],
    howToWearItNow: 'Less is more in the final act. Dark hoodie over a black tee, Dickies or dark jeans, beanie, done. No color, no graphics, no statement pieces. The statement is the restraint. Let the fit do the talking — everything should be slightly oversized but intentional.',
    tags: ['minimal', 'srh', 'subdued', 'season-5', 'final'],
    featured: true,
  },
];

export function getLookBySlug(slug: string): Look | undefined {
  return looks.find((l) => l.slug === slug);
}

export function getFeaturedLooks(): Look[] {
  return looks.filter((l) => l.featured);
}
