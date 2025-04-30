import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../../shared/components/input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [InputComponent, FormsModule, HttpClientModule],
})
export class LoginComponent {
  email = '';
  senha = '';

  erro: string | null = null;

  constructor(private authService: AuthService,  private router: Router) {}

  login() {
    this.erro = null;
    this.authService.login(this.email, this.senha).subscribe({
      next: () => {
        console.log('Login realizado com sucesso!');
        this.router.navigate(['/dashboard']); // <-- redirecionamento
      },
      error: () => {
        this.erro = 'Usuário ou senha inválidos.';
      },
    });
  }
}
