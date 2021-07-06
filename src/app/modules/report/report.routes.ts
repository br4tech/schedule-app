import { Routes } from "@angular/router";

import { LayoutComponent } from "src/app/shared/layout/layout.component";
import { ReportComponent } from "./report.component";

export const ROUTES: Routes = [
  {
          path: '',
          component: LayoutComponent,
          children: [
                  { path: 'report', component: ReportComponent }
          ]
  }
]
