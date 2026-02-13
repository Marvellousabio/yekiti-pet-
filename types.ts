
export type PetCategory = 'Dogs' | 'Cats' | 'Birds' | 'Small Animals';

export interface Pet {
  id: string;
  name: string;
  breed: string;
  category: PetCategory;
  age: string;
  price: number;
  description: string;
  vaccinated: boolean;
  healthGuarantee: boolean;
  personality: string[];
  images: string[];
}

export type ProductType = 'Food' | 'Toys' | 'Grooming' | 'Beds' | 'Hiking' | 'Clothing' | 'Health';

export interface Product {
  id: string;
  name: string;
  type: ProductType;
  price: number;
  description: string;
  image: string;
  rating: number;
  stock: number;
  isHikingGear?: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  type: 'pet' | 'product';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  petName: string;
  content: string;
  rating: number;
  image: string;
}
