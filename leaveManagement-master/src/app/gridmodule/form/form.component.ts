import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, NgForm,Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { TableService } from '../table.service';

//import { start } from 'repl';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  leaveForm : FormGroup;
  StartDate :string ='';
  EndDate :string ='';
  LeaveType :string ='';
  Purpose :string ='';
  buttonStatus: boolean = false;
  index = null;
  uData = {start:'', end:'', type:'', purpose:'', action: null}
  

constructor(public router: Router,private formbuilder : FormBuilder, public service: TableService) {
  this.buttonStatus =  this.service.getButtonStatus();
  if(this.buttonStatus){
    this.uData = this.service.getUpdateData();
      this.StartDate = this.uData.start;
      this.EndDate = this.uData.end;
      this.LeaveType = this.uData.type;
      this.Purpose =  this.uData.purpose;
      this.index = this.uData.action;
  }


  this.service.resetIndex();
 }

  ngOnInit() {
    this.leaveForm = this.formbuilder.group(
      {
        startdate : ['',[Validators.required]],
        enddate   :   ['',[Validators.required]],
        leaveType : ['',[Validators.required]],
        purpose   :   ['',[Validators.required,Validators.minLength(8)]]
      }
    );
  
  }
  onClick(leaveForm:any){
    this.StartDate = this.leaveForm.controls.startdate.value;
    this.EndDate = this.leaveForm.controls.enddate.value;
    this.LeaveType = this.leaveForm.controls.leaveType.value;
    this.Purpose= this.leaveForm.controls.purpose.value;
    this.service.addData(this.StartDate, this.EndDate,this.LeaveType, this.Purpose);
    this.router.navigate(['/grid']);
  }
 
  updateData(){
    if(this.leaveForm.controls.startdate.value)
    this.StartDate = this.leaveForm.controls.startdate.value;
    if(this.leaveForm.controls.enddate.value)
    this.EndDate = this.leaveForm.controls.enddate.value;
    if(this.leaveForm.controls.leaveType.value)
    this.LeaveType = this.leaveForm.controls.leaveType.value;
    if(this.leaveForm.controls.purpose.value)
    this.Purpose= this.leaveForm.controls.purpose.value;
    this.service.updateDataIndex(this.StartDate, this.EndDate,this.LeaveType, this.Purpose, this.index);
    this.router.navigate(['/grid']); 
  }

}
