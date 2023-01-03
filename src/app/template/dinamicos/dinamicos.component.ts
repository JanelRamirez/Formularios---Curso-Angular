import { Component, OnInit } from '@angular/core';
interface Persona {
  nombre: string;
  favoritos: Favorito[];
}
interface Favorito {
  id: number;
  nombre: string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {
  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Janel',
    favoritos: [
      { id: 1, nombre: 'MLB 2k22' },
      { id: 2, nombre: 'MLB 2k23' }
    ]
  }
  guardar() {
    console.log('submit formulario');

  }
  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }
  agragarJuego() {
    const nuevoJuego: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({ ...nuevoJuego });
    this.nuevoJuego = '';
  }
}
