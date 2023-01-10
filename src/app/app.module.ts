import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NoticiaService } from './services/noticia.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoNoticiasComponent } from './components/listado-noticias/listado-noticias.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  providers: [NoticiaService],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    FormularioComponent,
    ListadoNoticiasComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
