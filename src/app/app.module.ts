import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// BrowserAnimationsModule import ?? ??
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MatTableModule import ?? ??
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

// Feature Module import
import { BasicFormsModule } from "./basic-forms/basic-forms.module";
import { TablesModule } from "./tables/tables.module";
import { ChartModule } from "./chart/chart.module";

// Routing Module import
import { AppRoutingModule } from "./app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    BasicFormsModule,
    AppRoutingModule,
    TablesModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
