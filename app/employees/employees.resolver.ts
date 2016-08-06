import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Injectable()
export class EmployeesResolver implements Resolve<Employee> {
    constructor(
        private employeeService: EmployeeService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Employee[]> {
        return this.employeeService.getList();
    }
}

