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
import { AuthGuard } from './core/auth_guard';

export const routes: Routes = [
  // ===================Private Routes====================
  {
    path: 'admin/categories',
    component: CategoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/categories/add',
    component: CategoryFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/categories/:id',
    component: CategoryFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/brand',
    component: BrandsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/brand/add',
    component: BrandsFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/brand/:id',
    component: BrandsFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/products',
    component: ProductComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/products/add',
    component: ProductFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/products/:id',
    component: ProductFormComponent,
    canActivate: [AuthGuard],
  },

  // =======================Public Routes=====================
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    canActivate: [AuthGuard],
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
