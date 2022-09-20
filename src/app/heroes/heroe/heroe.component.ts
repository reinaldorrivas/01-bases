import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
})
export class HeroeComponent {
  public nombre: string = 'Ironman';
  public edad: number = 45;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  protected obtenerInformacionCompleta(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  protected cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }

  protected cambiarEdad(): void {
    this.edad = 30;
  }
}
