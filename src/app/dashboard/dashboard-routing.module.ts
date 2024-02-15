import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnalyticsComponent } from './analytics/analytics.component';
import { CmsDashboardComponent } from './cms-dashboard/cms-dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { SalesComponent } from './sales/sales.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'e-commerce',
        component: ECommerceComponent,
        data: {
          title: 'eCommerce'
        }
      },
      {
        path: 'sales',
        component: SalesComponent,
        data: {
          title: 'Sales'
        }
      },
      {
        path: 'analytics',
        component: AnalyticsComponent,
        data: {
          title: 'Analytics'
        }
      },
      {
        path: 'multi-select',
        component: MultiSelectComponent,
        data: {
          title: 'multi-select'
        }
      },
      {
        path: 'project-management',
        component: ProjectManagementComponent,
        data: {
          title: 'Project Management'
        }
      },
      {
        path: 'cms-dashboard',
        component: CmsDashboardComponent,
        data: {
          title: 'CMS Dashboard'
        }
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
