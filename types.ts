
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'coffee' | 'specials' | 'snacks' | 'seasonal';
  image?: string;
  isPopular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
  date: string;
  avatar?: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  category: 'editorial' | 'cafe' | 'details';
}

export interface CareerOpening {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
}
