import { Component } from '@angular/core';
import { Contato } from '../contato';
import { TipoContato } from '../tipo-contato.enum';

@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrl: './adiciona-contato.component.css'
})
export class AdicionaContatoComponent {
   // Lista de contatos
   contatos: Contato[] = [];

   // Propriedades para o novo contato
   nome: string = '';
   telefone: string = '';
   email: string = '';
   aniversario: Date | null = null;
   tipo: TipoContato = TipoContato.Amigo;
   tipoContatoEnum = Object.values(TipoContato);

   // Método para adicionar contato à lista
   adicionarContato() {
       const novoContato = new Contato(this.nome, this.telefone, this.email, this.aniversario!, this.tipo);
       this.contatos.push(novoContato);
       this.limparFormulario();
    }

    limparFormulario() {
        this.nome = '';
        this.telefone = '';
        this.email = '';
        this.aniversario = null;
        this.tipo = TipoContato.Amigo;
    }
}
