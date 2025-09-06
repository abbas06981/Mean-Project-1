import { Component, inject } from '@angular/core';

import { CustomerService } from '../../service/customer.service';
import { Product } from '../../types/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  customerService = inject(CustomerService);

  newProductList: Product[] = [];
  featuredProductList: Product[] = [];

  ngOnInit() {
    this.customerService.getNewProductList().subscribe((data) => {
      this.newProductList = data as Product[];
    });

    this.customerService.getFeaturedProductList().subscribe((data) => {
      this.featuredProductList = data as Product[];
    });
  }
}
