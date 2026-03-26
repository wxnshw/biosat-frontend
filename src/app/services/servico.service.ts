import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private api = 'https://localhost:7207/api/servicos';

  constructor(private http: HttpClient) { }

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }

  cadastrar(servico: any): Observable<any> {
    return this.http.post(this.api, servico);
  }

  excluir(id: number) {
  return this.http.delete(`https://localhost:7207/api/servicos/${id}`);
}

  buscarPorCnpj(cnpj: string) {
    return this.http.get<any>(`http://localhost:5289/api/Clientes/cnpj/${cnpj}`);
  }

}