import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';

@Component({
  selector: 'app-layout-base',
  standalone: true,
  imports: [CommonModule, SideBarComponent],
  templateUrl: './layout-base.component.html',
})
export class LayoutBaseComponent {

}



