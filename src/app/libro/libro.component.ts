import { Component, OnInit } from '@angular/core';

@Component({
    selector:'libros',
    templateUrl:'./libro.component.html',
    //styleUrls: ['./componentelibromanueal.']
})

export class LibroComponent{
    /**
     * VOY A HACERLO BIEN, SU CONSTRUCTOR
    public nombreLibro="me echaron droja en el cola cao";
    public descripcion="uno que salía en un vídeo";
    public paraAdultos=true;
    public colorParaAdultos="red";
    public colores=["red","lime","purple"];
    */
    //propiedades o atributos
    public nombreLibro:string;
    public descripcion:string;
    //public paraAdultos:boolean;   //no la uso
    public colores:Array<string>;
    //constructor
    constructor(){
        this.nombreLibro="me echaron droja en el cola cao";
        this.descripcion="uno que salía en un vídeo";
        this. colores=["red","lime","purple"];
    }

    public colorAleatorio(){
    //    return Math.floor(Math.random()*this.colores.length);
        return this.colores[Math.floor(Math.random()*this.colores.length)];
    //    return this.colores[2]
    }
    
}
