import { Component } from '@angular/core';
import { AgendaService } from '../agenda.service';
@Component({
  selector: 'app-exibe-contatos',
  templateUrl: './exibe-contatos.component.html',
  styleUrl: './exibe-contatos.component.css'
})
export class ExibeContatosComponent implements OnInit {
  contatos: Contato[] = [];

  constructor(private agendaService: AgendaService) {}

  ngOnInit(): void {
      this.contatos = this.agendaService.obterTodos();
  }
}