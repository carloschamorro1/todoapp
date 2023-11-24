import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Bienvenido';
  tasks = [
    'Instalar angular CLI',
    'Crear componentes',
    'Crear proyecto',
    'Crear servicio'
  ];
  name = 'Carlos';
  age = 24;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png'

  person = {
    name: 'Nicolas',
    age: 19,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }

  clickHandler(){
    alert('Hola')
  }

  doubleClickHandler(){
    alert('Hola doble click')
  }

  changeHandler(event: Event){
    console.log(event);
  }

  keyDownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value)
  }

}
