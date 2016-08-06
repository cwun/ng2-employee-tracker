import { RouterConfig }         from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { DashboardResolver }    from './dashboard.resolver';

export const DashboardRoutes: RouterConfig = [
    { path: ''
        , redirectTo: '/dashboard'
        , pathMatch: 'full'
        , resolve: {
            dashboard: DashboardResolver
        }
    }
    ,{ path: 'dashboard'
        , component: DashboardComponent
        , resolve: {
            dashboard: DashboardResolver
        }
    }
];
