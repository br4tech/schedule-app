import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ROUTES } from './modules.routes';

import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { ContractEditComponent } from './contract/contract-edit/contract-edit.component';
import { FilterUniquePipe } from '../shared/pipes/filter-unique.pipe';

import { FinancialFilterComponent } from './financial/components/financial-filter/financial-filter.component';
import { FinancialGridComponent } from './financial/components/financial-grid/financial-grid.component';
import { FinancialListComponent } from './financial/financial-list/financial-list.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorEditComponent } from './doctor/doctor-edit/doctor-edit.component';
import { DoctorFilterComponent } from './doctor/components/doctor-filter/doctor-filter.component';
import { DoctorGridComponent } from './doctor/components/doctor-grid/doctor-grid.component';
import { ContractScheduleComponent } from './schedule/contract-schedule/contract-schedule.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserGridComponent } from './user/components/user-grid/user-grid.component';
import { UserFilterComponent } from './user/components/user-filter/user-filter.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyFilterComponent } from './company/components/company-filter/company-filter.component';
import { CompanyGridComponent } from './company/components/company-grid/company-grid.component';
import { ModalCancelAttendanceComponent } from './contract/components/modal-cancel-attendance/modal-cancel-attendance.component';
import { ModalCancelContractComponent } from './contract/components/modal-cancel-contract/modal-cancel-contract.component';
import { ReservationWithCotractComponent } from './schedule/components/reservation-with-cotract/reservation-with-cotract.component';
import { ReservationWithoutCotractComponent } from './schedule/components/reservation-without-cotract/reservation-without-cotract.component';

import { UserResolver } from './user/user.resolver';
import { DoctorResolver } from './doctor/doctor.resolver';
import { ScheduleResolver } from '../shared/resolvers/schedule.resolver';
import { FinancialResolverService } from './financial/financial-resolver.service';
import { CompanyResolver } from './company/company.resolver';

import { BaseModalComponent } from '../shared/components/modal/base-modal/base-modal.component';
import { ModalService } from '../shared/components/modal/modal.service';
import { InnerContentDirective } from '../shared/components/modal/inner-content.directive';
import { ModalModule } from '../shared/components/modal/modal.module';

import { LegalEntitiesComponent } from '../shared/components/legal-entities/legal-entities.component';
import { BranchUnitiesComponent } from '../shared/components/branch-unities/branch-unities.component';
import { OffDayResolver } from './settings/off-day/off-day.resolver';
import { NgbDateParserFormatter, NgbDatepickerI18n, NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomDatepickerI18nService } from '../shared/helpers/custom-datepicker-i18n.service';
import { NgxMaskModule } from 'ngx-mask';
import { CustomDatepickerFormatService } from '../shared/helpers/custom-datepicker-format.service';

@NgModule({
  imports: [
    FormsModule, 
    ReactiveFormsModule, 
    CommonModule,
    ModalModule,
    RouterModule.forChild(ROUTES),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [   
    ContractScheduleComponent,
    ContractListComponent,
    ContractEditComponent,
    FilterUniquePipe,
    FinancialListComponent,
    FinancialFilterComponent,
    FinancialGridComponent,
    DoctorListComponent,
    DoctorEditComponent,
    DoctorFilterComponent,
    DoctorGridComponent,
    UserListComponent,
    UserFilterComponent,
    UserGridComponent,
    UserEditComponent,
    UserProfileComponent,
    CompanyListComponent,
    CompanyEditComponent,
    CompanyFilterComponent,
    CompanyGridComponent,
    ModalCancelAttendanceComponent,
    ModalCancelContractComponent,
    ReservationWithCotractComponent,
    ReservationWithoutCotractComponent,
    LegalEntitiesComponent,
    BranchUnitiesComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[
    BaseModalComponent
  ],
  providers:[
    ScheduleResolver,
    FinancialResolverService,
    DoctorResolver,
    UserResolver,
    CompanyResolver,
    OffDayResolver,   
    ModalService,
    InnerContentDirective,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18nService },
    { provide: NgbDateParserFormatter, useClass: CustomDatepickerFormatService },
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18nService}  
  ]
})

export class ModulesModule { }
