import { Component, inject } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../../service/category.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  route = inject(ActivatedRoute);
  id = '';
  isEdit = false;

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.categoryService.getCategoryById(id).subscribe((data: any) => {
        this.name = data.name as string;
        this.id = data._id as string;
        this.isEdit = true;
      });
    }
  }
  updateCategory() {
    this.categoryService
      .updateCategory(this.id, { name: this.name })
      .subscribe((data) => {
        this.router.navigateByUrl('/admin/categories');
      });
  }
  addCategory() {
    this.categoryService
      .createCategory({ name: this.name })
      .subscribe((data) => {
        this.router.navigateByUrl('/admin/categories');
      });
  }
}
