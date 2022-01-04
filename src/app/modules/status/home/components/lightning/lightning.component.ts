import { Component, OnInit } from '@angular/core';

import { s7Service } from 'src/app/modules/webSocket/Siemens/s7.service';
import { ToolbarService } from 'src/app/components/toolbar/toolbar.service';

import * as delay from 'delay';

@Component({
  selector: 'app-lightning-status',
  templateUrl: './lightning.component.html',
  styleUrls: ['./lightning.component.scss']
})
export class LightningStatusComponent implements OnInit {
  s7Registers: number[] = [];

  toggling: boolean = false;




  lights: light[] = [];


  lightningStatus: lightninhStatus = {
    doppler: false,
    barn: false,
    xmas: false,
    test1: false,
    test2: false,
    test3: false,
    test4: false
  }

  constructor(private s7Service: s7Service, private toolbarService: ToolbarService) { }

  ngOnInit(): void {
    this.s7Service.s7RegistersSubject.subscribe(registers=> {
      this.s7Registers = registers;
      let doppler = Boolean(registers[5] & 0x0001);
      let barn = Boolean(registers[5] & 0x0002);
      let xmas = Boolean(registers[5] & 0x0004);
      let test1 = Boolean(registers[6] & 0x0001);
      let test2 = Boolean(registers[6] & 0x0002);
      let test3 = Boolean(registers[7] & 0x0001);
      let test4 = Boolean(registers[7] & 0x0002);

 

      this.lights[0] = { st: Boolean(registers[5] & 0x0001), reg: 5, b: 0 }  //Doppler
      this.lights[1] = { st: Boolean(registers[5] & 0x0002), reg: 5, b: 1 } //Stodołą
      this.lights[2] = { st: Boolean(registers[5] & 0x0004), reg: 5, b: 2 }   //Święta
      this.lights[3] = { st: Boolean(registers[6] & 0x0001), reg: 6, b: 0 } //Test1
      this.lights[4] = { st: Boolean(registers[6] & 0x0002), reg: 6, b: 1 } //Test2
      this.lights[5] = { st: Boolean(registers[7] & 0x0001), reg: 7, b: 0 }  //Test3
      this.lights[6] = { st: Boolean(registers[7] & 0x0002), reg: 7, b: 1 }  //Test4
      

      this.lightningStatus = { doppler, barn, xmas, test1, test2, test3, test4 }

    });

    this.toolbarService.loading.subscribe(loading => {
      this.toggling = loading;
    })
  }

  async toggleLightningBit(light:number, register: number, bit: number) {
    this.toolbarService.onLoad();
    if (this.lights[light].st) this.s7Service.setRegister(register, this.s7Registers[register] & 0xFFFF - Math.pow(2, bit));
    else  this.s7Service.setRegister(register, this.s7Registers[register] | Math.pow(2, bit));

    await delay(1500);
    this.toolbarService.onFinished();
  }
}


interface lightninhStatus {
  doppler: boolean;
  barn: boolean;
  xmas: boolean;
  test1: boolean;
  test2: boolean;
  test3: boolean;
  test4: boolean;
}


interface light {
  st: boolean;
  reg: number;
  b: number;
}