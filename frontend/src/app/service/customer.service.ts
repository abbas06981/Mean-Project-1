import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  http = inject(HttpClient);
  getNewProductList() {
    return this.http.get(environment.apiUrl + '/customer/home/new-products');
  }
  getFeaturedProductList() {
    return this.http.get(
      environment.apiUrl + '/customer/home/featured-products'
    );
  }
  getCategoriesList() {
    return this.http.get(environment.apiUrl + '/home/categories');
  }
}
