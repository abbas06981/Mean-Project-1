import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  http = inject(HttpClient);
  constructor() {}
  getCategoryList() {
    return this.http.get('http://localhost:3000/category');
  }
  getCategoryById(id: any) {
    return this.http.get(`http://localhost:3000/category/${id}`);
  }
  createCategory(category: any) {
    return this.http.post('http://localhost:3000/category', category);
  }
  deleteCategory(id: any) {
    return this.http.delete(`http://localhost:3000/category/${id}`);
  }
  updateCategory(id: any, category: any) {
    return this.http.put(`http://localhost:3000/category/${id}`, category);
  }
}
