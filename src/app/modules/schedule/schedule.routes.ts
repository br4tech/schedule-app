import { Routes } from "@angular/router";

import { LayoutComponent } from "src/app/shared/layout/layout.component";
import { ContractScheduleComponent } from "./contract-schedule/contract-schedule.component";

export const ROUTES: Routes = [
  {
          path: '',
          component: LayoutComponent,
          children: [
                  { path: '', redirectTo: 'schedule', pathMatch: 'full' },
                  { path: 'schedule', component: ContractScheduleComponent },

          ]
  }
]