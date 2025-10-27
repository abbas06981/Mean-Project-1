import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/manage/category/category.component';
import { CategoryFormComponent } from './components/manage/category-form/category-form.component';
import { BrandsComponent } from './components/manage/brands/brands.component';
import { BrandsFormComponent } from './components/manage/brands-form/brands-form.component';
import { ProductComponent } from './components/manage/product/product.component';
import { ProductFormComponent } from './components/manage/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  // ===================Private Routes====================
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
  {
    path: 'admin/products',
    component: ProductComponent,
  },
  {
    path: 'admin/products/add',
    component: ProductFormComponent,
  },
  {
    path: 'admin/products/:id',
    component: ProductFormComponent,
  },

  // =======================Public Routes=====================
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
  },

  //====================== Auth Routes ==========================
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];
