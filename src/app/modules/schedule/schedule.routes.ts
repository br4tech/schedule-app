import { Routes } from "@angular/router";

import { LayoutComponent } from "src/app/shared/layout/layout.component";
import { ContractScheduleComponent } from "./components/contract-schedule/contract-schedule.component";


export const ROUTES: Routes = [
  {
          path: '',
          component: LayoutComponent,
          children: [
                  { path: 'schedule', component: ContractScheduleComponent },

          ]
  }
]
