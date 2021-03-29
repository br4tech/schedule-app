import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { RouterModule } from '@angular/router';
import { ROUTES } from './financial.routes';

import { FinancialListComponent } from './financial-list/financial-list.component';
import { FinancialFilterComponent } from './components/financial-filter/financial-filter.component';
import { FinancialGridComponent } from './components/financial-grid/financial-grid.component';
import { FinancialResolverService } from './financial-resolver.service';
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
    FinancialListComponent,
    FinancialFilterComponent,
    FinancialGridComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[
    FinancialResolverService
  ]
})

export class FinancialModule { }
