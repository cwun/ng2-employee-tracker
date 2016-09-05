import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }    from './dashboard.component';

import { DashboardResolve }   from './dashboard-resolve.service';

const dashboardRoutes: Routes = [
    {   path: 'dashboard',  
        component: DashboardComponent,
        resolve: {
            dashboard: DashboardResolve
        } 
    }
];

export const dashboardRouting = RouterModule.forChild(dashboardRoutes);