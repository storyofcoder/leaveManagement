import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginmoduleRoutingModule } from './loginmodule-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { LoginService } from './login.service';
import { from } from 'rxjs';

import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginmoduleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [LoginService],
})
export class LoginmoduleModule { 
  constructor(){
    console.log("login module loading");
  }
}
