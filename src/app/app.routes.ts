import { Routes } from '@angular/router';
import { loginRoutes } from './auth/auth.routes';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';

export const guards = [
  AuthGuard
]

export const AppRoutes: Routes = [
  {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full',
  },
  {
      path: 'login',
      children: loginRoutes,
      component: LoginComponent,
  },
  {
      path: '**',
      redirectTo: '/'
  }
];
