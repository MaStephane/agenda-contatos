import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private contatos: Contato[];

  constructor() {
    this.contatos = [];
}

/** Adiciona um novo contato na agenda. */
adicionar(c: Contato): boolean {
    if (!this.existe(c)) {
        this.contatos.push(c);
        return true;
    }
    return false;
}

existe(c: Contato): boolean {
    return this.contatos.some(cont => cont.email === c.email && cont.telefone === c.telefone);
}

obterTodos(): Contato[] {
    return [...this.contatos];
}

/** Busca o contato pelo nome na lista e retorna o objeto correspondente ao contato. */
obterContatoPorNome(nome: string): Contato | undefined {
    return this.contatos.find(contato => contato.nome.trim().toLowerCase() === nome.trim().toLowerCase());
}

/** Retorna apenas os contatos favoritos */
obterFavoritos(): Contato[] {
    return this.contatos.filter(contato => contato.getFavorito());
}

/** Marca um contato como favorito */
marcarComoFavorito(contato: Contato): void {
    const c = this.obterContatoPorNome(contato.nome);
    if (c) {
        c.setFavorito(true);
    }
}

/** Desmarca um contato como favorito */
desmarcarFavorito(contato: Contato): void {
    const c = this.obterContatoPorNome(contato.nome);
    if (c) {
        c.setFavorito(false);
    }
}
}

