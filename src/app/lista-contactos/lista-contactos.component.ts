import { Component, OnInit } from '@angular/core';
import { Contacto } from '../models/contactos';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {
  contactos: Contacto[];
  constructor() { 
    this.contactos = [];
  }

  ngOnInit(): void {
  }

  save(nombre:string, telefono:string, email:string):boolean{
    this.contactos.push(new Contacto(nombre, telefono, email));
    return true;
  }

  /*sortArray():Contacto[]{
    const contactosOrdenados = this.contactos.sort();
    console.log(contactosOrdenados);
    return contactosOrdenados;
  }*/
  
}
