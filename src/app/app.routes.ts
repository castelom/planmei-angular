import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/component/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'manage',
    loadComponent: () => import('./components/finance/manage/manage.component').then(m => m.ManageComponent),
    canActivate: [authGuard]
  },
  {
    path: 'about',
    loadComponent: () => import('./components/pages/about/about.component').then(m => m.AboutComponent)
  }
];
