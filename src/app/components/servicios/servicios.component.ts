import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss'
})
export class ServiciosComponent implements OnInit {
  services = [
    {
      title: 'Fabricación de Sombrillas',
      image: 'https://i.pinimg.com/736x/3c/56/83/3c5683273e7cac3338791bda0b8317cd.jpg',
      description: 'Diseñadas para resistir el sol y el tiempo, con materiales de alta calidad.'
    },
    {
      title: 'Personalización con Logo',
      image: 'https://i.pinimg.com/736x/45/58/57/45585771f86bf6fc9f7721bcf92fdfb9.jpg',
      description: 'Incorporamos el logo de tu empresa en nuestras sombrillas para potenciar tu marca.'
    },
    {
      title: 'Asesoramiento para Espacios',
      image: 'https://i.pinimg.com/736x/48/3f/0c/483f0c89c20138b357fad6a3798f2a02.jpg',
      description: 'Te ayudamos a elegir la mejor configuración para tu patio, terraza o negocio.'
    },
    {
      title: 'Atención Personalizada',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1350&q=80',
      description: 'Consultanos por mensaje y recibí atención directa al 11-3481-17835.'
    }
  ];
  
  groupedServices: any[][] = [];

  ngOnInit() {
    this.groupServices();
  }

  groupServices() {
    const groupSize = 2;
    for (let i = 0; i < this.services.length; i += groupSize) {
      this.groupedServices.push(this.services.slice(i, i + groupSize));
    }
   {

}
  }
}