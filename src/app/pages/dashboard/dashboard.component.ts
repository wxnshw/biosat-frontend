import { Component } from '@angular/core';
import { MiniAgendaComponent } from "../../components/mini-agenda/mini-agenda.component";
import { PieChartComponent } from '../../charts/pie-chart/pie-chart.component';
import { LineChartComponent } from '../../charts/line-chart/line-chart.component';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PieChartComponent, LineChartComponent, CommonModule, FullCalendarModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    locale: ptBrLocale,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: ''
    },
    events: []
  };

  dashboardLabels = ['João', 'Maria', 'Carlos', 'Ana'];
  dashboardData = [12, 20, 8, 15];


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
    },
    {
      cliente: 'João Silva',
      tipo: 'Lavagem Completa',
      data: '2024-12-03'
    },
    {
      cliente: 'João Silva',
      tipo: 'Lavagem Completa',
      data: '2024-12-03'
    },
    {
      cliente: 'João Silva',
      tipo: 'Lavagem Completa',
      data: '2024-12-03'
    }, {
      cliente: 'João Silva',
      tipo: 'Lavagem Completa',
      data: '2024-12-03'
    },
    {
      cliente: 'João Silva',
      tipo: 'Lavagem Completa',
      data: '2024-12-03'
    },
    {
      cliente: 'João Silva',
      tipo: 'Lavagem Completa',
      data: '2024-12-03'
    },
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
