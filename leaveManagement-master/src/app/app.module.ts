import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableService } from './gridmodule/table.service';

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
import { from } from 'rxjs';
import { LoginService } from './loginmodule/login.service';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule, BrowserAnimationsModule,
    MatInputModule, MatFormFieldModule, HttpModule,
    MatButtonModule, MatCheckboxModule, FormsModule,MatTableModule, MatPaginatorModule, MatDatepickerModule, MatNativeDateModule
  ],
  providers: [LoginService, TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
