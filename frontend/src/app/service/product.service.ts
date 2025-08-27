import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);

  getProductList() {
    return this.http.get(environment.apiUrl + '/product');
  }

  getProductById(id: string) {
    return this.http.get(environment.apiUrl + `/product/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(environment.apiUrl + '/product', product);
  }

  updateProduct(id: string, product: Product) {
    return this.http.put(environment.apiUrl + `/product/${id}`, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(environment.apiUrl + `/product/${id}`);
  }

  constructor() {}
}
