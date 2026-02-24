
export interface Product {
  id: string;
  name: string;
  category: 'Machinery' | 'Vehicles' | 'Industrial' | 'Agro-Exports';
  price: number;
  location: string;
  specs: string[];
  images: string[];
  status: 'Available' | 'Reserved' | 'In Transit';
  vetted: boolean;
  origin?: string;
}

export type Category = Product['category'] | 'All';
