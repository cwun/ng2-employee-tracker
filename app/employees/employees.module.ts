import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { DataTableDirectives } from 'angular2-datatable/datatable';

/* Employees Feature Module */
import { EmployeesComponent } from './employees.component';
import { EmployeeService }    from './employee.service';
import { EmployeesResolve }   from './employees-resolve.service';

/* Employees Router */
import { employeesRouting }   from './employees.routing';

@NgModule({
    imports:      [ CommonModule, employeesRouting ],
    declarations: [ EmployeesComponent, DataTableDirectives ],
    providers:    [ EmployeeService, EmployeesResolve ]
})

export class EmployeesModule {}