export interface ProductItem {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number; // For showcasing "Low Price" discounts
  unit: string;
  image: string;
  isPopular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  iconName: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
  tag?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}
