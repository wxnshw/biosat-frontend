import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';
import { CalendarOptions } from '@fullcalendar/core/index.js';

@Component({
  selector: 'app-mini-agenda',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './mini-agenda.component.html',
  styleUrl: './mini-agenda.component.css'
})
export class MiniAgendaComponent {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    locale: ptBrLocale,
    headerToolbar: {
      left: 'prevYear prev,next nextYear today',
      center: 'title',
      right: 'dayGridMonth dayGridWeek dayGridDay',
    },
    dayHeaderFormat: {
      weekday: 'long'
    },

    events: []

  };
}
