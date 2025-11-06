import { Component, inject } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { Category } from '../../types/category';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  categoryService = inject(CategoryService);
  categoryList: Category[] = [];
  searchQuery?: string;
  router = inject(Router);
  authService = inject(AuthService);

  ngOnInit() {
    this.categoryService.getCategoryList().subscribe((data) => {
      this.categoryList = data as Category[];
    });
  }

  onSearch() {
    if (!this.searchQuery) return; // ✅ Prevent undefined or empty

    if (this.searchQuery) {
      this.router.navigateByUrl(`/products?search=${this.searchQuery}`);
    }
  }
  searchCategory(id: string | undefined) {
    if (!id) return;
    this.router.navigateByUrl(`/products?search=${id}`);
  }
}
