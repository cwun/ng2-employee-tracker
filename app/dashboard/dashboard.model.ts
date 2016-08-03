export class ChartData {
    key: string;
    value: number;
}

export class Dashboard {
    totalEmployees: number;
    totalOffices: number;
    totalPositions: number;
    employeesPerOffice: ChartData[];
}
