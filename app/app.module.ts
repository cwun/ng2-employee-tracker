import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { HttpModule }         from '@angular/http';

/* App Root */
import { AppComponent }       from './app.component';
import { SidebarComponent }   from './layout/sidebar.component';

/* Feature Modules */
import { DashboardModule }    from './dashboard/dashboard.module';
import { EmployeesModule }    from './employees/employees.module';

/* App Router */
import { routing }            from './app.routing';

@NgModule({
    imports:      [ BrowserModule, DashboardModule, EmployeesModule, HttpModule, routing ],
    declarations: [ AppComponent, SidebarComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}