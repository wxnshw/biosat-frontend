import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  clientes = [
    {
      id: 1,
      nome: 'João Silva',
      totalServicos: 5,
      dataCadastro: '2024-11-10'
    },
    {
      id: 2,
      nome: 'Maria Souza',
      totalServicos: 3,
      dataCadastro: '2024-12-01'
    }
  ];

}
