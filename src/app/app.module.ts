import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt-PT';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReportModule } from './modules/report/reporte.module';

import { LayoutComponent } from './shared/layout/layout.component';
import { AsideComponent } from './shared/layout/aside/aside.component';
import { SubheaderComponent } from './shared/layout/subheader/subheader.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ModulesModule } from './modules/modules.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorMessageComponent } from './shared/components/error-message/error-message.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AsideComponent,
    SubheaderComponent,
    ErrorMessageComponent    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule, 
    NgxUiLoaderModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ModulesModule,    
    ReportModule
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule { }
