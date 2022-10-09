import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0,
  };

  constructor(private dbzService: DbzService) {}

  agregar() {
    /* La funcion .trim() se encargara de borrar los espacios vacios. */
    if (this.nuevoPersonaje.nombre.trim().length === 0) {
      return;
    }

    this.dbzService.agregarNuevoPersonaje(this.nuevoPersonaje);

    this.nuevoPersonaje = {
      nombre: '',
      poder: 0,
    };
  }
}
