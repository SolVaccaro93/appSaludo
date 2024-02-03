import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './vistas/pages/main-page/main-page.component';
import { SaludoComponent } from './vistas/componentes/saludo/saludo.component';
import { DespedidaComponent } from './vistas/componentes/despedida/despedida.component';
import { UpperPipe } from './vistas/pipes/uppertext.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SaludoComponent,
    DespedidaComponent,
    UpperPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
