import { Component, OnInit } from '@angular/core';

@Component({
    selector:'libros',
    templateUrl:'./libro.component.html',
    //styleUrls: ['./componentelibromanueal.']
})

export class LibroComponent{
    public nombreLibro="me echaron droja en el cola cao";
    public descripcion="uno que salía en un vídeo";
}
/*
export class LibroComponent implements OnInit {
    
    public nombreLibro="Nombre Libro: me echaron droja en el cola cao";
    constructor() { }
  
    ngOnInit() {
    }
  }
  */