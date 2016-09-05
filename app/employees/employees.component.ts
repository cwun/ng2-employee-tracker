import { ActivatedRoute }      from '@angular/router';
import { Component, OnInit }   from '@angular/core';

import { Employee }            from './employee.model';

@Component({
    selector:     'et-employees'
    ,templateUrl: 'app/employees/employees.component.html'
})

export class EmployeesComponent implements OnInit {
    errorMessage: string;
    title = 'Employees';
    employees: Employee[];

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        /* Initialize this.* bindable members with data.* members */
        this.employees = this.route.snapshot.data['employees'];
    }
}