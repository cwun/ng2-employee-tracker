import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Dashboard } from './dashboard.model';
import { DashboardService } from './dashboard.service';

@Injectable()
export class DashboardResolver implements Resolve<Dashboard> {
    constructor(
        private dashboardService: DashboardService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Dashboard> {
        return this.dashboardService.getSetting();
    }
}

