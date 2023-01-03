import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Samsung Galaxy S30',
      precio: 999
    })
  }
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('Epson F6000'),
  //   precio: new FormControl(1000),
  //   existencias: new FormControl(5),

  // })

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.min(0), Validators.required]],
    existencias: [, [Validators.min(0), Validators.required]]
  })
  validar(campo: string): boolean {
    return this.miFormulario.controls[campo]?.invalid
      && this.miFormulario.controls[campo]?.touched
  }
  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
