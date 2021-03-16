import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { ScheduleRoutingModule } from './schedule-routing.module';

import { ContractScheduleComponent } from './components/contract-schedule/contract-schedule.component'

@NgModule({
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],
  declarations: [
    ContractScheduleComponent
  ]
})
export class ScheduleModule { }
