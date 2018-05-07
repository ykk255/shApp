import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//material 1step)
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//material 2step)
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

//material 모듈 전부 가져다 쓰겠다는 것
import { MaterialModule } from './material/material.module';

// 게시판 module
import { BoardModule } from "./board/board.module"

// Routing module
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
    AppRoutingModule,
    BoardModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
