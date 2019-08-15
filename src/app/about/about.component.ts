import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { Post } from '../Post';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  posts:Post[];
  constructor(private datosService:DatosService) {
    this.datosService.obtenerDatos().subscribe(data=>{
      this.posts=data;
    });
   }

  ngOnInit() {
  }

}
