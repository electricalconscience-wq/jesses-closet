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
    intro: "Before the story got dark, the wardrobe was already iconic. Season 1 gave us the template: oversized everything, loud colors, graphic tees that screamed louder than the dialogue. This is where it all started — baggy denim, yellow hoodies, and the kind of confidence that comes from not knowing what you're getting into.",
    keyPieces: [
      { name: 'Oversized Yellow Zip Hoodie', description: 'The defining piece. Canary yellow, heavy cotton, zip front.', productSlug: 'oversized-yellow-zip-hoodie', price: 89, matchType: 'exact' },
      { name: 'Baggy Washed Denim', description: 'Relaxed indigo wash, wide leg, zero pretension.', productSlug: 'baggy-washed-denim', price: 78, matchType: 'exact' },
      { name: 'Graphic Long Sleeve', description: 'Flame graphics, oversized fit, early-2000s heat.', productSlug: 'graphic-long-sleeve-flame', price: 45, matchType: 'inspired' },
      { name: 'White Sneakers', description: 'Clean low-tops to ground the loud layers.', productSlug: 'white-leather-sneakers', price: 95, matchType: 'budget' },
    ],
    budgetAlternatives: [
      { name: 'Any oversized yellow hoodie', description: 'Check thrift stores — the more washed out, the better.', price: 25 },
      { name: 'Relaxed-fit light wash jeans', description: "Levi's 550 or similar. Go up two sizes.", price: 35 },
      { name: 'White canvas sneakers', description: "Vans Old Skool in white or any plain white low-top.", price: 55 },
    ],
    howToWearItNow: "The key is proportions. Everything should be slightly oversized but not sloppy. Layer the zip hoodie over a plain white tee, leave it unzipped. Let the jeans stack at the ankle. Keep the shoes clean — that contrast between the worn-in layers and fresh kicks is what makes this work today.",
    tags: ['season-1', 'streetwear', 'yellow', 'iconic'],
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
    intro: "If there was one consistent thread through the early seasons, it was the hoodies. Not subtle earth tones or muted basics — full-saturation primary colors that announced every entrance. Red, yellow, blue. The hoodies weren't just clothing, they were mood rings.",
    keyPieces: [
      { name: 'Oversized Yellow Zip Hoodie', description: 'The original. Optimism in cotton form.', productSlug: 'oversized-yellow-zip-hoodie', price: 89, matchType: 'exact' },
      { name: 'Oversized Red Hoodie', description: 'Deep crimson pullover. Confidence with an edge.', productSlug: 'oversized-red-hoodie', price: 82, matchType: 'exact' },
      { name: 'Black Skate Beanie', description: 'The constant. Every hoodie needs its beanie.', productSlug: 'black-skate-beanie', price: 28, matchType: 'exact' },
    ],
    budgetAlternatives: [
      { name: 'Champion Reverse Weave Hoodie', description: 'Available in most of the right colors. Heavy weight.', price: 45 },
      { name: 'Carhartt WIP Beanie', description: 'Close enough to the original. Ribbed, cuffed.', price: 20 },
    ],
    howToWearItNow: "Commit to the color. Don't hedge with a navy or a burgundy — go full red, full yellow. The hoodie is the outfit. Everything else supports it: dark jeans, simple shoes, maybe a chain. The beanie ties it together.",
    tags: ['hoodies', 'bold', 'color', 'layering'],
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
    intro: "Strip away the loud colors and the plot, and you're left with the foundation: a beanie pulled low, everything cut two sizes too big, and the general energy of someone who got dressed in 30 seconds and somehow nailed it. This is the everyday uniform.",
    keyPieces: [
      { name: 'Black Skate Beanie', description: 'Ribbed knit, tight cuff, zero logos.', productSlug: 'black-skate-beanie', price: 28, matchType: 'exact' },
      { name: 'Baggy Cargo Pants', description: 'Wide-leg, oversized pockets, olive drab.', productSlug: 'baggy-cargo-pants', price: 68, matchType: 'exact' },
      { name: 'Vintage Band Tee', description: 'Washed black, distressed graphic, crewneck.', productSlug: 'vintage-band-tee', price: 38, matchType: 'inspired' },
    ],
    budgetAlternatives: [
      { name: 'Dickies 874 Work Pants', description: 'Loose fit in olive or black. Utility without trying.', price: 30 },
      { name: 'Any thrifted band tee', description: 'The more faded, the better. Bonus if nobody recognizes the band.', price: 8 },
    ],
    howToWearItNow: "This is the easiest look to pull off. Beanie, oversized tee, baggy pants, clean shoes. Done. The trick is fit — everything should drape, not drown. Tuck nothing in. Cuff nothing. Let gravity do the styling.",
    tags: ['beanie', 'baggy', 'everyday', 'minimal'],
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
    intro: "As the story moved deeper into the desert, the wardrobe followed. The loud primaries gave way to something more muted — sand tones, olive, faded earth colors. It was still oversized, still streetwear, but now it matched the landscape.",
    keyPieces: [
      { name: 'Desert Tone Puffer', description: 'Sand-colored heavyweight puffer. The desert, wearable.', productSlug: 'desert-tone-puffer', price: 145, matchType: 'inspired' },
      { name: 'Baggy Cargo Pants', description: 'Olive wide-legs with utility pockets.', productSlug: 'baggy-cargo-pants', price: 68, matchType: 'exact' },
      { name: 'Black Skate Beanie', description: 'Dark anchor for the dusty palette.', productSlug: 'black-skate-beanie', price: 28, matchType: 'exact' },
    ],
    budgetAlternatives: [
      { name: 'Any sand/tan puffer jacket', description: 'Uniqlo Ultra Light Down in beige gets close.', price: 60 },
      { name: 'Khaki work pants', description: 'Carhartt or Dickies in sand/khaki.', price: 35 },
    ],
    howToWearItNow: "Go tonal. Pick two or three earth tones and build the outfit around them. The puffer is the centerpiece — everything else should be quiet. Dark beanie, neutral pants, muted shoes. Think desert at dusk.",
    tags: ['desert', 'earth-tones', 'puffer', 'tonal'],
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
    intro: "The windbreaker era was brief but unforgettable. Colorblock nylon, loud zippers, the kind of jacket that makes noise when you walk. It was the sartorial equivalent of making an entrance — impossible to ignore, slightly obnoxious, and somehow completely cool.",
    keyPieces: [
      { name: 'Colorblock Windbreaker', description: 'Red and black nylon with zip front.', productSlug: 'colorblock-windbreaker', price: 115, matchType: 'inspired' },
      { name: 'Baggy Washed Denim', description: 'Wide-leg indigo to balance the loud top half.', productSlug: 'baggy-washed-denim', price: 78, matchType: 'exact' },
      { name: 'Chunky Silver Chain', description: 'Bold accessory to match bold outerwear.', productSlug: 'chunky-silver-chain', price: 35, matchType: 'inspired' },
    ],
    budgetAlternatives: [
      { name: 'Vintage windbreaker from eBay', description: 'Search "90s colorblock windbreaker." Trust the algorithm.', price: 30 },
      { name: 'Stainless steel chain', description: 'Amazon basics. Nobody will know.', price: 12 },
    ],
    howToWearItNow: "The windbreaker is the statement — let it speak. Keep everything else simple and slightly oversized. The jeans should be relaxed, the shoes should be clean. Add one accessory maximum.",
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
    intro: "By the final stretch, the wardrobe had been through as much as the character. The loud hoodies were gone, replaced by muted greys and blacks. Athletic jackets, simple tees, the kind of clothes you wear when you've stopped trying to impress anyone.",
    keyPieces: [
      { name: 'Grey Zip Athletic Jacket', description: 'Heather grey track jacket with white piping.', productSlug: 'grey-zip-athletic-jacket', price: 72, matchType: 'budget' },
      { name: 'Vintage Band Tee', description: 'Faded black, underneath everything.', productSlug: 'vintage-band-tee', price: 38, matchType: 'inspired' },
      { name: 'Black Skate Beanie', description: 'The one constant through every era.', productSlug: 'black-skate-beanie', price: 28, matchType: 'exact' },
    ],
    budgetAlternatives: [
      { name: 'Any grey zip hoodie', description: 'H&M, Uniqlo, whatever. Keep it plain.', price: 25 },
      { name: 'Plain black tee', description: 'Gildan heavy cotton. Under $10.', price: 8 },
    ],
    howToWearItNow: "Less is more in the final act. Grey jacket over a black tee, dark jeans or joggers, beanie, done. No color, no graphics, no statement pieces. The statement is the restraint.",
    tags: ['minimal', 'grey', 'subdued', 'season-5'],
    featured: true,
  },
];

export function getLookBySlug(slug: string): Look | undefined {
  return looks.find((l) => l.slug === slug);
}

export function getFeaturedLooks(): Look[] {
  return looks.filter((l) => l.featured);
}
