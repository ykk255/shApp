import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Router Module import
import { Routes, RouterModule } from "@angular/router";

// Routing 처리를 할 각각의 component import
import { HomeComponent } from "../pages/home/home.component";
import { BoardMainComponent } from "../board/board-main/board-main.component";

// router 생성
const routers: Routes = [
  { path : '', component : HomeComponent },
  { path : 'board', component : BoardMainComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routers)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
