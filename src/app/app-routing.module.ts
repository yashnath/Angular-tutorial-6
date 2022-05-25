import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParrentComponent } from './parrent/parrent.component';

const routes: Routes = [{
  path:'parrent',component:ParrentComponent ,
  children:[{
    path:'child',component:ChildComponent
  }]
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
