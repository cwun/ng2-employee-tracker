import { Component } from '@angular/core';
import { DatePipe } from "@angular/common";
import { HTTP_PROVIDERS, Http } from "@angular/http";
import { DataTableDirectives } from 'angular2-datatable/datatable';

@Component({
    selector: 'my-employees'
    ,templateUrl: 'app/employees/employees.component.html'
    ,providers: [HTTP_PROVIDERS]
    ,directives: [DataTableDirectives],
    pipes: [DatePipe]
})

export class EmployeesComponent {
    public title = 'Employees';

    private data;

    constructor(private http:Http) {
        http.get("api/employees.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 1000);
            });
    }
}
