import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/autenticacao/login/login.component';
import { HomeComponent } from '../pages/dashboards/home/home.component';

export const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Home', component: HomeComponent },
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
];
