import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class nodeJsService {
    serverTimeSubject = new BehaviorSubject<number>(0);
    constructor () {}

    onServerTime = (time: number) => {
        this.serverTimeSubject.next(time);
    }   
}