import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdicionaContatoComponent } from './adiciona-contato/adiciona-contato.component';
import { ExibeContatosComponent } from './exibe-contatos/exibe-contatos.component';
import { ExibeFavoritosComponent } from './exibe-favoritos/exibe-favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    AdicionaContatoComponent,
    ExibeContatosComponent,
    ExibeFavoritosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
