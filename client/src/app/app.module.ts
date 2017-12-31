import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BodyComponent } from './body/body.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    SideNavComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
