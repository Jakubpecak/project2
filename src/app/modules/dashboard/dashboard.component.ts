import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1s ease-out')
      ]),
    ]),
  ],
})
export class DashboardComponent {

  constructor(private auth: AuthService) {}

  login() {
    const email = 'jakub.pecak@o2.pl';
    const password = 'Test1234!';
    this.auth.login(email, password).subscribe((data) => {
      console.log('data', data)
    });
  }

  register() {
    this.auth.signUp('jakub.pecak+1@o2.pl', 'Test1234!').subscribe((data) => {
      console.log('user', data)
    });
  }

  addUser() {
    this.auth.addUser({name: 'Jan Kowalski', photo: 'jan@example.com'}).then(() => {
      console.log('Użytkownik został dodany');
    });
  }

  getUsers() {
    this.auth.getUsers().subscribe((data) => {
      console.log('users', data)
    });
  }

}
