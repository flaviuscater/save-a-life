import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {LoginComponent} from './components/login/login.component';
import { AdminRoleRouteGuardService } from './services/admin-role-route-guard.service';
import {UserRoleRouteGuardService} from './services/user-role-route-guard.service';
import {HospitalInputFormComponent} from './components/hospital-input-form/hospital-input-form.component';
import {AddNotificationComponent} from './components/add-notification/add-notification.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'addHospital', component: HospitalInputFormComponent, canActivate: [AdminRoleRouteGuardService]},
  { path: 'addNotification', component: AddNotificationComponent, canActivate: [AdminRoleRouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
