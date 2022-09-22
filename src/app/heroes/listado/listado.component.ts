import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Captain America',
  ];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
