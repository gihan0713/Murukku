import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Spicy Murukku',
    description: 'Traditional crunchy murukku with a spicy kick. Perfect for tea time.',
    price: 350,
    weight: '200g',
    spicyLevel: 'Hot',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Garlic Murukku',
    description: 'Savory murukku infused with roasted garlic flavor.',
    price: 380,
    weight: '200g',
    spicyLevel: 'Medium',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Sweet & Spicy Mixture',
    description: 'A delightful mix of murukku, peanuts, and fried lentils with a sweet twist.',
    price: 450,
    weight: '250g',
    spicyLevel: 'Mild',
    image: 'https://images.unsplash.com/photo-1613243555988-441166d4d6fd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Hot Butter Murukku',
    description: 'Rich buttery taste with a fiery chili coating.',
    price: 400,
    weight: '200g',
    spicyLevel: 'Extra Hot',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop'
  },
    {
    id: '5',
    name: 'Onion Murukku Rings',
    description: 'Crispy rings flavored with caramelized onion and spices.',
    price: 320,
    weight: '180g',
    spicyLevel: 'Medium',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Family Party Pack',
    description: 'Assorted murukku varieties in a large pack for gatherings.',
    price: 1200,
    weight: '1kg',
    spicyLevel: 'Hot',
    image: 'https://images.unsplash.com/photo-1567316300944-4155114f5a6e?q=80&w=800&auto=format&fit=crop'
  }
];
