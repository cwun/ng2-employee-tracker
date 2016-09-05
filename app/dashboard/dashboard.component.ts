import { ActivatedRoute }    from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare let d3: any;

@Component({
    selector:    'et-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    title = 'Dashboard';
    positions: number;
    offices: number;
    employees: number;
    lineChartOptions: {};
    lineChartData: {};
    pieChartOptions: {};
    pieChartData: {};

    constructor (private route: ActivatedRoute) {}

    ngOnInit() {
        /* Initialize this.* bindable members with data.* members */
        let data = this.route.snapshot.data['dashboard'];
        this.positions = data.totalPositions;
        this.offices = data.totalOffices;
        this.employees = data.totalEmployees;
        this.setupCharts(data);
    }

    private setupCharts(data) {
        // Configure options for the bar chart
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

        // Bind data to the bar chart
        this.lineChartData = [{
            values: data.employeesPerYear,
            color: '#7777ff',
            area: true
        }];

        // Configure options for the pie chart
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

        // Bind data to the pie chart
        this.pieChartData = data.employeesPerOffice;
    }
}