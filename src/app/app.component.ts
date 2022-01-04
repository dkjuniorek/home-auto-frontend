import { Component } from '@angular/core';

import { webSocketService } from './modules/webSocket/ws-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private webSocketService: webSocketService) {}
  title = 's7-home-auto';
}
