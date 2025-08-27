export interface Product {
  _id?: string; // MongoDB auto-generated id
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  discount: number;
  images: string[];
  categoryId: string; // ObjectId will come as a string in API response
}
