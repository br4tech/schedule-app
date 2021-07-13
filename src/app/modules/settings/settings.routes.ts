import { Routes } from "@angular/router";

import { OffDayListComponent } from './off-day/off-day-list/off-day-list.component';
import { OffDayResolver } from "./off-day/off-day.resolver";
import { OfficesComponent } from "./offices/offices.component";

export const ROUTES: Routes = [
        { path: 'office', component: OfficesComponent },
        { path: 'office/:id', component: OfficesComponent },
        { path: 'off-days', component: OffDayListComponent,  resolve: { item: OffDayResolver } }
]
