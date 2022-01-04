import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { BehaviorSubject } from 'rxjs';
import { delay, retryWhen } from 'rxjs/operators';
import { env } from '../../../environments/environment';

import { s7Service } from "./Siemens/s7.service";
import { nodeJsService } from './NodeJS/nodejs.service';



@Injectable()
export class webSocketService {
    myWebSocket: WebSocketSubject<any> = webSocket('ws://10.8.0.100:8001');

    s7registers = new BehaviorSubject<Array<number>>([]);
    nodeTime = new BehaviorSubject<number>(0);
    
    constructor(
        private s7service: s7Service,
        private njsService: nodeJsService,
    ) {
        this.myWebSocket.pipe(retryWhen((errors) => errors.pipe(delay(env.webSocket.reconnectDelay)))).subscribe(data => { 
            let msg: wsMessage = data;
            switch (msg.type) {
                case 10: this.njsService.onServerTime(Number(msg.msg));; break;
                case 20: this.s7service.onRegistersBuffer(msg.msg); break;
                default: console.log(`Incorrect msg: ${data}`)
            }
                   
        },
        error => console.log(error));

        this.s7service.setSingleMsgSubject.subscribe(msg => {
            this.myWebSocket.next({type: 30, message: {...msg}});
        });
    }
}


interface wsMessage {
    type: number;
    msg: string;
}