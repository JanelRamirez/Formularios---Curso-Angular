import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public nombreApellido: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  noPuedeserStrider(control: FormControl) {
    const value = control.value?.trim().toLowerCase();
    if (value === 'strider') {
      return { noStrider: true }
    }
    return null;
  }
  constructor() { }
}
