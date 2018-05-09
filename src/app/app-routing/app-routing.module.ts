import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Router Module import
import { Routes, RouterModule } from "@angular/router";

<<<<<<< HEAD
// Routing 처리를 할 각각의 Component import
import { HomeComponent } from "../pages/home/home.component";
import { BasicFormsMainComponent } from "../basic-forms/basic-forms-main/basic-forms-main.component";

// Router 생성( path 표시할 때 Root path에 대한 '/'는 제외 )
const routers: Routes = [
  { path : '', component : HomeComponent },
  { path : 'basic', component : BasicFormsMainComponent }
];


=======
// Routing 처리를 할 각각의 component import
import { HomeComponent } from "../pages/home/home.component";
import { BoardMainComponent } from "../board/board-main/board-main.component";

// router 생성
const routers: Routes = [
  { path : '', component : HomeComponent },
  { path : 'board', component : BoardMainComponent }
];

>>>>>>> db39c212e2eff5e0f4e270b1ba27316c3d01860b
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routers)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
