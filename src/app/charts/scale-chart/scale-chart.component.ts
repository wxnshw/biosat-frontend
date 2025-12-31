import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-scale-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './scale-chart.component.html',
  styleUrl: './scale-chart.component.css'
})

export class ScaleChartComponent {

  scaleChartType: 'bar' = 'bar';

  scaleChartData: ChartData<'bar'> = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Serviços',
        data: [10, 25, 18, 30, 22, 15, 40],
        backgroundColor: 'rgba(13, 110, 253, 0.6)'
      }
    ]
  };

  scaleChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    }
  };
}