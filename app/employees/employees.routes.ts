import { RouterConfig }         from '@angular/router';
import { EmployeesResolver }    from './employees.resolver';
import { EmployeesComponent }  from './employees.component';

export const EmployeesRoutes = [
    { path: 'employees'
        , component: EmployeesComponent
        , resolve: {
            employees: EmployeesResolver
    }}
];
