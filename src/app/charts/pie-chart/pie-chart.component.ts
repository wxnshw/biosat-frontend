import { Component, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent {
  @Input() title = 'Gráfico';
  @Input() labels: string[] = [];
  @Input() data: number[] = [];

  pieChartType: 'pie' = 'pie';

  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
    duration: 0
  },
    plugins: {
      legend: {
        display: true
      },
    }
  };

  get pieChartData(): ChartData<'pie'> {
    return {
      labels: this.labels,
      datasets: [
        {
          label: this.title,
          data: this.data
        }
      ]
    };
  }
}
