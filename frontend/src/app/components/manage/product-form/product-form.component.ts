import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatInputModule, MatButton],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  fb = inject(FormBuilder);

  productForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    shortDescription: ['', [Validators.required, Validators.minLength(10)]],
    description: ['', [Validators.required, Validators.minLength(50)]],
    price: [null, [Validators.required]],
    discount: [],
    images: this.fb.array([]), // FormArray
    categoryId: ['', [Validators.required]],
  });

  get images(): FormArray {
    return this.productForm.get('images') as FormArray;
  }
  ngOnInit() {
    this.addImage();
  }
  addImage(value: string = '') {
    this.images.push(this.fb.control(value, Validators.required));
  }

  removeImage(index: number) {
    this.images.removeAt(index);
  }

  addProduct() {
    console.log(this.productForm.value);
  }
}
