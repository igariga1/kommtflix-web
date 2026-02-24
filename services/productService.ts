
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

/**
 * ProductService handles all data fetching for the marketplace.
 * Currently it uses local mock data, but is structured to be 
 * easily swapped with a Sanity.io client or any other CMS.
 */
export const ProductService = {
  /**
   * Fetches all products from the inventory.
   * Simulates network latency to prepare UI for async operations.
   */
  async getAllProducts(): Promise<Product[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return [...PRODUCTS];
  },

  /**
   * Fetches a single product by ID.
   */
  async getProductById(id: string): Promise<Product | undefined> {
    await new Promise(resolve => setTimeout(resolve, 400));
    return PRODUCTS.find(p => p.id === id);
  },

  /**
   * Fetches products by category.
   */
  async getProductsByCategory(category: Product['category']): Promise<Product[]> {
    await new Promise(resolve => setTimeout(resolve, 600));
    return PRODUCTS.filter(p => p.category === category);
  }
};
