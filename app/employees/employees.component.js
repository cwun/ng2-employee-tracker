"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require("@angular/common");
var datatable_1 = require('angular2-datatable/datatable');
var employee_service_1 = require('./employee.service');
var EmployeesComponent = (function () {
    function EmployeesComponent(employeeService) {
        this.employeeService = employeeService;
        this.title = 'Employees';
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    EmployeesComponent.prototype.getList = function () {
        var _this = this;
        this.employeeService.getList()
            .subscribe(function (data) { return _this.employees = data; }, function (error) { return _this.errorMessage = error; });
    };
    EmployeesComponent = __decorate([
        core_1.Component({
            selector: 'et-employees',
            templateUrl: 'app/employees/employees.component.html',
            directives: [datatable_1.DataTableDirectives],
            pipes: [common_1.DatePipe]
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService])
    ], EmployeesComponent);
    return EmployeesComponent;
}());
exports.EmployeesComponent = EmployeesComponent;
//# sourceMappingURL=employees.component.js.map