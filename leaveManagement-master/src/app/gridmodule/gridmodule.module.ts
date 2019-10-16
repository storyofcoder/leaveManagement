import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridmoduleRoutingModule } from './gridmodule-routing.module';
import { GridComponent } from './grid/grid.component';
import { FormComponent } from './form/form.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms'; 
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { TableService } from './table.service'

import { ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [GridComponent, FormComponent],
  imports: [
    CommonModule,
    GridmoduleRoutingModule,
    MatInputModule, MatFormFieldModule,
    MatButtonModule, MatCheckboxModule, FormsModule,MatTableModule, MatPaginatorModule, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule
  ],
  providers: [TableService]
})
export class GridmoduleModule { 
constructor(){
  console.log("grid module loading");
}
}