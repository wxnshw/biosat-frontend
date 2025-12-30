import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { GraficosComponent } from './pages/graficos/graficos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { AgendaComponent } from './pages/agenda/agenda.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: '/dashboard', pathMatch: "full"
    },
    {
        path: "dashboard",
        component: DashboardComponent
    },
    {
        path:"servicos",
        component: ServicosComponent
    },
    {
        path:"agenda",
        component: AgendaComponent
    },
    {
        path:"clientes",
        component: ClientesComponent
    },
    {
        path:"graficos",
        component: GraficosComponent
    },
];
