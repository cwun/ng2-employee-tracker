"use strict";
var dashboard_component_1 = require('./dashboard.component');
var dashboard_resolver_1 = require('./dashboard.resolver');
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