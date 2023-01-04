import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, Validator, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Game Boy'],
      ['Nintendo 64'],
    ], Validators.required)
  });
  get favoritos() {
    return this.miFormulario.get('favoritos') as FormArray;
  }
  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  constructor(private fb: FormBuilder,) { }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();

  }
  agregarFavorito() {
    if (this.nuevoFavorito.invalid) { return; }
    this.favoritos.push(this.fb.control(this.nuevoFavorito.value, Validators.required))
    this.nuevoFavorito.reset();
  }
  borrar(index: number) {
    this.favoritos.removeAt(index);
  }
  validar(campo: string): boolean {
    return this.miFormulario.controls[campo].invalid && this.miFormulario.touched;
  }
}
