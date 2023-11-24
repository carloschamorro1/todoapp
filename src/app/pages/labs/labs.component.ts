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
  welcome = 'Ni idea';
  tasks = [
    'Instalar angular CLI',
    'Crear componentes',
    'Crear proyecto',
    'Crear servicio'
  ];
  name = 'Carlos';
  age = 24;
}
