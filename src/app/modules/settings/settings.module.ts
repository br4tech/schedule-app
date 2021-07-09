import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ROUTES } from './settings.routes';

import { OffDayListComponent } from './off-day/off-day-list/off-day-list.component';
import { OffDayFilterComponent } from './off-day/components/off-day-filter/off-day-filter.component';
import { OffDayGridComponent } from './off-day/components/off-day-grid/off-day-grid.component';
import { OffDayEditComponent } from './off-day/off-day-edit/off-day-edit.component';
import { OfficesComponent } from './offices/offices.component';

@NgModule({
  declarations: [
    OffDayListComponent,
    OffDayFilterComponent,
    OffDayGridComponent,
    OffDayEditComponent,
    OfficesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class SettingsModule { }
