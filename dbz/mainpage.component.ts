
import { Component } from '@angular/core';
import {NgModel} from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-pagemain',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
  
})
export class MainPageComponent {

anadirpersonaje(){
this.personajes.push({nombre:this.nombrePersonaje, poder:this.poderPersonaje});
console.log("hola")
}

nombrePersonaje:string = "";
poderPersonaje:number = 0;





  personajes: Personaje[] = [
    {nombre: 'goku', poder: 1},
    {nombre: 'veggeta', poder: 2},
    {nombre: 'Mrsatan', poder: 3},
    {nombre: 'Nappa', poder: 4}
  ];



  constructor() {}
}


export interface Personaje {
  nombre: string;
  poder: number;
}
  
