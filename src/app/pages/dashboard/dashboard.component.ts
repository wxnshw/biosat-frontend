import { Component } from '@angular/core';
import { MiniAgendaComponent } from "../../components/mini-agenda/mini-agenda.component";

@Component({
  selector: 'app-dashboard',
  imports: [MiniAgendaComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
}
