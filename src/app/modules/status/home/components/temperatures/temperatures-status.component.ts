import { Component, OnInit } from '@angular/core';

import { s7Service } from 'src/app/modules/webSocket/Siemens/s7.service';

@Component({
  selector: 'app-temperatures-status',
  templateUrl: './temperatures-status.component.html',
  styleUrls: ['./temperatures-status.component.scss']
})
export class TemperaturesStatusComponent implements OnInit {
  temperaturesStatus: temperaturesStatus = {
    outside: -3.2,
    basement: 8.3,
    home: 21.4
  }

  constructor(private s7Service: s7Service) { }

  ngOnInit(): void {
    this.s7Service.s7RegistersSubject.subscribe(registers=> {
      let outside = -3.2;
      let basement = 8.3;
      let home = 20.3
      this.temperaturesStatus = { outside, basement, home }
    });
  }

}


interface temperaturesStatus {
  outside: number;
  basement: number;
  home: number
}