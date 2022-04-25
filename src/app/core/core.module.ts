import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import third-party modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';

// import components
import { TableComponent } from './components/table/table.component';

//import services
import { DashboardService } from './services/dashboard.service';


@NgModule({
  declarations: [
    // TableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SmartTableModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SmartTableModule
  ],
  providers: [
    DashboardService
  ]
})
export class CoreModule { }
