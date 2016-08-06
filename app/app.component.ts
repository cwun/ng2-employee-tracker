import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component ({
    selector: 'employee-tracker-app'
    ,templateUrl: 'app/app.component.html'
    ,directives: [ ROUTER_DIRECTIVES ]
})

export class AppComponent {
    public heading = 'Angular 2 Employee Tracker App';
}