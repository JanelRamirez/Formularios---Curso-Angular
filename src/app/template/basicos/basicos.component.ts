import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;
  constructor() { }

  nombreValido(): boolean {
    return this.miFormulario?.controls['producto']?.invalid && this.miFormulario?.controls['producto']?.touched;
  }
  precioValido(): boolean {
    return this.miFormulario?.controls['precio']?.invalid && this.miFormulario?.controls['precio']?.touched
  }
  ngOnInit(): void {
  }
  guardar() {
    console.log(this.miFormulario.value);

  }
}
