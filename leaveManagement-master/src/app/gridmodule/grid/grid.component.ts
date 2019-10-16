import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import { TableService } from '../table.service';
export interface PeriodicElement {
  start: string;
  end: string;
  type: string;
  purpose: string;
  action: number;
}

let ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  displayedColumns: string[] = ['start', 'end', 'type', 'purpose','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public router: Router, public service: TableService) { 
    this.setData();
  }

  setData(){
    ELEMENT_DATA = this.service.getData();
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  }
  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    
  }

  addData(){
    this.router.navigate(['/grid/form']);
  }

  edit(index){
    this.service.updateData(index);
    this.router.navigate(['/grid/form']);
  }

}


