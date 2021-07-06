import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { RouterModule } from '@angular/router';
import { ROUTES } from './modules.routes';

import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { ContractEditComponent } from './contract/contract-edit/contract-edit.component';
import { FilterUniquePipe } from '../shared/pipes/filter-unique.pipe';

import { FinancialFilterComponent } from './financial/components/financial-filter/financial-filter.component';
import { FinancialGridComponent } from './financial/components/financial-grid/financial-grid.component';
import { FinancialResolverService } from './financial/financial-resolver.service';
import { FinancialListComponent } from './financial/financial-list/financial-list.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorEditComponent } from './doctor/doctor-edit/doctor-edit.component';
import { DoctorFilterComponent } from './doctor/components/doctor-filter/doctor-filter.component';
import { DoctorGridComponent } from './doctor/components/doctor-grid/doctor-grid.component';
import { DoctorResolver } from './doctor/doctor.resolver';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],
  declarations: [
    ContractListComponent,
    ContractEditComponent,
    FilterUniquePipe,
    FinancialListComponent,
    FinancialFilterComponent,
    FinancialGridComponent,
    DoctorListComponent,
    DoctorEditComponent,
    DoctorFilterComponent,
    DoctorGridComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[
    FinancialResolverService,
    DoctorResolver
  ]
})

export class ModulesModule { }
