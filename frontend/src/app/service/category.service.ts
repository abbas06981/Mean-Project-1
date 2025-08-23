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

  createCategory(category: any) {
    return this.http.post('http://localhost:3000/category', category);
  }
}
