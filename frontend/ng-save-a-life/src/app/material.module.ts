import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule, MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
  MatInputModule
} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  imports: [
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatSnackBarModule
  ],
})
export class MaterialModule { }
