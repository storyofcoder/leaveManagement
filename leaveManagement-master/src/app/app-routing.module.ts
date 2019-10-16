import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', 
    loadChildren: ()=> import('./loginmodule/loginmodule.module').then(m=> m.LoginmoduleModule)
  },
  {
    path: 'grid', 
    loadChildren: ()=> import('./gridmodule/gridmodule.module').then(m=> m.GridmoduleModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
