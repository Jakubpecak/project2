import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../shared/components/ag-grid-table/button/button.component';
import { SelectEditorComponent } from '../shared/components/ag-grid-table/select-editor/select-editor.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  themeClass = "ag-theme-quartz-dark";
  columnDefs: any[] = [];
  rowData: any[] = [];
  pagination: boolean = true;
  paginationPageSize: number = 0;
  paginationPageSizeSelector: number[] = [];

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.columnDefs = [
      {
        field: "make", 
        flex: 2, 
        filter: true, 
        floatingFilter: false, 
        editable: true, 
        cellEditor: SelectEditorComponent,
        cellEditorParams: {
          values: [
            { id: 'tesla', label: 'Tesla' },
            { id: 'ford', label: 'Ford' }
          ]
        },
        checkboxSelection: true
      },
      { field: "model", flex: 1 },
      { field: "price", flex: 1 },
      { field: "electric", flex: 1 },
      { field: "button", cellRenderer: ButtonComponent },
    ];

    this.rowData = [
      { make: "Tesla", model: "Model Y", price: 64950, electric: true },
      { make: "Ford", model: "F-Series", price: 33850, electric: false },
      { make: "Toyota", model: "Corolla", price: 29600, electric: false }
    ];

    this.paginationPageSize = 5;
    this.paginationPageSizeSelector = [5, 10, 25];
  }

  onCellClicked(event: any): void {
    console.log('Cell clicked', event);
  }
  
  onCellValueChanged(event: any): void {
    alert(`Wartość zmieniona! Nowa wartość: ${event.newValue}`);
  }

}
