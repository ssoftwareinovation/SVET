import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../../shared/components/input/input.component';
import { SideBarComponent } from "../../../shared/components/side-bar/side-bar.component";
import { LayoutBaseComponent } from '../../../shared/layout/layout-base/layout-base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [FormsModule, HttpClientModule, LayoutBaseComponent],
})
export class HomeComponent {

}
