"use strict";
var dashboard_resolver_1 = require('./dashboard.resolver');
var dashboard_component_1 = require('./dashboard.component');
exports.DashboardRoutes = [
    { path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
        resolve: {
            dashboard: dashboard_resolver_1.DashboardResolver
        }
    },
    { path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        resolve: {
            dashboard: dashboard_resolver_1.DashboardResolver
        }
    }
];
//# sourceMappingURL=dashboard.routes.js.map