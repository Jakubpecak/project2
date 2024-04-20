import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-editor',
  templateUrl: './select-editor.component.html',
  styleUrl: './select-editor.component.scss'
})
export class SelectEditorComponent {
  selectControl = new FormControl();
  params: any;
  
  agInit(params: any): void {
    this.params = params;
    console.log('params', params)
    const initialValue = params.values.find((item: any) => item.label === params.value)?.id;
    this.selectControl.setValue(initialValue, {emitEvent: false});
  }

  getValue() {
    const selectedId = this.selectControl.value;
    console.log('selectedId', selectedId)
    return this.params.values.find((item: any) => item.id === selectedId)?.label;
  }

  registerOnChange(fn: any): void {
    this.selectControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {}

}