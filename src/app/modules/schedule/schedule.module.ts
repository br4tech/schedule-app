import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { RouterModule } from '@angular/router';
import { ROUTES } from './schedule.routes';

import { LayoutComponent } from '../../shared/layout/layout.component';
import { AsideComponent } from '../../shared/layout/aside/aside.component';
import { SubheaderComponent } from '../../shared/layout/subheader/subheader.component';

import { ContractScheduleComponent } from './components/contract-schedule/contract-schedule.component';
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
    LayoutComponent,
    AsideComponent,
    SubheaderComponent,
    ContractScheduleComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class ScheduleModule { }
