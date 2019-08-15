import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  users:string[]=["Wilo","Miguel","Camila"];

  decirHola(){
    alert("Que se dice");
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
