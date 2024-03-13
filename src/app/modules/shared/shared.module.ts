import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryModule } from 'ng-gallery';
import { ChartComponent } from './components/chart/chart.component';
import { BaseChartDirective } from 'ng2-charts';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    GalleryComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatTabsModule,
    GalleryModule,
    BaseChartDirective
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    MatButtonModule,
    MatTabsModule,
    GalleryModule,
    GalleryComponent,
    ChartComponent,
    BaseChartDirective
  ]
})
export class SharedModule { }
