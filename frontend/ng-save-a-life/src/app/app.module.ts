import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import {HospitalService} from './services/hospital.service';
import {GeocodingService} from './services/geocoding.service';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {MaterialModule} from './material.module';
import {SharingService} from './services/sharing.service';
import { HospitalInformationComponent } from './components/hospital-information/hospital-information.component';
import {AuthService} from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { HospitalInputFormComponent } from './components/hospital-input-form/hospital-input-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    AboutComponent,
    HospitalInformationComponent,
    LoginComponent,
    HospitalInputFormComponent,
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
  providers: [ HospitalService, GeocodingService, SharingService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
