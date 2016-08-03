import { Component, OnInit } from '@angular/core';
import { nvD3 }              from './ng2-nvd3';

import { Dashboard } from './dashboard.model';
import { DashboardService } from './dashboard.service';

declare let d3: any;

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html'
    ,directives: [ nvD3 ]
})

export class DashboardComponent implements OnInit {
    title = 'Dashboard';
    dashboard: Dashboard;
    lineChartOptions;
    lineChartData;
    pieChartOptions;
    pieChartData;

    constructor (private service: DashboardService) {}

    ngOnInit() {
        this.dashboard = new Dashboard();
        this.dashboard.totalPositions = 10;
        this.dashboard.totalOffices = 11;
        this.dashboard.totalEmployees = 12;

        this.lineChartOptions = {
            chart: {
                type: 'historicalBarChart',
                height: 500,
                margin : {
                    top: 40,
                    right: 50,
                    bottom: 60,
                    left: 30
                },
                x: function(d){ return d.key; },
                y: function(d){ return d.value; },
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
                x: function(d){return d.key;},
                y: function(d){return d.value;},
                showLabels: true,
                valueFormat: function(d){
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
    }
}
