import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, NgForm,Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from '../login.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupForm : FormGroup;
  Username : string='';
  Password : string = "";
  loginErr: boolean = false;

  constructor( public router: Router,private formbuilder : FormBuilder,public login : LoginService  ) { 

  }

  ngOnInit() {
    this.signupForm = this.formbuilder.group(
      {
        username : ['',[Validators.required,Validators.maxLength(8)]],
        password : ['',[Validators.required,Validators.maxLength(8)]]
      }
    );
   
  }

  onSubmit(signupForm:any){
    this.Username = this.signupForm.controls.username.value;
    this.Password = this.signupForm.controls.password.value;
     console.log(this.Username);
     console.log(this.Password);
       this.login.getDetails().subscribe(data=>{
          if ((data[0].username == this.Username ) && (data[0].password == this.Password )){
            this.router.navigate(['/grid']);
          }else{
            this.loginErr = true;
            setTimeout(()=>{
              this.loginErr = false;
            },3000)
          }
        })
  }
  
}
