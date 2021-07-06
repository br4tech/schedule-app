import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ROUTES } from './doctor.routes';

import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import { DoctorFilterComponent } from './components/doctor-filter/doctor-filter.component';
import { DoctorGridComponent } from './components/doctor-grid/doctor-grid.component';
import { DoctorResolver } from './doctor.resolver';

@NgModule({
  declarations: [
    DoctorListComponent,
    DoctorEditComponent,
    DoctorFilterComponent,
    DoctorGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  providers: [
    DoctorResolver
  ]
})
export class DoctorModule { }
