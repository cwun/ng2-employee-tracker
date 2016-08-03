import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Dashboard, ChartData } from './dashboard.model';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {

    constructor(private http: Http) { }

    getSetting() : Observable<Dashboard> {
        return this.http.get('api/dashboard.json')
            .map(response => <Dashboard>response.json().data);
    }
}
