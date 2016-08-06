import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CONFIG } from '../shared/config';
import { Dashboard } from './dashboard.model';

@Injectable()
export class DashboardService {

    private url = CONFIG.urls.resourceServer + CONFIG.urls.dashboard;  // URL to web API

    constructor(private http: Http) { }

    getSetting() : Observable<Dashboard> {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let data = res.json();
        return data || { };
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
