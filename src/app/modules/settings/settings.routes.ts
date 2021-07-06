import { Routes } from "@angular/router";

import { LayoutComponent } from "src/app/shared/layout/layout.component";
import { OffDayListComponent } from './off-day/off-day-list/off-day-list.component';

export const ROUTES: Routes = [
  {
          path: '',
          component: LayoutComponent,
          children: [
                  { path: 'off-day-list', component: OffDayListComponent },

          ]
  }
]
