import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BodyComponent } from './body/body.component';
import { TooltipOptionsComponent } from './tooltip-options/tooltip-options.component';
import { TableComponent } from './table/table.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import {HttpService} from "./http.service";
import {HttpClientModule} from "@angular/common/http";
import {BodyStates} from "./redux/bodyStates";

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    SideNavComponent,
    BodyComponent,
    TooltipOptionsComponent,
    TableComponent,
    WelcomeMessageComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [HttpService, BodyStates],
  bootstrap: [AppComponent]
})
export class AppModule { }
