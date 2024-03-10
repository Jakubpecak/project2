import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { GalleryComponent } from './components/gallery/gallery.component';


@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule

  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    MatButtonModule,
    MatTabsModule
  ]
})
export class SharedModule { }
