import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgMaterialModule } from '../ng-material.module';

import { StatusRoutingModule } from './status-routing.module';

import { HomeComponent } from './home/home.component';
import { PvStatusComponent } from './home/components/pv/pv.component';
import { LightningStatusComponent } from './home/components/lightning/lightning.component';
import { TemperaturesStatusComponent } from './home/components/temperatures/temperatures-status.component';



@NgModule({
  declarations: [
    HomeComponent,
    PvStatusComponent,
    LightningStatusComponent,
    TemperaturesStatusComponent
  ],
  imports: [
    CommonModule,
    NgMaterialModule,
    StatusRoutingModule
  ]
})
export class StatusModule { }
