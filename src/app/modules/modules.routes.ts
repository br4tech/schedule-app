import { Routes } from "@angular/router";

import { LayoutComponent } from "src/app/shared/layout/layout.component";

import { ContractEditComponent } from "./contract/contract-edit/contract-edit.component";
import { ContractListComponent } from "./contract/contract-list/contract-list.component";
import { FinancialListComponent } from "./financial/financial-list/financial-list.component";
import { FinancialResolverService } from "./financial/financial-resolver.service";
import { DoctorEditComponent } from "./doctor/doctor-edit/doctor-edit.component";
import { DoctorListComponent } from "./doctor/doctor-list/doctor-list.component";
import { DoctorResolver } from "./doctor/doctor.resolver";
import { ContractScheduleComponent } from "./schedule/contract-schedule/contract-schedule.component";
import { ScheduleResolver } from "./schedule/schedule.resolver";

export const ROUTES: Routes = [
        {
                path: '',
                component: LayoutComponent,             
                children: [
                        { path: '', redirectTo: 'schedule', pathMatch: 'full' },
                        { path: 'schedule', component: ContractScheduleComponent, resolve: { item: ScheduleResolver } },
                        { path: 'contract-list', component: ContractListComponent },
                        { path: 'contract-edit', component: ContractEditComponent },
                        { path: 'bills', component: FinancialListComponent, resolve: { item: FinancialResolverService }},
                        { path: 'doctor-list', component: DoctorListComponent, resolve: { item: DoctorResolver } },
                        { path: 'doctor-edit', component: DoctorEditComponent },
                        { path: 'settings', loadChildren: () => import('./settings/settings.module').then( m => m.SettingsModule )}
                ] 
        }
]
