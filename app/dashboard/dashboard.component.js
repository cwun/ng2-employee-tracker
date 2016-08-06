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
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var ng2_nvd3_1 = require('./ng2-nvd3');
var DashboardComponent = (function () {
    function DashboardComponent(route) {
        this.route = route;
        this.title = 'Dashboard';
        this.pieChartData = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var data = this.route.snapshot.data['dashboard'];
        this.positions = data.totalPositions;
        this.offices = data.totalOffices;
        this.employees = data.totalEmployees;
        this.setupCharts(data);
    };
    DashboardComponent.prototype.setupCharts = function (data) {
        this.lineChartOptions = {
            chart: {
                type: 'historicalBarChart',
                height: 500,
                margin: {
                    top: 40,
                    right: 50,
                    bottom: 60,
                    left: 30
                },
                x: function (d) { return d.key; },
                y: function (d) { return d.value; },
                xAxis: {
                    axisLabel: 'Years',
                    rotateLabels: 30
                },
                yAxis: {
                    axisLabel: 'Employees',
                    axisLabelDistance: -10
                },
                showLegend: false
            }
        };
        this.lineChartData = [{
                values: data.employeesPerYear,
                color: '#7777ff',
                area: true
            }];
        this.pieChartOptions = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function (d) { return d.key; },
                y: function (d) { return d.value; },
                showLabels: true,
                valueFormat: function (d) {
                    return d3.format(',.0f')(d) + ' employees';
                },
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };
        this.pieChartData = data.employeesPerOffice;
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'et-dashboard',
            templateUrl: 'app/dashboard/dashboard.component.html',
            directives: [ng2_nvd3_1.nvD3]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map