import { Component, Input } from '@angular/core';
import { LoginComponent } from '../login/login.component';
LoginComponent
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  @Input() isUserRegistered?: boolean;

  
}
