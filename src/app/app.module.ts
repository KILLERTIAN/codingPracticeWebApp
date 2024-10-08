import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NavbarComponent } from './navbar/navbar.component';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule

import { TableComponent } from './dashboard/containers/table/table.component';
import { MatPaginatorModule } from '@angular/material/paginator'; // For paginator
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core'; // Import ErrorStateMatcher

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DashboardModule,
    FormsModule,
    MatPaginatorModule,
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher } // Add the ErrorStateMatcher provider
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
