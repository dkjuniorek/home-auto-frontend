import { Component, OnInit } from '@angular/core';

import { s7Service } from 'src/app/modules/webSocket/Siemens/s7.service';

@Component({
  selector: 'app-pv-status',
  templateUrl: './pv.component.html',
  styleUrls: ['./pv.component.scss']
})
export class PvStatusComponent implements OnInit {
  pvStatus: pvStatus = {
    currentPower: 0,
    isOnline: false,
    todayEnergy: 0,
    alarm: false,
    totalEnergy: 0,
 
    
  }


  constructor(private s7Service: s7Service) { }

  ngOnInit(): void {
    this.s7Service.s7RegistersSubject.subscribe(registers=> {
      let currentPower = registers[2] & 0x7FFF;
      let isOnline = Boolean(registers[2] & 0x8000);
      let todayEnergy = registers[3] & 0x7FFF;
      let alarm = Boolean(registers[3] & 0x8000);
      let totalEnergy = registers[4];
    
      this.pvStatus = { currentPower, isOnline, todayEnergy, alarm, totalEnergy }
    });
  }

}



interface pvStatus {
  currentPower: number;
  totalEnergy: number;
  todayEnergy: number;
  alarm: boolean;
  isOnline: boolean;
}
