import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  http = inject(HttpClient);
  constructor() {}
  getBrandList() {
    return this.http.get(environment.apiUrl + '/brand');
  }
  getBrandById(id: any) {
    return this.http.get(environment.apiUrl + `/brand/${id}`);
  }
  createBrand(brand: any) {
    return this.http.post(environment.apiUrl + '/brand', brand);
  }
  deleteBrand(id: any) {
    return this.http.delete(environment.apiUrl + `/brand/${id}`);
  }
  updateBrand(id: any, brand: any) {
    return this.http.put(environment.apiUrl + `/brand/${id}`, brand);
  }
}
