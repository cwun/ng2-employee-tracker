import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent }    from './employees.component';

import { EmployeesResolve }   from './employees-resolve.service';

const employeesRoutes: Routes = [
    {   path: 'employees',  
        component: EmployeesComponent,
        resolve: {
            employees: EmployeesResolve
        } 
    }
];

export const employeesRouting = RouterModule.forChild(employeesRoutes);