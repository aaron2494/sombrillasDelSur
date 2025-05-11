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
      animationClass: 'slide-in-left',
      features: [
        'Materiales resistentes y duraderos',
        'Fácil transporte y almacenamiento',
        'Diseño ergonómico para mayor comodidad',
        'Personalizable según sus necesidades',
        'Ideal para eventos empresariales'
      ]
    },
    {
      title: 'mesa de madera y base cuadrada + sillas de madera y lona',
      description: 'Lujo y confort para experiencias exclusivas',
      image: 'https://i.pinimg.com/736x/3e/b3/94/3eb39402f58bb38a9e7a1cec96dd4f0c.jpg',
      animationClass: 'slide-in-right',
      features: [
        'Madera de alta calidad',
        'Diseño elegante y sofisticado',
        'Asientos acolchados para mayor confort',
        'Perfecto para bodas y eventos formales',
        'Acabados premium'
      ]
    },
    {
      title: 'mesa de caño y base cuadrada de plastico + sillas de caño y lona',
      description: 'Comodidad y elegancia para su traslado empresarial',
      image: 'https://i0.wp.com/mueblesypublicidad.ar/shop/wp-content/uploads/2022/07/juegopublicitariopersonalizadocon2sillonesragngggggg222c.jpg?fit=600%2C716&ssl=1',
      animationClass: 'slide-in-left',
      features: [
        'Materiales resistentes y duraderos',
        'Fácil transporte y almacenamiento',
        'Diseño ergonómico para mayor comodidad',
        'Personalizable según sus necesidades',
        'Ideal para eventos empresariales'
      ]
    },
    {
      title: 'mesa de madera y base cuadrada + sillas de madera y lona',
      description: 'Lujo y confort para experiencias exclusivas',
      image: 'https://i.pinimg.com/736x/3e/b3/94/3eb39402f58bb38a9e7a1cec96dd4f0c.jpg',
      animationClass: 'slide-in-right',
      features: [
        'Madera de alta calidad',
        'Diseño elegante y sofisticado',
        'Asientos acolchados para mayor confort',
        'Perfecto para bodas y eventos formales',
        'Acabados premium'
      ]
    }
  ];
  isVisible = false;
  showModal = false;
  selectedVehicle: any = null;
  whatsappLink = 'https://wa.me/549TU_NUMERO_DE_WHATSAPP?text=Hola,%20estoy%20interesado%20en%20el%20combo%20de%20muebles';

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
      this.isVisible = rect.top < window.innerHeight * 0.6;
    }
  }

  openModal(index: number) {
    this.selectedVehicle = this.vehicles[index];
    this.showModal = true;
    document.body.style.overflow = 'hidden'; // Evita el scroll del body cuando el modal está abierto
  }

  closeModal() {
    this.showModal = false;
    document.body.style.overflow = ''; // Restaura el scroll del body
  }
}
