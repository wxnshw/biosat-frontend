import { Component } from '@angular/core';
import { MiniAgendaComponent } from "../../components/mini-agenda/mini-agenda.component";
import { AgendaComponent } from "../agenda/agenda.component";
import { PieChartComponent } from '../../charts/pie-chart/pie-chart.component';
import { LineChartComponent } from '../../charts/line-chart/line-chart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MiniAgendaComponent, PieChartComponent, LineChartComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  pendentes = [
    {
      cliente: 'João Silva',
      tipo: 'Lavagem Completa',
      data: '2024-12-03'
    },
    {
      cliente: 'Maria Souza',
      tipo: 'Polimento',
      data: '2024-12-04'
    }
  ];

  concluidos = [
    {
      cliente: 'Carlos Lima',
      tipo: 'Higienização',
      data: '2024-12-01'
    },
    {
      cliente: 'Ana Paula',
      tipo: 'Lavagem Simples',
      data: '2024-11-30'
    },
    {
      cliente: 'Carlos Lima',
      tipo: 'Higienização',
      data: '2024-12-01'
    },
    {
      cliente: 'Ana Paula',
      tipo: 'Lavagem Simples',
      data: '2024-11-30'
    },
    {
      cliente: 'Carlos Lima',
      tipo: 'Higienização',
      data: '2024-12-01'
    },
    {
      cliente: 'Ana Paula',
      tipo: 'Lavagem Simples',
      data: '2024-11-30'
    },
    {
      cliente: 'Carlos Lima',
      tipo: 'Higienização',
      data: '2024-12-01'
    },
    {
      cliente: 'Ana Paula',
      tipo: 'Lavagem Simples',
      data: '2024-11-30'
    },
    {
      cliente: 'Carlos Lima',
      tipo: 'Higienização',
      data: '2024-12-01'
    },
    {
      cliente: 'Ana Paula',
      tipo: 'Lavagem Simples',
      data: '2024-11-30'
    },
    {
      cliente: 'Carlos Lima',
      tipo: 'Higienização',
      data: '2024-12-01'
    },
    {
      cliente: 'Ana Paula',
      tipo: 'Lavagem Simples',
      data: '2024-11-30'
    },
    {
      cliente: 'Carlos Lima',
      tipo: 'Higienização',
      data: '2024-12-01'
    },
    {
      cliente: 'Ana Paula',
      tipo: 'Lavagem Simples',
      data: '2024-11-30'
    },
    {
      cliente: 'Carlos Lima',
      tipo: 'Higienização',
      data: '2024-12-01'
    },
    {
      cliente: 'Ana Paula',
      tipo: 'Lavagem Simples',
      data: '2024-11-30'
    },
    {
      cliente: 'Carlos Lima',
      tipo: 'Higienização',
      data: '2024-12-01'
    },
    {
      cliente: 'Ana Paula',
      tipo: 'Lavagem Simples',
      data: '2024-11-30'
    },
    {
      cliente: 'Carlos Lima',
      tipo: 'Higienização',
      data: '2024-12-01'
    },
    {
      cliente: 'Ana Paula',
      tipo: 'Lavagem Simples',
      data: '2024-11-30'
    }
  ];
}
