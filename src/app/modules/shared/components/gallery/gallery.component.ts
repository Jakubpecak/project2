import { Component, OnInit } from '@angular/core';
import { ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  images: any;

  ngOnInit(): void {
    this.images = [
      new ImageItem({ src: '/assets/images/mieszkanie1.jpg', thumb: '/assets/images/mieszkanie1.jpg' }),
      new ImageItem({ src: '/assets/images/mieszkanie2.jpg', thumb: '/assets/images/mieszkanie2.jpg' }),
      new ImageItem({ src: '/assets/images/mieszkanie1.jpg', thumb: '/assets/images/mieszkanie1.jpg' }),
      new ImageItem({ src: '/assets/images/mieszkanie2.jpg', thumb: '/assets/images/mieszkanie2.jpg' }),
      new ImageItem({ src: '/assets/images/mieszkanie1.jpg', thumb: '/assets/images/mieszkanie1.jpg' }),
      new ImageItem({ src: '/assets/images/mieszkanie2.jpg', thumb: '/assets/images/mieszkanie2.jpg' }),
    ];
  }

}
