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
import { CompanyListComponent } from "./company/company-list/company-list.component";
import { CompanyEditComponent } from "./company/company-edit/company-edit.component";

import { DoctorResolver } from "./doctor/doctor.resolver";
import { ScheduleResolver } from "../shared/resolvers/schedule.resolver";
import { FinancialResolverService } from "./financial/financial-resolver.service";
import { UserResolver } from "./user/user.resolver";
import { CompanyResolver } from "./company/company.resolver";
import { OfficeResolver } from "../shared/resolvers/office.resolver";
import { ContractResolver } from "../shared/resolvers/contract.resolver";

export const ROUTES: Routes = [
        {
                path: '',
                component: LayoutComponent, 
                resolve: { 
                        office: OfficeResolver,
                        contract: ContractResolver
                },           
                children: [
                        { path: '', redirectTo: 'schedule', pathMatch: 'full' },
                        { path: 'schedule', component: ContractScheduleComponent, resolve: { item: ScheduleResolver} },
                        { path: 'contracts', component: ContractListComponent },
                        { path: 'contract', component: ContractEditComponent },
                        { path: 'contract/:id', component: ContractEditComponent },
                        { path: 'bills', component: FinancialListComponent, resolve: { item: FinancialResolverService }},
                        { path: 'doctors', component: DoctorListComponent, resolve: { item: DoctorResolver } },
                        { path: 'doctor', component: DoctorEditComponent },
                        { path: 'doctor/:id', component: DoctorEditComponent },
                        { path: 'users', component: UserListComponent, resolve: { item: UserResolver } },
                        { path: 'user', component: UserEditComponent },
                        { path: 'user/:id', component: UserEditComponent },
                        { path: 'user-profile', component: UserProfileComponent },
                        { path: 'companies', component: CompanyListComponent,  resolve: { item: CompanyResolver } },
                        { path: 'company/:id', component: CompanyEditComponent },
                        { path: 'company', component: CompanyEditComponent },
                        { path: 'settings', loadChildren: () => import('./settings/settings.module').then( m => m.SettingsModule )}
                ] 
        }
]
