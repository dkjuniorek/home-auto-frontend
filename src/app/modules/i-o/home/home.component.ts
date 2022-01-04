import { Component, OnInit } from '@angular/core';
import { s7Service } from 'src/app/modules/webSocket/Siemens/s7.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  s7Registers: number[] = [];
  s7RegsDes: Array<Array<string>> = [];

  constructor(
    private s7Service: s7Service
  ) { }

  ngOnInit(): void {
    this.s7RegsDes = this.s7Service.s7RegsDes;
    this.s7Service.s7RegistersSubject.subscribe(registers => {
      this.s7Registers = registers;
    })
  }
}


