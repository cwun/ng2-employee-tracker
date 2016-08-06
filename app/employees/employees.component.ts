import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import { DataTableDirectives } from 'angular2-datatable/datatable';

import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'et-employees'
    ,templateUrl: 'app/employees/employees.component.html'
    ,directives: [DataTableDirectives],
    pipes: [DatePipe]
})

export class EmployeesComponent implements OnInit {
    errorMessage: string;
    title = 'Employees';
    employees: Employee[];

    constructor(private employeeService: EmployeeService) {}

    ngOnInit() {
        this.getList();
    }

    private getList() {
        this.employeeService.getList()
            .subscribe(
                data => this.employees = data,
                error =>  this.errorMessage = <any>error
            );
    }
}
