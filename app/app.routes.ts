import { provideRouter, RouterConfig } from '@angular/router';

import { DashboardRoutes }  from './dashboard/dashboard.routes';
import { EmployeesRoutes }  from './employees/employees.routes';

const routes: RouterConfig = [
    ...DashboardRoutes,
    ...EmployeesRoutes
];
export const appRouterProviders = [
    provideRouter(routes)
];

