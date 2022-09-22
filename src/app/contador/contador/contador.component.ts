import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      La base es <strong>{{ base }}</strong>
    </h3>
    <div>
      <p>
        <button (click)="acumular(base)">+ {{ base }}</button>
        {{ numero }}
        <button (click)="acumular(-base)">- {{ base }}</button>
      </p>
    </div>
  `,
})
export class ContadorComponent {
  public title: string = 'Contador App';
  public numero: number = 10;
  public base: number = 5;

  protected sumarUno(): void {
    this.numero += 1;
  }

  protected restarUno(): void {
    this.numero -= 1;
  }

  protected acumular(valor: number): void {
    this.numero += valor;
  }
}
