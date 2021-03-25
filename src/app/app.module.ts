import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt-PT';

import { ScheduleModule } from './modules/schedule/schedule.module';
import { ContractModule  } from './modules/contract/contract.module';
import { FinancialModule } from './modules/financial/financial.module';
import { ReportModule } from './modules/report/reporte.module';
import { UserModule } from './modules/user/user.module';
import { DoctorModule } from './modules/doctor/doctor.module';
import { SettingsModule } from './modules/settings/settings.module';

import { LayoutComponent } from './shared/layout/layout.component';
import { AsideComponent } from './shared/layout/aside/aside.component';
import { SubheaderComponent } from './shared/layout/subheader/subheader.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AsideComponent,
    SubheaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ScheduleModule,
    ContractModule,
    FinancialModule,
    ReportModule,
    UserModule,
    DoctorModule,
    SettingsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule { }
