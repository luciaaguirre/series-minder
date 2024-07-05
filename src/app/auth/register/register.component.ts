import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      texto: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  //Enviar formulario de registro
  sendForm() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}
