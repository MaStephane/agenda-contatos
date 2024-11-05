import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { Contato } from '../contato';

@Component({
    selector: 'app-exibe-favoritos',
    templateUrl: './exibe-favoritos.component.html',
    styleUrls: ['./exibe-favoritos.component.css']
})
export class ExibeFavoritosComponent implements OnInit {
    favoritos: Contato[] = [];

    constructor(private agendaService: AgendaService) {}

    ngOnInit(): void {
        this.favoritos = this.agendaService.obterFavoritos();
    }
}

