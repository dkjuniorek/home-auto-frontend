import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Buffer } from 'buffer';

@Injectable()
export class s7Service {
    s7RegistersSubject = new BehaviorSubject<Array<number>>([]);
    setSingleMsgSubject = new BehaviorSubject<setSingleRegisterMsg>({reg: 99, val: 500});
    public s7RegsDes: Array<Array<string>> = [
        ["000", "Wejście", "S7-1200", "Wejścia I0.0--I0.5 sterownika PLC"],
        ["001", "Wyjście", "S7-1200", "Wyjścia Q0.0--Q0.3 sterownika PLC"],
        ["002", "Wejście", "NodeJS Backend", "aktywność/aktualna moc invertera Solis"],
        ["003", "Wejście", "NodeJS Backend", "alarm/energia dziś invertera Solis"],
        ["004", "Wejście", "NodeJS Backend", "energia całkowita invertera Solis"],
        ["005", "Wyjście", "NodeMcu Stodoła", "oświetlenie"],
        ["006", "Wejście", "NodeMcu Stodoła", "temperatura, symulacja"],
        ["007", "Wejście", "NodeMcu Stodoła", "czas pracy"],
        ["008", "Wyjście", "Arduino testowe", "przekaźniki"],
        ["009", "Wejście", "Arduino testowe", "temperatura, symulacja"],
        ["010", "Wejście", "Arduino testowe", "czas pracy"],
    ];
    constructor () {}

    onRegistersBuffer = (buffer: string) => {
        let array: Array<any>[120] = [];
        let json = JSON.parse(buffer);
        json.forEach((el:any)=> {array.push(Buffer.from(el.data).readUInt16BE(0))});
        this.s7RegistersSubject.next(array); 
    }

    setRegister(reg:number, val: number) {
        this.setSingleMsgSubject.next({reg, val});
    }
    

    
}


interface setSingleRegisterMsg {
    reg: number,
    val: number
}