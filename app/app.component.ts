import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { DashboardService }  from './dashboard/dashboard.service';

@Component ({
    selector: 'employee-tracker-app'
    ,templateUrl: 'app/app.component.html'
    ,providers: [ DashboardService, HTTP_PROVIDERS ]
    ,directives: [ ROUTER_DIRECTIVES ]
})

export class AppComponent {
    public heading = 'Angular 2 Employee Tracker App';
}