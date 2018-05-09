import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Router Module import
import { Routes, RouterModule } from "@angular/router";

// Routing 처리를 할 각각의 Component import
import { HomeComponent } from "../pages/home/home.component";
import { BasicFormsMainComponent } from "../basic-forms/basic-forms-main/basic-forms-main.component";

// Router 생성( path 표시할 때 Root path에 대한 '/'는 제외 )
const routers: Routes = [
  { path : '', component : HomeComponent },
  { path : 'basic', component : BasicFormsMainComponent }
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
