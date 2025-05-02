import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/autenticacao/login/login.component';
import { HomeComponent } from '../pages/dashboards/home/home.component';
import { RecuperacaoComponent } from '../pages/autenticacao/recuperacao/recuperacao.component';
import { CadastroComponent } from '../pages/autenticacao/cadastro/cadastro.component';
import { CadastroAnimalComponent } from '../pages/cadastros/cadastro-animal/cadastro-animal.component';
import { CadastroUsuarioComponent } from '../pages/cadastros/cadastro-usuario/cadastro-usuario.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },

  //Auth
  { path: 'Login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'recuperacao', component: RecuperacaoComponent },

  //Dashboards
  { path: 'Home', component: HomeComponent },

  //Cadastros
  { path: 'cadastro/usuario', component: CadastroUsuarioComponent },
  { path: 'cadastro/animal', component: CadastroAnimalComponent },
];
