import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from "ngx-mask";

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

  clientes: any[] = [];

  modalCriarAberto = false;
  modalDetalharAberto = false;
  modalEditarAberto = false;
  modalExcluirAberto = false;

  clienteSelecionado: any = null;
  clienteEditando: any = null;
  clienteParaExcluir: any = null;

  novoCliente = {
    nome: '',
    cnpjCliente: '',
    contato: ''
  };

  abrirModalCriar() {
    this.modalCriarAberto = true;
  }

  fecharModalCriar() {
    this.modalCriarAberto = false;
  }

  salvarCliente() {
    const novo = {
      ...this.novoCliente,
      id: Date.now(),
      dataCadastro: new Date()
    };

    this.clientes.push(novo);

    this.novoCliente = {
      nome: '',
      cnpjCliente: '',
      contato: ''
    };

    this.fecharModalCriar();
  }

  abrirDetalhar(cliente: any) {
    this.clienteSelecionado = cliente;
    this.modalDetalharAberto = true;
  }

  fecharDetalhar() {
    this.modalDetalharAberto = false;
    this.clienteSelecionado = null;
  }

  abrirEditar(cliente: any) {
    this.clienteEditando = { ...cliente };
    this.modalEditarAberto = true;
  }

  fecharEditar() {
    this.modalEditarAberto = false;
    this.clienteEditando = null;
  }

  salvarEdicao() {
    const index = this.clientes.findIndex(
      c => c.id === this.clienteEditando.id
    );

    if (index !== -1) {
      this.clientes[index] = this.clienteEditando;
    }

    this.fecharEditar();
  }

  abrirExcluir(cliente: any) {
    this.clienteParaExcluir = cliente;
    this.modalExcluirAberto = true;
  }

  fecharExcluir() {
    this.modalExcluirAberto = false;
    this.clienteParaExcluir = null;
  }

  confirmarExclusao() {
    this.clientes = this.clientes.filter(
      c => c.id !== this.clienteParaExcluir.id
    );

    this.fecharExcluir();
  }
}