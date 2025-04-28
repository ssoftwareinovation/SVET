import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../../shared/components/input/input.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports:[InputComponent, FormsModule]

})
export class LoginComponent {
  nome: string = '';
  email: string = '';

  login(){
    let a = 1+ 1
  }
}
