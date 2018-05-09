import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AgmCoreModule} from "@agm/core";
import {HospitalService} from "./services/hospital.service";
import {GeocodingService} from "./services/geocoding.service";


@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQCFQLG-EtcuX-8MX23WGSUvhy-yM4Vto'
    })
  ],
  providers: [ HospitalService, GeocodingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
