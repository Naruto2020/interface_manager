import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultComponent } from './default.component';
import { DashbordComponent } from '../../modules/dashbord/dashbord.component';
import { ManagementComponent } from '../../modules/management/management.component';

import {DashboardService} from '../../modules/dashboard.service'


import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { SharedModule } from '../../shared/shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    DefaultComponent,
    DashbordComponent,
    ManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    FlexLayoutModule,
    MatDividerModule
  ],
  providers: [
    DashboardService
  ]

})
export class DefaultModule { }
