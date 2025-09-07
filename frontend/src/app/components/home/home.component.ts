import { Component, inject } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CustomerService } from '../../service/customer.service';
import { Product } from '../../types/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CarouselModule],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  customerService = inject(CustomerService);
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true, // show pagination dots
    nav: false,
    margin: 20,
    // navText: [
    //   '<span class="text-white bg-black/50 rounded-full p-2">&#10094;</span>',
    //   '<span class="text-white bg-black/50 rounded-full p-2">&#10095;</span>',
    // ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
  };
  newProductList: Product[] = [];
  featuredProductList: Product[] = [];
  bannerImages: Product[] = [];

  ngOnInit() {
    this.customerService.getNewProductList().subscribe((data) => {
      this.newProductList = data as Product[];
      this.bannerImages.push(...(data as Product[]));
    });

    this.customerService.getFeaturedProductList().subscribe((data) => {
      this.featuredProductList = data as Product[];
      this.bannerImages.push(...(data as Product[]));
    });
  }
}
