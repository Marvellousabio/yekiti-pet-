
import { Pet, Product, BlogPost, Testimonial } from './types.ts';

export const PETS: Pet[] = [
  {
    id: 'p1',
    name: 'Buddy',
    breed: 'Golden Retriever',
    category: 'Dogs',
    age: '12 weeks',
    price: 1200,
    description: 'A cheerful and loyal companion looking for a forever home.',
    vaccinated: true,
    healthGuarantee: true,
    personality: ['Friendly', 'Active', 'Good with kids'],
    images: ['https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=600']
  },
  {
    id: 'p2',
    name: 'Whiskers',
    breed: 'Scottish Fold',
    category: 'Cats',
    age: '10 weeks',
    price: 850,
    description: 'A calm and affectionate kitten with adorable folded ears.',
    vaccinated: true,
    healthGuarantee: true,
    personality: ['Quiet', 'Loving', 'Clean'],
    images: ['https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600']
  },
  {
    id: 'p3',
    name: 'Sky',
    breed: 'Blue Budgie',
    category: 'Birds',
    age: '6 months',
    price: 45,
    description: 'A vibrant and talkative budgie that loves to sing.',
    vaccinated: true,
    healthGuarantee: true,
    personality: ['Social', 'Vocal'],
    images: ['https://images.unsplash.com/photo-1522850949506-5855141de465?auto=format&fit=crop&q=80&w=600']
  },
  {
    id: 'p4',
    name: 'Clover',
    breed: 'Holland Lop',
    category: 'Small Animals',
    age: '4 months',
    price: 150,
    description: 'The softest bunny you will ever meet, loves carrots!',
    vaccinated: true,
    healthGuarantee: true,
    personality: ['Gentle', 'Curious'],
    images: ['https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80&w=600']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 's1',
    name: 'Premium Puppy Kibble',
    type: 'Food',
    price: 45.99,
    description: 'Grain-free high protein formula for growing pups.',
    image: 'https://images.unsplash.com/photo-1589924691106-073b69789e88?auto=format&fit=crop&q=80&w=400',
    rating: 4.8,
    stock: 25
  },
  {
    id: 'h1',
    name: 'Rugged Trail Harness',
    type: 'Hiking',
    price: 64.99,
    description: 'Heavy-duty harness for mountain adventures.',
    image: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&q=80&w=400',
    rating: 5.0,
    stock: 12,
    isHikingGear: true
  },
  {
    id: 'h2',
    name: 'Portable Travel Bowl',
    type: 'Hiking',
    price: 15.00,
    description: 'Collapsible silicone bowl for hydration on the go.',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400',
    rating: 4.5,
    stock: 50,
    isHikingGear: true
  },
  {
    id: 's2',
    name: 'Interactive Feather Wand',
    type: 'Toys',
    price: 12.99,
    description: 'Keep your cat entertained for hours.',
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=400',
    rating: 4.6,
    stock: 100
  },
  {
    id: 'h3',
    name: 'Weather-Proof Pet Tent',
    type: 'Hiking',
    price: 89.99,
    description: 'Cozy and protective outdoor shelter for camping.',
    image: 'https://images.unsplash.com/photo-1591768793355-74d7c526978a?auto=format&fit=crop&q=80&w=400',
    rating: 4.9,
    stock: 5,
    isHikingGear: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'How to Care for a New Puppy',
    excerpt: 'The first few weeks are crucial. Learn how to set your puppy up for success.',
    category: 'Puppy Care',
    date: 'Oct 12, 2023',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b2',
    title: 'Best Food for Kittens',
    excerpt: 'Nutrition plays a key role in growth. Here is what you should look for.',
    category: 'Nutrition',
    date: 'Oct 15, 2023',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b3',
    title: 'Preparing for Your First Hike',
    excerpt: 'Hiking with your dog requires preparation. Get our checklist here.',
    category: 'Adventure',
    date: 'Oct 20, 2023',
    image: 'https://images.unsplash.com/photo-1551730459-92db2a308d6a?auto=format&fit=crop&q=80&w=600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    petName: 'Bella',
    content: 'Yetkus Pet Store found me my soulmate! Bella is the healthiest, happiest pup. The staff walked me through every vaccination record and grooming tip.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 't2',
    name: 'Mark Thompson',
    petName: 'Max',
    content: 'The hiking gear is top-notch. We go mountain climbing every weekend now! The portable water bottle is a lifesaver for Max on long trails.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=mark'
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    petName: 'Nimbus',
    content: 'Finding a reputable bird breeder was hard until I found Yetkus. Nimbus is so social and healthy. Highly recommend their avian supplies too!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=elena'
  },
  {
    id: 't4',
    name: 'David Chen',
    petName: 'Buns',
    content: 'Bought our Holland Lop from here. The education they provide for first-time rabbit owners is incredible. Buns is part of the family now.',
    rating: 4,
    image: 'https://i.pravatar.cc/150?u=david'
  }
];
