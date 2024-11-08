import { Injectable } from '@angular/core';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private contatos: Contato[] = [];

  constructor() { }

  adicionarContato(contato: Contato): void {
    this.contatos.push(contato);
  }

  obterContatos(): Contato[] {
    return this.contatos;
  }

  obterFavoritos(): Contato[] {
    return this.contatos.filter(contato => contato.getFavorito());
  }

  marcarComoFavorito(contato: Contato, favorito: boolean): void {
    contato.setFavorito(favorito);
  }
}
