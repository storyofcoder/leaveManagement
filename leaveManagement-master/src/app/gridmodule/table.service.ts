import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TableService {
  displayedColumns: string[] = ['start', 'end', 'type', 'purpose','action'];
  ButtonStatus = false;
  updateIndex = 0;

  constructor() { }

  hello(){
    return 'hello';
  }

  addData(start, end, type, purpose){
    ELEMENT_DATA.push({start: start, end: end, type: type, purpose: purpose,action:ELEMENT_DATA.length});
  }

  getData(){
    return ELEMENT_DATA;
  }

  getButtonStatus(){
    return this.ButtonStatus;
  }

  getUpdateData(){
    return ELEMENT_DATA[this.updateIndex];
  }

  updateData(index){
    this.ButtonStatus = true;
    this.updateIndex = index;
  }
  updateDataIndex(StartDate, EndDate,LeaveType, Purpose, index){
    ELEMENT_DATA[index] = {start: StartDate, end: EndDate, type: LeaveType, purpose: Purpose,action:index};
  }


  resetIndex(){
    this.ButtonStatus = false;
    this.updateIndex = null;
  }

}
export interface PeriodicElement {
  start: string;
  end: string;
  type: string;
  purpose: string;
  action: number;
}

const ELEMENT_DATA: PeriodicElement[] = [{start: '2019-09-11', end: '2019-09-11', type: 'paternal', purpose: 'out of station',action: 0},
{start: '2019-09-11', end: '2019-09-11', type: 'maternal', purpose: 'ill',action: 1}];
