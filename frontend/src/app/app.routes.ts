import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/manage/category/category.component';
import { CategoryFormComponent } from './components/manage/category-form/category-form.component';
import { BrandsComponent } from './components/manage/brands/brands.component';
import { BrandsFormComponent } from './components/manage/brands-form/brands-form.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'admin/categories',
    component: CategoryComponent,
  },
  {
    path: 'admin/categories/add',
    component: CategoryFormComponent,
  },
  {
    path: 'admin/categories/:id',
    component: CategoryFormComponent,
  },
  {
    path: 'admin/brand',
    component: BrandsComponent,
  },
  {
    path: 'admin/brand/add',
    component: BrandsFormComponent,
  },
  {
    path: 'admin/brand/:id',
    component: BrandsFormComponent,
  },
];
