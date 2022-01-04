import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgMaterialModule } from '../ng-material.module';

import { DriveRoutingModule } from './drive-routing.module';

import { HomeComponent } from './home/home.component';
import { S7TestComponent } from './home/components/s7-test/s7-test.component';





@NgModule({
  declarations: [
    HomeComponent,
    S7TestComponent,
  ],
  imports: [
    CommonModule,
    NgMaterialModule,
    DriveRoutingModule
  ],
  providers: []
})
export class DriveModule { }
