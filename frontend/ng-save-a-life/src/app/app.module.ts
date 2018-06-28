import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AgmCoreModule} from "@agm/core";
import {HospitalService} from "./services/hospital.service";
import {GeocodingService} from "./services/geocoding.service";
import { HomeComponent } from './components/home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AboutComponent } from './components/about/about.component';
import {MaterialModule} from "./material.module";
import {SharingService} from "./services/sharing.service";
import { HospitalInformationComponent } from './components/hospital-information/hospital-information.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    AboutComponent,
    HospitalInformationComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQCFQLG-EtcuX-8MX23WGSUvhy-yM4Vto'
    }),
  ],
  providers: [ HospitalService, GeocodingService, SharingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
