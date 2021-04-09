import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './layouts/default/default.component';
import { DashbordComponent } from './modules/dashbord/dashbord.component';
import { ManagementComponent } from './modules/management/management.component';

const routes: Routes = [
  {
    path: "",
    component:DefaultComponent,
    children : [
      {
        path : "",
        component: DashbordComponent
      },
      {
        path : "managements",
        component:ManagementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
