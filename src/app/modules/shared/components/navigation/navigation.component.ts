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
      label: 'Dashboard',
      icon: 'fa-solid fa-table-columns',
      link: '/dashboard'
    },
    {
        label: 'Properties',
        icon: 'fa-solid fa-city',
        link: '/properties'
    }, {
        label: 'Calculator',
        icon: 'fa-solid fa-calculator',
        link: '/calculator'
    }, {
        label: 'Charts',
        icon: 'fa-solid fa-chart-line',
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
