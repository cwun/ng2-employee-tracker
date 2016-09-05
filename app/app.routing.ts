import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    // 1st Route
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    // 2nd Route
    { path: 'employees', redirectTo: '/employees' },
    // 3rd Route
    { path: '**', redirectTo: '/dashboard' }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });