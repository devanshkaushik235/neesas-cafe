
import { MenuItem, Review, GalleryItem, CareerOpening } from './types';

export const COLORS = {
  cream: '#FDFBF7',
  beige: '#F5F1EA',
  espresso: '#2C2420',
  warmEarth: '#5D4B42',
  taupe: '#A68B77',
  sand: '#D9C5B2',
};

export const GALLERY_DATA: GalleryItem[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=1200', caption: 'The morning mist in the café courtyard.', category: 'editorial' },
  { id: '2', url: 'https://i.pinimg.com/1200x/88/0a/79/880a7946cbcec3b7fb55c4564afb28f4.jpg', caption: 'Quiet companionship by the old oak table.', category: 'editorial' },
  { id: '3', url: 'https://i.pinimg.com/736x/1c/45/e3/1c45e33abc3faa007d4f1a462067475c.jpg', caption: 'Editorial silhouettes at dusk.', category: 'editorial' },
  { id: '4', url: 'https://i.pinimg.com/736x/50/cd/d0/50cdd0616edef7031dca07415b87045a.jpg', caption: 'Sunlight filtering through the brew bar.', category: 'cafe' },
  { id: '5', url: 'https://i.pinimg.com/1200x/ad/62/2f/ad622f4febb7ca97341f3232311642e2.jpg', caption: 'The precision of a slow-drip morning.', category: 'details' },
  { id: '6', url: 'https://i.pinimg.com/originals/13/fa/a8/13faa87bc74ea547c8476b9c0232155d.gif', caption: 'Ceramic textures and fresh roasts.', category: 'details' },
  { id: '7', url: 'https://i.pinimg.com/1200x/7e/6e/6d/7e6e6da3fbdf3375464ff067fc552810.jpg', caption: 'Community moments in the soft light.', category: 'cafe' },
  { id: '8', url: 'https://i.pinimg.com/736x/2b/91/c1/2b91c1c6503a8d8137b423e1d0fd3b40.jpg', caption: 'Artistic textures of the rustic porch.', category: 'editorial' },
  { id: '9', url: 'https://i.pinimg.com/736x/ff/6c/2e/ff6c2e4773e37edd9c9e3fb7158a32cb.jpg', caption: 'Quiet corners for slow readers.', category: 'cafe' },
  { id: '10', url: 'https://i.pinimg.com/736x/7b/05/5d/7b055df9c4c0f0d4a28d3149ef316524.jpg', caption: 'Natural light in the morning.', category: 'cafe' },
  { id: '11', url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1200', caption: 'Artisan textures of fresh bread.', category: 'details' },
  { id: '12', url: 'https://i.pinimg.com/originals/24/97/de/2497dee10fb7239cbae5e24bfd5f7377.gif', caption: 'The artistry of a perfect pour.', category: 'details' },
];

export const MENU_DATA: MenuItem[] = [
  { id: 'c1', name: 'Slow-Drip Espresso', description: 'Ethically sourced beans, double-filtered for clarity.', price: '$4.50', category: 'coffee', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800' },
  { id: 'c2', name: 'Vanilla Bean Latte', description: 'House-made vanilla syrup folded into luxuriously silky oat milk for a smooth, comforting finish.', price: '$5.75', category: 'coffee', image: 'https://i.pinimg.com/1200x/34/f8/cb/34f8cb708e8c9b7e84204a4b1cc7fb8d.jpg', isPopular: true },
  { id: 'c3', name: 'Ceremonial Matcha', description: 'Whisked to perfection, served with steamed almond milk.', price: '$6.25', category: 'coffee', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=800' },
  { id: 's1', name: 'Lavender Cold Brew', description: 'Infused with organic lavender for a calm morning.', price: '$6.50', category: 'specials', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800' },
  { id: 's2', name: 'Rose Petal Chai', description: 'A delicate blend of spices with crushed dried roses.', price: '$6.25', category: 'specials', image: 'https://i.pinimg.com/1200x/1f/f1/e9/1ff1e9997e87006c41876af041ae9d3b.jpg' },
  { id: 'n1', name: 'Honey Glazed Croissant', description: 'Layered with local honey and sea salt crystals.', price: '$4.25', category: 'snacks', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800' },
  { id: 'n2', name: 'Almond Morning Buns', description: 'Soft brioche with toasted almonds and orange zest.', price: '$5.50', category: 'snacks', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800' },
  { id: 'n3', name: 'Seasonal Fruit Galette', description: 'Hand-folded pastry with ripe local stone fruits.', price: '$7.00', category: 'snacks', image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800' },
];

export const REVIEWS_DATA: Review[] = [
  { id: 'r1', author: 'Elena Rose', text: "The most soothing space I've found in years. Every detail feels considered, from the weight of the ceramic mugs to the soft lighting.", rating: 5, date: 'October 12, 2024', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200' },
  { id: 'r2', author: 'Marcus Thorne', text: "A masterclass in minimal branding. The coffee is exceptional, and the atmosphere is exactly what a slow morning needs.", rating: 5, date: 'September 28, 2024', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200' },
  { id: 'r3', author: 'Sienna J.', text: "Editorial, calm, and beautiful. It feels like stepping into a Pinterest board. Highly recommend the Lavender Cold Brew.", rating: 4, date: 'November 2, 2024', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200' },
  { id: 'r4', author: 'Julian V.', text: "Quiet luxury in the form of a café. The attention to texture and tone is unmatched. A true hidden gem.", rating: 5, date: 'December 1, 2024', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' }
];

export const CAREERS_DATA: CareerOpening[] = [
  { id: 'j1', title: 'Senior Barista', type: 'Full-time', location: 'Downtown', description: 'Seeking an expert in slow-brewing methods with a passion for hospitality.' },
  { id: 'j2', title: 'Pastry Assistant', type: 'Part-time', location: 'Downtown', description: 'Work alongside our head baker to create artisanal treats.' }
];

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

export const EVENTS_DATA: Event[] = [
  {
  id: 'e1',
  title: 'Acoustic Sunday Mornings',
  date: 'Dec 15, 10:00 AM',
  description: 'Gentle live jazz and acoustic sets to accompany your morning brew.',
  image: 'https://i.pinimg.com/736x/af/77/fd/af77fdec1b54f6511662ab3665caa7a6.jpg'
},

  { id: 'e2', title: 'Latte Art Workshop', date: 'Dec 22, 2:00 PM', description: 'Learn the fundamentals of milk texture and pouring patterns with our leads.', image: 'https://i.pinimg.com/1200x/fe/9d/b0/fe9db05fc471810fd25947665ac89d70.jpg' }
];
