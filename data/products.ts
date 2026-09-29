export type Category = 'Fashion' | 'Electronics' | 'Accessories' | 'Lifestyle';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  colors: string[];
  sizes?: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  inStock: boolean;
  description: string;
  specs: Record<string, string>;
}

const img = (id: string, w = 600, h = 750) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format`;

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Minimalist Court Sneakers',
    category: 'Fashion',
    price: 189,
    rating: 4.7,
    reviews: 124,
    image: img('photo-1542291026-7eec264c27ff'),
    images: [
      img('photo-1542291026-7eec264c27ff', 800, 1000),
      img('photo-1542291026-7eec264c27ff', 800, 1000),
    ],
    colors: ['#FFFFFF', '#111111', '#C9A87C'],
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    isBestSeller: true,
    inStock: true,
    description: "Crafted from premium full-grain leather, these court sneakers define effortless minimalism. Vulcanized rubber sole, padded collar, and an orthopedic insole designed for all-day wear without compromise.",
    specs: {
      'Material': 'Full-grain leather upper',
      'Sole': 'Vulcanized rubber',
      'Lining': 'Organic cotton canvas',
      'Fit': 'True to size',
      'Care': 'Wipe clean with damp cloth',
    },
  },
  {
    id: 'p2',
    name: 'Studio Wireless Headphones',
    category: 'Electronics',
    price: 349,
    originalPrice: 449,
    discount: 22,
    rating: 4.9,
    reviews: 287,
    image: img('photo-1505740420928-5e560c06d30e'),
    images: [
      img('photo-1505740420928-5e560c06d30e', 800, 1000),
      img('photo-1491553895911-0055eca6402d', 800, 1000),
    ],
    colors: ['#111111', '#FFFFFF', '#C0C0C0'],
    isBestSeller: true,
    inStock: true,
    description: "Engineered for audiophiles who demand precision. Adaptive active noise cancellation, a 40-hour battery life, and 40mm precision drivers deliver reference-class sound in a lightweight over-ear design.",
    specs: {
      'Driver': '40mm neodymium dynamic',
      'Frequency': '20Hz – 20kHz',
      'Battery': '40 hours ANC on',
      'Connection': 'Bluetooth 5.2 / 3.5mm',
      'Weight': '250g',
    },
  },
  {
    id: 'p3',
    name: 'Heritage Leather Tote',
    category: 'Accessories',
    price: 285,
    rating: 4.8,
    reviews: 93,
    image: img('photo-1548036328-c9fa89d128fa'),
    images: [
      img('photo-1548036328-c9fa89d128fa', 800, 1000),
    ],
    colors: ['#8B6914', '#111111', '#C19A6B'],
    inStock: true,
    description: "Hand-stitched from vegetable-tanned Italian leather, this tote develops a rich patina over time — becoming uniquely yours. Reinforced base, interior organiser pocket, and solid brass hardware.",
    specs: {
      'Material': 'Vegetable-tanned Italian leather',
      'Dimensions': '38 × 32 × 12 cm',
      'Closure': 'Magnetic snap',
      'Lining': 'Cotton canvas',
      'Hardware': 'Solid brass',
    },
  },
  {
    id: 'p4',
    name: 'Merino Wool Crewneck',
    category: 'Fashion',
    price: 145,
    originalPrice: 195,
    discount: 26,
    rating: 4.6,
    reviews: 156,
    image: img('photo-1434389677669-e08b4cac3105'),
    images: [
      img('photo-1434389677669-e08b4cac3105', 800, 1000),
    ],
    colors: ['#F5F0E8', '#111111', '#6B8CAE', '#8B7355'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    description: "Ultra-fine 18-micron Merino wool sourced from certified New Zealand farms. Anti-pilling finish, naturally temperature-regulating, and impossibly soft against bare skin.",
    specs: {
      'Material': '100% Merino wool, 18 micron',
      'Fit': 'Regular',
      'Wash': 'Machine cold, lay flat to dry',
      'Origin': 'Made in Italy',
    },
  },
  {
    id: 'p5',
    name: 'Apex Smart Watch',
    category: 'Electronics',
    price: 599,
    rating: 4.8,
    reviews: 341,
    image: img('photo-1523275335684-37898b6baf30'),
    images: [
      img('photo-1523275335684-37898b6baf30', 800, 1000),
    ],
    colors: ['#111111', '#C0C0C0', '#C9A87C'],
    isNew: true,
    inStock: true,
    description: "Precision health tracking meets refined design. Sapphire crystal AMOLED display, aerospace-grade titanium case, and 18-day battery life — with advanced cardiovascular and recovery metrics.",
    specs: {
      'Case': 'Titanium, 44mm',
      'Display': 'AMOLED, sapphire crystal',
      'Battery': '18 days typical',
      'Water resistance': '100m',
      'Sensors': 'ECG, SpO2, skin temp',
    },
  },
  {
    id: 'p6',
    name: 'Polarized Aviator Sunglasses',
    category: 'Accessories',
    price: 129,
    rating: 4.5,
    reviews: 78,
    image: img('photo-1508296695146-257a814070b4'),
    images: [
      img('photo-1508296695146-257a814070b4', 800, 1000),
    ],
    colors: ['#C9A87C', '#111111'],
    inStock: true,
    description: "Polarized mineral glass lenses in a hand-crafted stainless steel frame. UV400 protection, anti-reflective inner coating, and spring-loaded hinges for a lifetime of flawless wear.",
    specs: {
      'Frame': 'Stainless steel',
      'Lens': 'Polarized mineral glass',
      'Protection': 'UV400',
      'Weight': '18g',
      'Case': 'Microfiber pouch included',
    },
  },
  {
    id: 'p7',
    name: 'Noir Concrete Candle',
    category: 'Lifestyle',
    price: 68,
    rating: 4.9,
    reviews: 212,
    image: img('photo-1572635196237-14b3f281503f'),
    images: [
      img('photo-1572635196237-14b3f281503f', 800, 1000),
    ],
    colors: ['#E5E3DE', '#111111'],
    inStock: true,
    description: "Hand-poured 100% soy wax in an artisan handcast concrete vessel. Notes of cedarwood, black pepper, and vetiver. A 60-hour burn that transforms any space.",
    specs: {
      'Wax': '100% soy wax',
      'Scent notes': 'Cedarwood, black pepper, vetiver',
      'Burn time': '60 hours',
      'Vessel': 'Handcast concrete',
      'Weight': '350g',
    },
  },
  {
    id: 'p8',
    name: 'Tailored Linen Blazer',
    category: 'Fashion',
    price: 385,
    originalPrice: 485,
    discount: 21,
    rating: 4.7,
    reviews: 67,
    image: img('photo-1594938298603-c8148c4b984c'),
    images: [
      img('photo-1594938298603-c8148c4b984c', 800, 1000),
    ],
    colors: ['#F5F0E8', '#111111', '#8B7355'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    description: "Summer-weight linen, structured for a sharp silhouette. Fully lined in cupro, notched lapel, and concealed front buttons for a clean profile. Effortless from the office to the evening.",
    specs: {
      'Material': '100% Italian linen',
      'Lining': '100% cupro',
      'Fit': 'Tailored',
      'Origin': 'Made in Portugal',
    },
  },
  {
    id: 'p9',
    name: 'Compact Mechanical Keyboard',
    category: 'Electronics',
    price: 245,
    rating: 4.8,
    reviews: 183,
    image: img('photo-1587829741301-dc798b83add3'),
    images: [
      img('photo-1587829741301-dc798b83add3', 800, 1000),
    ],
    colors: ['#F5F0E8', '#111111'],
    isNew: true,
    inStock: true,
    description: "A 65% layout compact keyboard with silent tactile switches, CNC-machined aluminum frame, and hot-swappable PCB. Gasket-mounted for a soft, premium typing feel.",
    specs: {
      'Layout': '65% (67 keys)',
      'Switches': 'Silent tactile (lubed)',
      'Frame': 'CNC aluminum',
      'Mount': 'Gasket',
      'Connection': 'USB-C / Bluetooth 5.0',
    },
  },
  {
    id: 'p10',
    name: 'Slim Leather Card Case',
    category: 'Accessories',
    price: 89,
    rating: 4.6,
    reviews: 145,
    image: img('photo-1527689368864-3a821dbccc34'),
    images: [
      img('photo-1527689368864-3a821dbccc34', 800, 1000),
    ],
    colors: ['#111111', '#8B6914', '#C19A6B'],
    inStock: true,
    description: "RFID-blocking full-grain leather card case, designed for front-pocket carry. Holds 6 cards and folded bills. Stitched by hand, built to age beautifully.",
    specs: {
      'Material': 'Full-grain leather',
      'Capacity': '6 cards + cash',
      'RFID': 'Blocking layer',
      'Dimensions': '10 × 7 × 0.6 cm',
    },
  },
  {
    id: 'p11',
    name: 'Ultrasonic Oil Diffuser',
    category: 'Lifestyle',
    price: 95,
    rating: 4.7,
    reviews: 108,
    image: img('photo-1602143407151-7111542de6e8'),
    images: [
      img('photo-1602143407151-7111542de6e8', 800, 1000),
    ],
    colors: ['#FFFFFF', '#111111'],
    inStock: true,
    description: "Whisper-quiet ultrasonic mist with adjustable volume, 8-hour continuous run, and a soft ambient light ring. Matte ceramic finish that blends into any interior.",
    specs: {
      'Tank': '300ml',
      'Run time': 'Up to 8 hours',
      'Coverage': 'Up to 30m²',
      'Finish': 'Matte ceramic',
      'Timer': '1 / 3 / 6 / 8 hr',
    },
  },
  {
    id: 'p12',
    name: 'Oversize Cotton Overshirt',
    category: 'Fashion',
    price: 115,
    rating: 4.5,
    reviews: 92,
    image: img('photo-1598300042247-d088f8ab3a91'),
    images: [
      img('photo-1598300042247-d088f8ab3a91', 800, 1000),
    ],
    colors: ['#F5F0E8', '#111111', '#6B8CAE'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    isNew: true,
    inStock: true,
    description: "Double-woven organic cotton in a relaxed oversized silhouette. Wear open as a layer or buttoned as a shirt. Preshrunk, stone-washed, and soft from the very first wear.",
    specs: {
      'Material': '100% organic cotton',
      'Weave': 'Double-woven',
      'Fit': 'Oversized',
      'Care': 'Machine wash 30°, tumble dry low',
    },
  },
];

export const categoryData = [
  {
    id: 'Fashion',
    name: 'Fashion',
    count: 4,
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=800&fit=crop&auto=format',
    description: 'Contemporary wardrobe essentials',
  },
  {
    id: 'Electronics',
    name: 'Electronics',
    count: 3,
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=800&fit=crop&auto=format',
    description: 'Precision-engineered technology',
  },
  {
    id: 'Accessories',
    name: 'Accessories',
    count: 3,
    image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=600&h=800&fit=crop&auto=format',
    description: 'Refined everyday carry',
  },
  {
    id: 'Lifestyle',
    name: 'Lifestyle',
    count: 2,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop&auto=format',
    description: 'Elevated living objects',
  },
];
