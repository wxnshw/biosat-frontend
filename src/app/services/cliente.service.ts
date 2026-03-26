import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    private api = 'https://localhost:7207/api/cliente';

    constructor(private http: HttpClient) { }

    listarClientes() {
        return this.http.get<any[]>(this.api);
    }
}