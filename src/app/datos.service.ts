//Este TS se obtiene con el comando
//ng generate service nombreServicio
import { Injectable } from '@angular/core';
//ESte HttpCliente se usa en cada componente
//que pueda llegar a necesitar un http
import {HttpClient} from '@angular/common/http'
/*Este import trae el objeto tipo
Post para poderlo manipular y pasarlo 
a esa clase */
import {Post} from './Post'

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private httpClient:HttpClient) { 
    /*Aqui me sercioro que el servicio http esta 
    funcionando */
    console.log("El servicio funciona");
  }
  obtenerDatos(){
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
