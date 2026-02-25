export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  weight: string;
  spicyLevel: 'Mild' | 'Medium' | 'Hot' | 'Extra Hot';
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerName: string;
  address: string;
  phone: string;
  status: 'pending' | 'confirmed';
}
