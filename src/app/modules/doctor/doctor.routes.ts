import { Routes } from "@angular/router";

import { LayoutComponent } from "src/app/shared/layout/layout.component";
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';

export const ROUTES: Routes = [
  {
          path: '',
          component: LayoutComponent,
          children: [
                  { path: 'doctor-list', component: DoctorListComponent },
                  { path: 'doctor-edit', component: DoctorEditComponent },

          ]
  }
]
