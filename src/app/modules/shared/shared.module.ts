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
import { AgGridModule } from 'ag-grid-angular';
import { ButtonComponent } from './components/ag-grid-table/button/button.component';
import { SelectEditorComponent } from './components/ag-grid-table/select-editor/select-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    GalleryComponent,
    ChartComponent,
    ButtonComponent,
    SelectEditorComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatButtonModule,
    MatTabsModule,
    GalleryModule,
    BaseChartDirective,
    AgGridModule,
    ReactiveFormsModule,
    MatSidenavModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    MatButtonModule,
    MatTabsModule,
    GalleryModule,
    GalleryComponent,
    ChartComponent,
    BaseChartDirective,
    AgGridModule,
    ReactiveFormsModule,
    SidenavComponent,
    MatSidenavModule
  ]
})
export class SharedModule { }
