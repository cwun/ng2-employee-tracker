import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable }                      from '@angular/core';
import { Observable }                      from 'rxjs/Observable';

import { DashboardService }                from './dashboard.service';

@Injectable()
export class DashboardResolve implements Resolve<any> {
    constructor(private dashboardService: DashboardService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.dashboardService.getSetting();
    }
}