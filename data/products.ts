
import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Oat Flower',
    category: 'Agro-Exports',
    price: 3.2,
    location: 'Ogun, NG',
    origin: 'Nigeria',
    specs: ['Sustainably planted', 'Premium processed', 'Pest Free', 'Export Ready'],
    images: [
      'https://raw.githubusercontent.com/igariga1/kommtflix-web/main/images/Oats/oat1.jpeg',
      'https://raw.githubusercontent.com/igariga1/kommtflix-web/main/images/Oats/oat2.jpeg' 
    ],
    status: 'Available',
    vetted: true
  },
  {
    id: '2',
    name: 'Yam Flour (Pando)',
    category: 'Agro-Exports',
    price: 00,
    location: 'Lagos, NG',
    specs: ['Sustainably planted', 'Premium processed', 'Pest Free', 'Export Ready'],
    images: [
      '',
      'https://raw.githubusercontent.com/igariga1/kommtflix-web/main/images/more/pando3.jpeg',
      'https://raw.githubusercontent.com/igariga1/kommtflix-web/main/images/more/pando3.png' 
    ],
    status: 'Available',
    vetted: true
  },
    {
    id: '3',
    name: 'Plantain Flour',
    category: 'Agro-Exports',
    price: 00,
    location: 'Lagos, NG',
    specs: ['Sustainably planted', 'Premium processed', 'Pest Free', 'Export Ready'],
    images: [
      '',
      'https://raw.githubusercontent.com/igariga1/kommtflix-web/main/images/more/Plantain2.png',
      'https://raw.githubusercontent.com/igariga1/kommtflix-web/main/images/more/plantain1.png' 
    ],
    status: 'Available',
    vetted: true
  },
   {
    id: '4',
    name: 'Wheat Flour',
    category: 'Agro-Exports',
    price: 00,
    location: 'Lagos, NG',
    specs: ['Sustainably planted', 'Premium processed', 'Pest Free', 'Export Ready'],
    images: [
      '',
      'https://raw.githubusercontent.com/igariga1/kommtflix-web/main/images/more/wheatFlour1.png',
      'https://raw.githubusercontent.com/igariga1/kommtflix-web/main/images/more/wheat2.png' 
    ],
    status: 'Available',
    vetted: true
  },
   {
    id: '5',
    name: 'Abacha',
    category: 'Agro-Exports',
    price: 00,
    location: 'Lagos, NG',
    specs: ['Sustainably planted', 'hygenically processed', 'Pest Free', 'Export Ready'],
    images: [
      '',
      'https://raw.githubusercontent.com/igariga1/kommtflix-web/main/images/more/abacha.png' 
    ],
    status: 'Available',
    vetted: true
  },
   {
    id: '6',
    name: 'Cassava Flour',
    category: 'Agro-Exports',
    price: 00,
    location: 'Lagos, NG',
    specs: ['Sustainably planted', 'Premium processed', 'Pest Free', 'Export Ready'],
    images: [
      '',
      'https://raw.githubusercontent.com/igariga1/kommtflix-web/main/images/more/cassavaFlour1.jpeg'
    ],
    status: 'Available',
    vetted: true
  },
    {
    id: '7',
    name: 'Ogranic Dried Pepper',
    category: 'Agro-Exports',
    price: 11.49,
    location: 'Enugu, NG',
    origin: 'Nigeria',
    specs: ['Sustainably planted', 'Pest Free', '100% Organic', '2-4Tons Ready'],
    images: [
      'https://raw.githubusercontent.com/igariga1/kommtflix-web/main/images/pepper/driedpeper.jpeg'
    ],
    status: 'Available',
    vetted: true
  }
  ];
  /*{
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
  },*/
