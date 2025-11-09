import { Component, inject } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { Category } from '../../types/category';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { CustomerService } from '../../service/customer.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  categoryService = inject(CustomerService);
  categoryList: Category[] = [];
  searchQuery?: string;
  router = inject(Router);
  authService = inject(AuthService);

  ngOnInit() {
    this.categoryService.getCategoriesList().subscribe((data) => {
      this.categoryList = data as Category[];
    });
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
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
