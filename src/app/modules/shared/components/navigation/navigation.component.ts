import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  scroll: boolean = false;
  navLinks = [
    {
        label: 'Properties',
        link: '/properties'
    }, {
        label: 'Calculator',
        link: '/calculator'
    }, {
        label: 'Charts',
        link: '/charts'
    }
  ];

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (window.scrollY > 0) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
  }

}
