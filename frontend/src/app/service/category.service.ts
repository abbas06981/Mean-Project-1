import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  http = inject(HttpClient);
  constructor() {}
  getCategoryList() {
    return this.http.get(environment.apiUrl + '/category');
  }
  getCategoryById(id: any) {
    return this.http.get(environment.apiUrl + `/category/${id}`);
  }
  createCategory(category: any) {
    return this.http.post(environment.apiUrl + '/category', category);
  }
  deleteCategory(id: any) {
    return this.http.delete(environment.apiUrl + `/category/${id}`);
  }
  updateCategory(id: any, category: any) {
    return this.http.put(environment.apiUrl + `/category/${id}`, category);
  }
}
