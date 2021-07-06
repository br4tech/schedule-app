import { Routes } from "@angular/router";

import { LayoutComponent } from "src/app/shared/layout/layout.component";
import { ContractListComponent } from "./contract-list/contract-list.component"
import { ContractEditComponent } from "./contract-edit/contract-edit.component";

export const ROUTES: Routes = [
  {
          path: '',
          component: LayoutComponent,
          children: [
                  { path: 'contract-list', component: ContractListComponent },
                  { path: 'contract-edit', component: ContractEditComponent },

          ]
  }
]
