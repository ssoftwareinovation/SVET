import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../../shared/components/input/input.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
})
export class HomeComponent {

}
