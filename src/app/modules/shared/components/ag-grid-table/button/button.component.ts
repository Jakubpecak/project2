import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements ICellRendererAngularComp {
  params: any;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    return false;
  }

  onClick(event: any) {
    alert('Action for ' + this.params);
    console.log('this.params button', this.params)
    console.log('this.params event', event)
    // Tutaj możesz wykonać inne akcje, np. wywołać metodę z serwisu, etc.
  }
 

}
