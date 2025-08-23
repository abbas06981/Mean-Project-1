import { Component, inject } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../../service/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [MatFormField, MatButton, MatInputModule, FormsModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss',
})
export class CategoryFormComponent {
  name = '';
  categoryService = inject(CategoryService);
  router = inject(Router);

  addCategory() {
    console.log('Category name:', this.name);

    this.categoryService
      .createCategory({ name: this.name })
      .subscribe((data) => {
        this.router.navigateByUrl('/admin/categories');
      });
  }
}
