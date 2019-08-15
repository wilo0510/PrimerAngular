import { Component } from '@angular/core';
import {DatosService} from './datos.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name:string="Jhon carter";
  age:number=28;
  
  users:string[]=["Wilo","Miguel","Camila"];
  posts=[];

  decirHola(){
    alert("Que se dice");
  }
  constructor(private datosService:DatosService){
    this.datosService.obtenerDatos().subscribe(data=>{
      this.posts=data;
    });
  }
  agregarUsuario(nombreUsuario){
    this.users.push(nombreUsuario.value);
    nombreUsuario.value='';
    nombreUsuario.focus();
    return false;
  }
  eliminarUsuario(user){
    for(let i=0;i<this.users.length;i++)
    {
      if(user==this.users[i]){
        this.users.splice(i,1);
      }
    }
  }
  
  
}
