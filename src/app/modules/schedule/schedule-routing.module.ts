import { importType } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractScheduleComponent } from './components/contract-schedule/contract-schedule.component';

const routes: Routes = [
  { path: '', component: ContractScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
