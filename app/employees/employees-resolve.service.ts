import { Injectable }                      from '@angular/core';
import { Observable }                      from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Employee }                        from './employee.model';
import { EmployeeService }                 from './employee.service';

@Injectable()
export class EmployeesResolve implements Resolve<Employee> {
    constructor(
        private employeeService: EmployeeService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Employee[]> {
        return this.employeeService.getList();
    }
}