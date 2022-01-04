import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { s7Service } from './Siemens/s7.service';
import { nodeJsService } from './NodeJS/nodejs.service';
import { webSocketService } from './ws-service';


@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        webSocketService,
        nodeJsService,
        s7Service,
        s7Service
    ]
}) 
export class WsModule { }