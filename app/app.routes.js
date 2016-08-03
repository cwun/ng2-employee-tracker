"use strict";
var router_1 = require('@angular/router');
var dashboard_routes_1 = require('./dashboard/dashboard.routes');
var employees_routes_1 = require('./employees/employees.routes');
var routes = dashboard_routes_1.DashboardRoutes.concat(employees_routes_1.EmployeesRoutes);
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map