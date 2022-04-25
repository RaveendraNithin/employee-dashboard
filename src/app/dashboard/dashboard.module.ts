import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoreModule } from './../core/core.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesTaskComponent } from './employees-task/employees-task.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeesTaskComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
