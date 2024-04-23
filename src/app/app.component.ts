import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.state.subscribe(isAuthenticated => {this.isAuthenticated = isAuthenticated});

    this.authService.logout();
  }

}
