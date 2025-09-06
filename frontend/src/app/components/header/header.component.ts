import { Component, inject } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { Category } from '../../types/category';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  categoryService = inject(CategoryService);
  categoryList: Category[] = [];
  ngOnInit() {
    this.categoryService.getCategoryList().subscribe((data) => {
      this.categoryList = data as Category[];
    });
  }
}
