import { RouterConfig }         from '@angular/router';
import { DashboardResolver }    from './dashboard.resolver';
import { DashboardComponent }   from './dashboard.component';

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
