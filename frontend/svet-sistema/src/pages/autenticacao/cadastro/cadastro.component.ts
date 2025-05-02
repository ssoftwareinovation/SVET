import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../../shared/components/input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
 imports: [InputComponent, FormsModule, HttpClientModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  email = '';
  senha = '';

  erro: string | null = null;

  constructor(private authService: AuthService,  private router: Router) {}

  login() {
    this.erro = null;
    this.authService.login(this.email, this.senha).subscribe({
      next: () => {
        console.log('Login realizado com sucesso!');
        this.router.navigate(['/login']);
      },
      error: () => {
        this.erro = 'Usuário ou senha inválidos.';
      },
    });
  }
}
