import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SupplierDashComponent } from './supplier-dash/supplier-dash.component';
import { ManufacturerDashComponent } from './manufacturer-dash/manufacturer-dash.component';
import { LoginNavComponent } from './login/login-nav/login-nav.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { ManufacturerNavComponent } from './manufacturer-dash/manufacturer-nav/manufacturer-nav.component';
import { ManufacturerTabsComponent } from './manufacturer-dash/manufacturer-tabs/manufacturer-tabs.component';
import { ManufacturerFooterComponent } from './manufacturer-dash/manufacturer-footer/manufacturer-footer.component';
import { BidsComponent } from './manufacturer-dash/manufacturer-tabs/bids/bids.component';
import { ScanEditComponent } from './manufacturer-dash/manufacturer-tabs/scan-edit/scan-edit.component';
import { BidsSummaryComponent } from './manufacturer-dash/manufacturer-tabs/bids/bids-summary/bids-summary.component';
import { NewBidComponent } from './manufacturer-dash/manufacturer-tabs/bids/new-bid/new-bid.component';

//QR COde reader
import { NgQrScannerModule } from 'angular2-qrscanner';
import { SupplierNavComponent } from './supplier-dash/supplier-nav/supplier-nav.component';
import { SupplierTabsComponent } from './supplier-dash/supplier-tabs/supplier-tabs.component';
import { SupplierFooterComponent } from './supplier-dash/supplier-footer/supplier-footer.component';
//import { ZXingScannerModule } from './app/modules/zxing-scanner/zxing-scanner.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SupplierDashComponent,
    ManufacturerDashComponent,
    LoginNavComponent,
    LoginFormComponent,
    ManufacturerNavComponent,
    ManufacturerTabsComponent,
    ManufacturerFooterComponent,
    BidsComponent,
    ScanEditComponent,
    BidsSummaryComponent,
    NewBidComponent,
    SupplierNavComponent,
    SupplierTabsComponent,
    SupplierFooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatSelectModule,
    MatDividerModule,
    NgQrScannerModule,
    MatDialogModule
    //ZXingScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
