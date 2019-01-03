import { Component, OnInit } from '@angular/core';

@Component({
    selector:'libros',
    templateUrl:'./libro.component.html',
    //styleUrls: ['./componentelibromanueal.']
})

export class LibroComponent{
    public nombreLibro="me echaron droja en el cola cao";
    public descripcion="uno que salía en un vídeo";
    public paraAdultos=true;
    public colorParaAdultos="red";
    public colores=["red","lime","purple"];
    //public aleatorio=0;

    public colorAleatorio(){
    //    return Math.floor(Math.random()*this.colores.length);
        return this.colores[Math.floor(Math.random()*this.colores.length)];
    //    return this.colores[2]
    }
    
}
