import { Component } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { Contato, TipoContato } from '../contato';

@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrls: ['./adiciona-contato.component.css']
})
export class AdicionaContatoComponent {
  novoContato: Contato;
  contatos: Contato[] = [];
  favoritos: Contato[] = [];

  constructor(private agendaService: AgendaService) {
    
    this.novoContato = new Contato('', '', '', new Date(), TipoContato.Amigo, false);
  }

  
  adicionarContato(): void {
    if (this.novoContato.getNome() && this.novoContato.getTelefone() && this.novoContato.getEmail()) {
      
      this.agendaService.adicionarContato(this.novoContato);
      
      this.contatos = this.agendaService.obterContatos();
      
      
      if (this.novoContato.getFavorito()) {
        this.favoritos.push(this.novoContato);
      }

      
      this.novoContato = new Contato('', '', '', new Date(), TipoContato.Amigo, false);
    } else {
      alert('Todos os campos são obrigatórios.');
    }
  }

  
  atualizarFavoritos(): void {
    this.favoritos = this.contatos.filter(contato => contato.getFavorito() === true);
  }
}
