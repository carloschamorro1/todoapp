import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Bienvenido';
  tasks = signal([
    'Instalar angular CLI',
    'Crear componentes',
    'Crear proyecto',
    'Crear servicio'
  ]);
  name = signal('Carlos');
  age = 24;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png'

  person = signal ({
    name: 'Carlos',
    age: 19,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  });

  colorCtrl = new FormControl();
  widthCtrl = new FormControl(50,{
    nonNullable: true
  });

  nameCtrl = new FormControl('Carlos',{
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3),
    ]
  });

  constructor(){
    this.colorCtrl.valueChanges.subscribe(value => {
      console.log(value)
    })  
  }

  clickHandler(){
    alert('Hola')
  }

  doubleClickHandler(){
    alert('Hola doble click')
  }

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue)
  }

  keyDownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value)
  }

  changeAge(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return{
        ...prevState,
        age: parseInt(newValue, 10)
      }
    });
  }

  changeName(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return{
        ...prevState,
        name:newValue
      }
    });
  }

}
