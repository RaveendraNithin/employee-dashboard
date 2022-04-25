import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesTaskComponent } from './employees-task/employees-task.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:
      [
        {
          path: '', redirectTo: 'employees', pathMatch: 'full'
        },
        {
          path: 'employees',
          component: EmployeesListComponent,
        },
        {
          path: 'employee/:id/task',
          component: EmployeesTaskComponent,
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(DashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
