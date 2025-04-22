import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { CommonModule, NgIf } from '@angular/common';
import emailjs from 'emailjs-com';

// Definimos un tipo para los nombres de los controles
type FormControlNames = 
  'nombre' | 'email' | 'celular' | 'comentarios';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, CommonModule,HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  isLoading = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
      comentarios: ['']
    });
  }

  getControl(controlName: FormControlNames): AbstractControl {
    return this.contactForm.get(controlName) as AbstractControl;
  }

  hasError(controlName: FormControlNames, errorType: string): boolean {
    const control = this.getControl(controlName);
    return control?.hasError(errorType) && (control?.touched || this.submitted);
  }

  getErrorMessage(controlName: FormControlNames): string {
    const control = this.getControl(controlName);
    
    if (control?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (control?.hasError('email')) {
      return 'Ingresa un email válido';
    }
    if (control?.hasError('minlength')) {
      return `Mínimo ${control.getError('minlength').requiredLength} caracteres`;
    }
    if (control?.hasError('pattern')) {
      return 'Formato incorrecto (10-15 dígitos)';
    }
    if (control?.hasError('min')) {
      return `Mínimo ${control.getError('min').min} pasajero`;
    }
    
    return '';
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.invalid) {
      return;
    }

    this.isLoading = true;

    const templateParams = {
      nombre: this.contactForm.value.nombre,
      email: this.contactForm.value.email,
      celular: this.contactForm.value.celular,
      comentarios: this.contactForm.value.comentarios
    };

    emailjs.send('service_nx0kheu', 'template_wb0ybs9', templateParams, 'u8Vz8nts2MqNMtH5E')
      .then(() => {
        this.isLoading = false;
        alert('¡Formulario enviado con éxito!');
        this.contactForm.reset();
        this.submitted = false;
      })
      .catch((error) => {
        this.isLoading = false;
        console.error('Error al enviar formulario:', error);
        alert('Error al enviar el formulario, por favor intentalo de nuevo.');
      });
  }
}