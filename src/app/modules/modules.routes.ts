import { Routes } from "@angular/router";

import { LayoutComponent } from "src/app/shared/layout/layout.component";

import { ContractEditComponent } from "./contract/contract-edit/contract-edit.component";
import { ContractListComponent } from "./contract/contract-list/contract-list.component";
import { FinancialListComponent } from "./financial/financial-list/financial-list.component";
import { DoctorEditComponent } from "./doctor/doctor-edit/doctor-edit.component";
import { DoctorListComponent } from "./doctor/doctor-list/doctor-list.component";
import { ContractScheduleComponent } from "./schedule/contract-schedule/contract-schedule.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { UserEditComponent } from "./user/user-edit/user-edit.component";
import { UserProfileComponent } from "./user/user-profile/user-profile.component";

import { DoctorResolver } from "./doctor/doctor.resolver";
import { ScheduleResolver } from "./schedule/schedule.resolver";
import { FinancialResolverService } from "./financial/financial-resolver.service";
import { UserResolver } from "./user/user.resolver";

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
                        { path: 'user-list', component: UserListComponent, resolve: { item: UserResolver } },
                        { path: 'user-list/user', component: UserEditComponent },
                        { path: 'user-list/user/:id', component: UserEditComponent },
                        { path: 'user-profile', component: UserProfileComponent },
                        { path: 'settings', loadChildren: () => import('./settings/settings.module').then( m => m.SettingsModule )}
                ] 
        }
]
