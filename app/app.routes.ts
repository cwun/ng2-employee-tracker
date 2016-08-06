import { provideRouter, RouterConfig } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { DashboardRoutes }  from './dashboard/dashboard.routes';
import { DashboardResolver } from './dashboard/dashboard.resolver';
import { DashboardService }  from './dashboard/dashboard.service';

import { EmployeesRoutes }  from './employees/employees.routes';
import { EmployeesResolver } from './employees/employees.resolver';
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

