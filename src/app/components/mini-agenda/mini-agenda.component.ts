import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';

@Component({
  selector: 'app-mini-agenda',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './mini-agenda.component.html',
  styleUrl: './mini-agenda.component.css'
})
export class MiniAgendaComponent {
  calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    locale: ptBrLocale,
    height: 300,
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: ''
    },
    events: []
  };
}
