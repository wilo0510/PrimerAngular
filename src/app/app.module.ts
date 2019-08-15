import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Funcionalidad de un enrutados para varias pestañas
import {RouterModule,Route, Router} from '@angular/router';
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
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component'
   
const routes:Route[]=[
  {path:'',component:HolaMundoComponent},
  {path:'about',component:AboutComponent}
]; 

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  //Datos Service es el TS que va a
  //implementar la funcionalidad de get
  
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
