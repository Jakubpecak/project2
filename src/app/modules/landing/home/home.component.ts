import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  offerList = [
    {
      icon: 'fa-house',
      title: 'House',
      content: 'This is content',
      color: '',
      background: ''
    },
    {
      icon: 'fa-house',
      title: 'Flat',
      content: 'This is content',
      color: '',
      background: ''
    }
  ];

}
