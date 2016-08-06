import { HTTP_PROVIDERS } from '@angular/http';
import { provideRouter, RouterConfig } from '@angular/router';

import { DashboardResolver } from './dashboard/dashboard.resolver';
import { DashboardRoutes }  from './dashboard/dashboard.routes';
import { DashboardService }  from './dashboard/dashboard.service';
import { EmployeesResolver } from './employees/employees.resolver';
import { EmployeesRoutes }  from './employees/employees.routes';
import { EmployeeService }  from './employees/employee.service';

const routes: RouterConfig = [
    ...DashboardRoutes,
    ...EmployeesRoutes
];

export const appRouterProviders = [
    provideRouter(routes)
    ,HTTP_PROVIDERS
    ,DashboardResolver
    ,DashboardService
    ,EmployeesResolver
    ,EmployeeService
];

