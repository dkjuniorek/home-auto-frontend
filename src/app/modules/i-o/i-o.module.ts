import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgMaterialModule } from '../ng-material.module';

import { IORoutingModule } from './i-o-routing.module';

import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent 
  ],
  imports: [
    CommonModule,
    NgMaterialModule,
    IORoutingModule
  ],
  providers: []
})
export class IOModule { }
