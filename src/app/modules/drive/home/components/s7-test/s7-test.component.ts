import { Component, OnInit } from '@angular/core';

import { s7Service } from 'src/app/modules/webSocket/Siemens/s7.service';
import { ToolbarService } from 'src/app/components/toolbar/toolbar.service';

import * as delay from 'delay';

@Component({
  selector: 'app-s7-test',
  templateUrl: './s7-test.component.html',
  styleUrls: ['./s7-test.component.scss']
})
export class S7TestComponent implements OnInit {
  inputs: boolean[] = [false, false, false, false, false, false];
  outputs: boolean[] = [false, false, false, false];
  s7Registers: number[] = [];
  s7RegsDes: Array<Array<string>> = [];

  toggling: boolean = false;

  constructor(private s7Service: s7Service, private toolbarService: ToolbarService) { }

  ngOnInit(): void {
    this.s7RegsDes = this.s7Service.s7RegsDes;
    this.s7Service.s7RegistersSubject.subscribe((data:Array<number>) => {
      this.s7Registers = data;
      this.inputs.forEach((val, idx) => { this.inputs[idx] = Boolean(this.s7Registers[0] & Math.pow(2, idx)) });
      this.outputs.forEach((val, idx) => { this.outputs[idx] = Boolean(this.s7Registers[1] & Math.pow(2, idx)) });
    });

    this.toolbarService.loading.subscribe(loading => {
      this.toggling = loading;
    })
  }




  async toggleCoil(coil: number) {
    this.toolbarService.onLoad();
    if (this.outputs[coil]) this.s7Service.setRegister(1, this.s7Registers[1] & 0xFFFF - Math.pow(2,coil));
    else this.s7Service.setRegister(1, this.s7Registers[1] | Math.pow(2,coil));
    await delay(1500);
    this.toolbarService.onFinished();
  }  

}
