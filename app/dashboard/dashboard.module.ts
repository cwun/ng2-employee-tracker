import { NgModule }           from '@angular/core';
import { nvD3 }               from './ng2-nvd3';

/* Dashboard Feature Module */
import { DashboardComponent } from './dashboard.component';
import { DashboardService }   from './dashboard.service';
import { DashboardResolve }   from './dashboard-resolve.service';

/* Dashboard Router */
import { dashboardRouting }   from './dashboard.routing';

@NgModule({
    imports: [ dashboardRouting ],
    declarations: [ DashboardComponent, nvD3 ],
    providers: [ DashboardService, DashboardResolve ]
})

export class DashboardModule {}