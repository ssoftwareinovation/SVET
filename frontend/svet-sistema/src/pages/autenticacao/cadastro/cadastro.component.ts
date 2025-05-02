import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../../shared/components/input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
 imports: [InputComponent, FormsModule, CommonModule],
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent {
  email = '';
  senha = '';
  nome = '';
  celular = '';
  erro: string | null = null;
stepAtual = 1;
  constructor(private authService: AuthService,  private router: Router) {}

  cadastro() {
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
