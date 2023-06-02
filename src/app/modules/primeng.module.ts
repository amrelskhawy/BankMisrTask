import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CascadeSelectModule} from "primeng/cascadeselect";
import { InputNumberModule } from 'primeng/inputnumber';
import { ListboxModule } from 'primeng/listbox';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CascadeSelectModule,
    InputNumberModule,
    ListboxModule
  ],
  exports: [
    CascadeSelectModule,
    ListboxModule
  ]
})
export class PrimengModule { }
