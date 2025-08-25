import { Component, inject } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from '../../../service/brand.service';

@Component({
  selector: 'app-brands-form',
  standalone: true,
  imports: [MatFormField, MatButton, MatInputModule, FormsModule],
  templateUrl: './brands-form.component.html',
  styleUrl: './brands-form.component.scss',
})
export class BrandsFormComponent {
  name = '';
  brandService = inject(BrandService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  id = '';
  isEdit = false;

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.brandService.getBrandById(id).subscribe((data: any) => {
        this.name = data.name as string;
        this.id = data._id as string;
        this.isEdit = true;
      });
    }
  }
  updateBrandFun() {
    this.brandService
      .updateBrand(this.id, { name: this.name })
      .subscribe((data) => {
        this.router.navigateByUrl('/admin/brand');
      });
  }
  addBrand() {
    this.brandService.createBrand({ name: this.name }).subscribe((data) => {
      this.router.navigateByUrl('/admin/brand');
    });
  }
}
