import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vehiculos',
  imports: [NgFor,CommonModule],
  templateUrl: './vehiculos.component.html',
  styleUrl: './vehiculos.component.scss'
})
export class VehiculosComponent {
  vehicles = [
    {
      title: 'mesa de caño y base cuadrada de plastico + sillas de caño y lona',
      description: 'Comodidad y elegancia para su traslado empresarial',
      image: 'https://i0.wp.com/mueblesypublicidad.ar/shop/wp-content/uploads/2022/07/juegopublicitariopersonalizadocon2sillonesragngggggg222c.jpg?fit=600%2C716&ssl=1',
      animationClass: 'slide-in-left'
    },
    {
      title: 'mesa de madera y base cuadrada + sillas de madera y lona',
      description: 'Lujo y confort para experiencias exclusivas',
      image: 'https://i.pinimg.com/736x/3e/b3/94/3eb39402f58bb38a9e7a1cec96dd4f0c.jpg',
      animationClass: 'slide-in-right'
    },
    {
      title: 'mesa de caño y base cuadrada de plastico + sillas de caño y lona',
      description: 'Comodidad y elegancia para su traslado empresarial',
      image: 'https://i0.wp.com/mueblesypublicidad.ar/shop/wp-content/uploads/2022/07/juegopublicitariopersonalizadocon2sillonesragngggggg222c.jpg?fit=600%2C716&ssl=1',
      animationClass: 'slide-in-left'
    },
    {
      title: 'mesa de madera y base cuadrada + sillas de madera y lona',
      description: 'Lujo y confort para experiencias exclusivas',
      image: 'https://i.pinimg.com/736x/3e/b3/94/3eb39402f58bb38a9e7a1cec96dd4f0c.jpg',
      animationClass: 'slide-in-right'
    }
  ];
  isVisible = false;
  private scrollListener: (() => void) | undefined;

  constructor() {
    if (typeof window !== 'undefined') {
      this.scrollListener = () => this.checkVisibility();
      window.addEventListener('scroll', this.scrollListener, { passive: true });
      this.checkVisibility(); // Verificar al cargar
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined' && this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  checkVisibility() {
    const element = document.querySelector('.vehicle-section');
    if (element) {
      const rect = element.getBoundingClientRect();
      // Ajustado para que la animación comience más tarde (80% del viewport)
      this.isVisible = rect.top < window.innerHeight * 0.6;
    }
  }
}
