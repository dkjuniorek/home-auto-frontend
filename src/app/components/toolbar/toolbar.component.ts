import { Component, OnInit } from '@angular/core';

import { ToolbarService, ToolbarMenuItem } from './toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  menuItems: ToolbarMenuItem[] = [
    {
      label: 'Status',
      icon: 'info',
      link: 'status',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Sterowanie',
      icon: 'donut_large',
      link: 'drive',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'About',
      icon: 'copyright',
      link: 'about',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'ModBUS I/O',
      icon: 'memory',
      link: 'io',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Testing Module',
      icon: '360',
      link: 'testing',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    }
  
  ];

  loading: boolean = false;

  constructor(private toolbarService: ToolbarService) { }

  ngOnInit(): void {
    this.toolbarService.loading.subscribe((loading:boolean) => {
      this.loading = loading;
    })

  }

}
