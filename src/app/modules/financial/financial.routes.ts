import { Routes } from "@angular/router";

import { LayoutComponent } from "src/app/shared/layout/layout.component";
import { FinancialListComponent } from "./financial-list/financial-list.component"

export const ROUTES: Routes = [
  {
          path: '',
          component: LayoutComponent,
          children: [
                  { path: 'bills', component: FinancialListComponent }

          ]
  }
]
