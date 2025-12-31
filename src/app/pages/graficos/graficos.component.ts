import { Component } from '@angular/core';
import { ScaleChartComponent } from '../../charts/scale-chart/scale-chart.component';
import { PieChartComponent } from "../../charts/pie-chart/pie-chart.component";
import { LineChartComponent } from "../../charts/line-chart/line-chart.component";
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-graficos',
  standalone: true,
  imports: [ScaleChartComponent, PieChartComponent, LineChartComponent],
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.css'
})
export class GraficosComponent {

}
