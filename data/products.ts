
import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Mercedes-Benz Actros 1845',
    category: 'Vehicles',
    price: 48500,
    location: 'Düsseldorf, DE',
    specs: ['2019 Model', '450,000 km', 'Euro 6', 'Automatic'],
    images: [
      'https://picsum.photos/seed/truck1/800/600',
      'https://picsum.photos/seed/truck1_side/800/600',
      'https://picsum.photos/seed/truck1_interior/800/600',
      'https://picsum.photos/seed/truck1_label/800/600'
    ],
    status: 'Available',
    vetted: true
  },
  {
    id: '2',
    name: 'Caterpillar 320 GC Excavator',
    category: 'Machinery',
    price: 125000,
    location: 'Berlin, DE',
    specs: ['2021 Model', '1,200 Hours', 'Tier 4 Final', '20t Class'],
    images: [
      'https://picsum.photos/seed/excavator/800/600',
      'https://picsum.photos/seed/excavator_side/800/600',
      'https://picsum.photos/seed/excavator_rear/800/600',
      'https://picsum.photos/seed/excavator_label/800/600'
    ],
    status: 'Available',
    vetted: true
  },
  {
    id: '3',
    name: 'Liebherr LTM 1050-3.1',
    category: 'Machinery',
    price: 210000,
    location: 'Hamburg, DE',
    specs: ['2018 Model', '50t Capacity', '38m Boom', 'Excellent Condition'],
    images: [
      'https://picsum.photos/seed/crane/800/600',
      'https://picsum.photos/seed/crane_side/800/600',
      'https://picsum.photos/seed/crane_cab/800/600',
      'https://picsum.photos/seed/crane_label/800/600'
    ],
    status: 'Reserved',
    vetted: true
  },
  {
    id: '4',
    name: 'Industrial Power Generator 500kVA',
    category: 'Industrial',
    price: 32000,
    location: 'Hamburg, DE',
    specs: ['New', 'Cummins Engine', 'Soundproof', 'Dual Frequency'],
    images: [
      'https://picsum.photos/seed/gen/800/600',
      'https://picsum.photos/seed/gen_side/800/600',
      'https://picsum.photos/seed/gen_panel/800/600',
      'https://picsum.photos/seed/gen_label/800/600'
    ],
    status: 'Available',
    vetted: true
  },
  {
    id: '5',
    name: 'BMW X5 xDrive40d',
    category: 'Vehicles',
    price: 55000,
    location: 'Düsseldorf, DE',
    specs: ['2022 Model', '15,000 km', 'M-Sport', 'Full Service History'],
    images: [
      'https://picsum.photos/seed/car1/800/600',
      'https://picsum.photos/seed/car1_side/800/600',
      'https://picsum.photos/seed/car1_interior/800/600',
      'https://picsum.photos/seed/car1_label/800/600'
    ],
    status: 'Available',
    vetted: true
  },
  {
    id: '6',
    name: 'Concrete Batching Plant 60m³/h',
    category: 'Machinery',
    price: 89000,
    location: 'Berlin, DE',
    specs: ['Refurbished', 'Mobile Unit', 'Full Automation', 'Ready for Export'],
    images: [
      'https://picsum.photos/seed/plant/800/600',
      'https://picsum.photos/seed/plant_side/800/600',
      'https://picsum.photos/seed/plant_mixer/800/600',
      'https://picsum.photos/seed/plant_label/800/600'
    ],
    status: 'Available',
    vetted: true
  },
  {
    id: '8',
    name: 'Dried Hibiscus Flower (Grade A)',
    category: 'Agro-Exports',
    price: 1850,
    location: 'Kano, Nigeria',
    origin: 'Nigeria',
    specs: ['Organic Certified', 'Moisture < 10%', 'Deep Red Color', 'Bulk Packaging'],
    images: [
      'https://picsum.photos/seed/hibiscus/800/600',
      'https://picsum.photos/seed/hibiscus_bag/800/600',
      'https://picsum.photos/seed/hibiscus_close/800/600',
      'https://picsum.photos/seed/hibiscus_label/800/600'
    ],
    status: 'Available',
    vetted: true
  },
  {
    id: '9',
    name: 'Premium Plantain Flour',
    category: 'Agro-Exports',
    price: 1200,
    location: 'Lagos, Nigeria',
    origin: 'Nigeria',
    specs: ['100% Natural', 'Gluten Free', 'Bulk 25kg Bags', 'Export Quality'],
    images: [
      'https://picsum.photos/seed/flour/800/600',
      'https://picsum.photos/seed/flour_pack/800/600',
      'https://picsum.photos/seed/flour_process/800/600',
      'https://picsum.photos/seed/flour_label/800/600'
    ],
    status: 'Available',
    vetted: true
  },
  {
    id: '10',
    name: 'Fresh Bird Eye Chilli',
    category: 'Agro-Exports',
    price: 3500,
    location: 'Accra, Ghana',
    origin: 'Ghana',
    specs: ['Air Freight Ready', 'GlobalGAP Certified', 'High Scoville', 'Cold Chain Managed'],
    images: [
      'https://picsum.photos/seed/chilli/800/600',
      'https://picsum.photos/seed/chilli_side/800/600',
      'https://picsum.photos/seed/chilli_pack/800/600',
      'https://picsum.photos/seed/chilli_label/800/600'
    ],
    status: 'Available',
    vetted: true
  },
  {
    id: '11',
    name: 'Brown Honey Beans (Oloyin)',
    category: 'Agro-Exports',
    price: 950,
    location: 'Lagos, Nigeria',
    origin: 'Nigeria',
    specs: ['Sorted & Cleaned', 'Pest Free', 'High Protein', '20ft Container Ready'],
    images: [
      'https://picsum.photos/seed/beans/800/600',
      'https://picsum.photos/seed/beans_bag/800/600',
      'https://picsum.photos/seed/beans_close/800/600',
      'https://picsum.photos/seed/beans_label/800/600'
    ],
    status: 'Available',
    vetted: true
  }
];
