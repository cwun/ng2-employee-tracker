import { EmployeesComponent }  from './employees.component';
import { EmployeesResolver }    from './employees.resolver';

export const EmployeesRoutes = [
    { path: 'employees'
        , component: EmployeesComponent
        , resolve: {
            employees: EmployeesResolver
        }
    }
];
