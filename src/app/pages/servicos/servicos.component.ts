import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {
  servicos = [
    {
      id: 1,
      cliente: 'João Silva',
      tipoServico: 'Lavagem Completa',
      veiculo: 'Gol',
      placa: 'ABC-1234',
      valor: 80,
      dataServico: '2024-11-10',
      status: 'Concluído'
    },
    {
      id: 2,
      cliente: 'Maria Souza',
      tipoServico: 'Polimento',
      veiculo: 'Onix',
      placa: 'DEF-5678',
      valor: 150,
      dataServico: '2024-12-01',
      status: 'Pendente'
    }
  ];
}
