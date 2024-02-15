import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighchartsChartModule } from 'highcharts-angular';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { SalesComponent } from './sales/sales.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { CmsDashboardComponent } from './cms-dashboard/cms-dashboard.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
     SalesComponent, AnalyticsComponent, ProjectManagementComponent, CmsDashboardComponent
  ],
  // exports: [
  //   ECommerceComponent,
  //   MultiSelectComponent
  // ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PerfectScrollbarModule,
    HighchartsChartModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class DashboardModule { }
