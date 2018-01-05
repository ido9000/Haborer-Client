import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import {TableComponent} from "../table/table.component";
import {RequestToOthersComponent} from "../request-to-others/request-to-others.component";
import {MyRequestsTableComponent} from "../my-requests-table/my-requests-table.component";
import {WelcomeMessageComponent} from "../welcome-message/welcome-message.component";

const routes: Routes = [
  {
    path: '',
    component: WelcomeMessageComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'addNewItem',
    component: DashboardComponent, /*TODO: change after merge*/
  },
  {
    path: 'toOthersRequest',
    component: RequestToOthersComponent,
  },
  {
    path: 'fromOthersRequest',
    component: MyRequestsTableComponent,
  },
  {
    path: 'login',
    component: DashboardComponent, /*TODO: change after merge*/
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
