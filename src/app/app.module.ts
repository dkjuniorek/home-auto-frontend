import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

//customModules
import { NgMaterialModule } from './modules/ng-material.module';
import { WsModule } from './modules/webSocket/ws.module';


//custom components
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ToolbarService } from './components/toolbar/toolbar.service';

@NgModule({
  declarations: [
    AppComponent,

    
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    NgMaterialModule,
    WsModule,

  ],
  providers: [ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
