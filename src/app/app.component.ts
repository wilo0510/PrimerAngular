import { Component } from '@angular/core';
//Hago la importacion de el servicio de datos
//que lo que hace es hacer la peticion get a la pagina de prueba
import {DatosService} from './datos.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //declaracion de variables usadas en el proyecto
  name:string="Jhon carter";
  age:number=28;
  /*Con este arreglo hago el ejemplo del ngfor */
  users:string[]=["Wilo","Miguel","Camila"];
  /*Este arreglo almacena los post 
  traidos del get de el servicio de datos */
  posts=[];
/*Metodo basico para generar una alerta */
  decirHola(){
    alert("Que se dice");
  }
  constructor(private datosService:DatosService){
    /*Este constructor usa los servicios de el TS que realiza el get 
    obtiene los datos y los asigna al arreglo que teniamos con este fin  */
    this.datosService.obtenerDatos().subscribe(data=>{
      this.posts=data;
    });
  }
  /*Metodo que agrega usuarios al arreglo users */
  agregarUsuario(nombreUsuario){
    this.users.push(nombreUsuario.value);
    nombreUsuario.value='';
    nombreUsuario.focus();
    return false;
  }
  /*Metodo que elimina usuarios del arreglo users */
  eliminarUsuario(user){
    for(let i=0;i<this.users.length;i++)
    {
      if(user==this.users[i]){
        this.users.splice(i,1);
      }
    }
  }
  
  
}
