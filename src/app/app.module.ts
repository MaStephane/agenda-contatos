import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdicionaContatoComponent } from './adiciona-contato/adiciona-contato.component';
import { AgendaService } from './agenda.service';

@NgModule({
  declarations: [
    AppComponent,
    AdicionaContatoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
