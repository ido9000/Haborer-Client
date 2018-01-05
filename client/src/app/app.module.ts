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
import {HttpService} from "./http.service";
import {HttpClientModule} from "@angular/common/http";
// import {BodyStates} from "./redux/bodyStates";
import { AddItemComponent } from './add-item/add-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyRequestsTableComponent } from './my-requests-table/my-requests-table.component';
import { ItemsPipe } from './items.pipe';
import { RequestToOthersComponent } from './request-to-others/request-to-others.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    SideNavComponent,
    BodyComponent,
    TooltipOptionsComponent,
    TableComponent,
    WelcomeMessageComponent,
    AddItemComponent,
    MyRequestsTableComponent,
    ItemsPipe,
    RequestToOthersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [HttpService], //, BodyStates],
  bootstrap: [AppComponent]
})
export class AppModule { }
