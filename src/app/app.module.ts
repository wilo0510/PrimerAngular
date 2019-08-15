import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Este import me trae las funcionalidades y acciones pertenecientes a 
//forms de html
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Esta parte hace los imports
//de cada componente que se usa en 
//la aplicación
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';
import {DatosService} from './datos.service';
//Este import me permite hacer peticiones get
//de un servicio http
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
