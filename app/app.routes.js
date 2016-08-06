"use strict";
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var dashboard_routes_1 = require('./dashboard/dashboard.routes');
var dashboard_resolver_1 = require('./dashboard/dashboard.resolver');
var dashboard_service_1 = require('./dashboard/dashboard.service');
var employees_routes_1 = require('./employees/employees.routes');
var employees_resolver_1 = require('./employees/employees.resolver');
var employee_service_1 = require('./employees/employee.service');
var routes = dashboard_routes_1.DashboardRoutes.concat(employees_routes_1.EmployeesRoutes);
exports.appRouterProviders = [
    router_1.provideRouter(routes),
    http_1.HTTP_PROVIDERS,
    dashboard_resolver_1.DashboardResolver,
    dashboard_service_1.DashboardService,
    employees_resolver_1.EmployeesResolver,
    employee_service_1.EmployeeService
];
//# sourceMappingURL=app.routes.js.map