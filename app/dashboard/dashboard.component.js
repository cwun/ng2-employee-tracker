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
var ng2_nvd3_1 = require('./ng2-nvd3');
var dashboard_model_1 = require('./dashboard.model');
var dashboard_service_1 = require('./dashboard.service');
var DashboardComponent = (function () {
    function DashboardComponent(service) {
        this.service = service;
        this.title = 'Dashboard';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.dashboard = new dashboard_model_1.Dashboard();
        this.dashboard.totalPositions = 10;
        this.dashboard.totalOffices = 11;
        this.dashboard.totalEmployees = 12;
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
                values: [
                    {
                        "key": 2009,
                        "value": 9
                    },
                    {
                        "key": 2010,
                        "value": 16
                    },
                    {
                        "key": 2011,
                        "value": 23
                    },
                    {
                        "key": 2012,
                        "value": 31
                    },
                    {
                        "key": 2013,
                        "value": 37
                    },
                    {
                        "key": 2014,
                        "value": 39
                    },
                    {
                        "key": 2015,
                        "value": 41
                    },
                    {
                        "key": 2016,
                        "value": 42
                    }
                ],
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
        this.pieChartData = [
            {
                "key": "Edinburgh",
                "value": 7
            },
            {
                "key": "London",
                "value": 9
            },
            {
                "key": "New York",
                "value": 7
            },
            {
                "key": "San Francisco",
                "value": 11
            },
            {
                "key": "Sidney",
                "value": 2
            },
            {
                "key": "Singapore",
                "value": 2
            },
            {
                "key": "Tokyo",
                "value": 4
            }
        ];
        /*this.service.getSetting()
            .subscribe(data => this.dashboard = data );
            */
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/dashboard/dashboard.component.html',
            directives: [ng2_nvd3_1.nvD3]
        }), 
        __metadata('design:paramtypes', [dashboard_service_1.DashboardService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map