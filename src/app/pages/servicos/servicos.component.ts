import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicoService } from '../../services/servico.service';
import { NgxMaskDirective } from "ngx-mask";

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxMaskDirective],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent implements OnInit {

  servicos: any[] = [];

  servico: any = {
    empresaCnpj: '',
    nomeSolicitante: '',
    tiposServicos: '',
    veiculo: '',
    placa: '',
    kilometragem: 0,
    valor: 0,
    dataServico: '',
    statusServico: ''
  };

  modalAberto = false;

  nomeEmpresa = '';
  clienteId: number | null = null;

  constructor(private servicoService: ServicoService) { }

  ngOnInit() {
    this.carregarServicos();
  }

  abrirModal() {
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }

  salvarServico() {

    if (!this.clienteId) {
      alert("Selecione uma empresa válida");
      return;
    }

    const dados = {
      nomeSolicitante: this.servico.nomeSolicitante,
      tiposServicos: this.servico.tiposServicos,
      veiculo: this.servico.veiculo,
      placa: this.servico.placa,
      kilometragem: this.servico.kilometragem,
      valor: this.servico.valor,
      dataServico: this.servico.dataServico,
      statusServico: this.servico.statusServico,
      clienteId: this.clienteId
    };

    this.servicoService.cadastrar(dados)
      .subscribe(() => {
        alert("Serviço cadastrado");
        this.fecharModal();
        this.carregarServicos();
        this.limparFormulario();
      });

  }

  buscarEmpresa() {

    const cnpj = this.servico.empresaCnpj?.replace(/\D/g, '');

    if (!cnpj || cnpj.length < 14) return;

    this.servicoService.buscarPorCnpj(cnpj)
      .subscribe({
        next: (empresa) => {
          this.nomeEmpresa = empresa.nomeEmpresa;
          this.clienteId = empresa.id;
        },
        error: () => {
          this.nomeEmpresa = '';
          this.clienteId = null;
          alert("Empresa não encontrada");
        }
      });
  }

  carregarServicos() {

    this.servicoService.listar()
      .subscribe({
        next: (dados) => {
          this.servicos = dados;
        },
        error: (erro) => {
          console.error("Erro ao carregar", erro);
        }
      });

  }

  detalharServico(servico: any) {
    alert(`
Cliente: ${servico.cliente?.nomeEmpresa}
CNPJ: ${servico.cliente?.cnpj}
Tipo: ${servico.tiposServicos}
Veículo: ${servico.veiculo}
Placa: ${servico.placa}
Valor: ${servico.valor}
`);
  }

  editarServico(servico: any) {
    this.servico = {
      ...servico,
      empresaCnpj: servico.cliente?.cnpj
    };

    this.nomeEmpresa = servico.cliente?.nomeEmpresa;
    this.clienteId = servico.clienteId;

    this.modalAberto = true;
  }

  excluirServico(id: number) {

    if (!confirm("Deseja realmente excluir este serviço?")) return;

    this.servicoService.excluir(id)
      .subscribe(() => {
        alert("Serviço excluído");
        this.carregarServicos();
      });

  }

  limparFormulario() {
    this.servico = {
      empresaCnpj: '',
      nomeSolicitante: '',
      tiposServicos: '',
      veiculo: '',
      placa: '',
      kilometragem: 0,
      valor: 0,
      dataServico: '',
      statusServico: ''
    };

    this.nomeEmpresa = '';
    this.clienteId = null;
  }

}