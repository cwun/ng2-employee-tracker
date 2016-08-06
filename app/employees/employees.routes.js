"use strict";
var employees_resolver_1 = require('./employees.resolver');
var employees_component_1 = require('./employees.component');
exports.EmployeesRoutes = [
    { path: 'employees',
        component: employees_component_1.EmployeesComponent,
        resolve: {
            employees: employees_resolver_1.EmployeesResolver
        } }
];
//# sourceMappingURL=employees.routes.js.map