import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Category } from '../../../types/category';
import { Brand } from '../../../types/brand';
import { CategoryService } from '../../../service/category.service';
import { BrandService } from '../../../service/brand.service';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../types/product';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  formBuilder = inject(FormBuilder);
  categoryService = inject(CategoryService);
  brandService = inject(BrandService);
  productService = inject(ProductService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  id = '';
  isEdit = false;
  productForm = this.formBuilder.group({
    name: [null, [Validators.required, Validators.minLength(5)]],
    shortDescription: ['', [Validators.required, Validators.minLength(10)]],
    description: ['', [Validators.required, Validators.minLength(50)]],
    price: [null, [Validators.required]],
    discount: [],
    images: this.formBuilder.array([]), // FormArray
    categoryId: [null, [Validators.required]],
    brandId: [null, [Validators.required]],
    isFeatured: [false],
    isNew: [false],
  });

  categories: Category[] = [];
  brands: Brand[] = [];

  get images(): FormArray {
    return this.productForm.get('images') as FormArray;
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe((data: any) => {
        this.productForm.patchValue(data);
        this.id = data._id as string;
        this.isEdit = true;
      });
    }
    this.addImage(); // 👈 Always have 1 image field
    this.loadDropdownData();
  }

  loadDropdownData() {
    this.categoryService.getCategoryList().subscribe((data) => {
      this.categories = data as Category[];
    });

    this.brandService.getBrandList().subscribe((data) => {
      this.brands = data as Brand[];
    });
  }

  addImage(value: string = '') {
    this.images.push(this.formBuilder.control(value, Validators.required));
  }

  removeImage(index: number) {
    this.images.removeAt(index);
  }
  updateProduct() {
    if (this.productForm.valid) {
      this.productService
        .updateProduct(this.id, this.productForm.value as any)
        .subscribe(() => {
          this.productForm.reset();
          this.router.navigateByUrl('/admin/products');
        });
    } else {
      console.log('error');
    }
  }

  addProduct() {
    if (this.productForm.valid) {
      this.productService
        .createProduct(this.productForm.value as any)
        .subscribe(() => {
          this.productForm.reset();
          this.router.navigateByUrl('/admin/products');
        });
    } else {
      console.log('error');
    }
  }
}
