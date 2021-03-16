import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';

import { ContractScheduleComponent } from './components/contract-schedule/contract-schedule.component'

@NgModule({
  imports: [
    CommonModule,
    ScheduleRoutingModule
  ],
  declarations: [
    ContractScheduleComponent
  ]
})
export class ScheduleModule { }
