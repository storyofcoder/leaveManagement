import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { FormComponent } from './form/form.component';



const routes: Routes = [
  {
    path: '', component:GridComponent
  },
  {
    path: 'form', component:FormComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridmoduleRoutingModule { }
