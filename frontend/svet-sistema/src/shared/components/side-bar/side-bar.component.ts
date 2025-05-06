import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-side-bar',
  standalone: true,
  templateUrl: './side-bar.component.html',
  imports: [CommonModule],
})
export class SideBarComponent {
  isMobileOpen = signal(false);

  toggleMobileMenu() {
    this.isMobileOpen.update(v => !v);
  }
}
