import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt-PT';
import { HttpClientModule } from '@angular/common/http';

import { ReportModule } from './modules/report/reporte.module';

import { LayoutComponent } from './shared/layout/layout.component';
import { AsideComponent } from './shared/layout/aside/aside.component';
import { SubheaderComponent } from './shared/layout/subheader/subheader.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ModulesModule } from './modules/modules.module';
import { CompanyListComponent } from './module/company/company-list/company-list.component';
import { CompanyEditComponent } from './module/company/company-edit/company-edit.component';
import { CompanyFilterComponent } from './module/company/components/company-filter/company-filter.component';
import { CompanyGridComponent } from './module/company/components/company-grid/company-grid.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AsideComponent,
    SubheaderComponent,
    CompanyListComponent,
    CompanyEditComponent,
    CompanyFilterComponent,
    CompanyGridComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NgxUiLoaderModule,
    AppRoutingModule,
    HttpClientModule,
    ModulesModule,    
    ReportModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule { }
