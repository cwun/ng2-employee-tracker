"use strict";
// main entry point
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.appRouterProviders,
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map