import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentelibrocliComponent } from './componentelibrocli/componentelibrocli.component';
//import { ComponentelibromanualComponent } from './componentelibromanual/libro.component';
import { LibroComponent } from './libro/libro.component';



@NgModule({
  declarations: [
    AppComponent,
    ComponentelibrocliComponent,
    LibroComponent
  //  ComponentelibromanualComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
