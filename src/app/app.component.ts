import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NosotrosComponent } from "./components/nosotros/nosotros.component";
import { VehiculosComponent } from "./components/vehiculos/vehiculos.component";
import { RazonesComponent } from "./components/razones/razones.component";
import { OpinionesComponent } from "./components/opiniones/opiniones.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { Meta, Title } from '@angular/platform-browser';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ServiciosComponent, NosotrosComponent, VehiculosComponent, RazonesComponent, OpinionesComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private meta: Meta, private title: Title) {}
  ngOnInit() {
    this.title.setTitle('Sombrillas del sur | Empresa sombrillas del sur');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Fabricamos sombrillas, mesas y sillas de caño y madera en Argentina. Calidad, diseño y durabilidad para hogares, bares y restaurantes.'
      },
      {
        name: 'keywords',
        content: 'sombrillas, mesas de caño, sillas de madera, fábrica de mobiliario, sombrillas para jardín, muebles exteriores, mesas y sillas resistentes, muebles para bares'
      },
      {
        name: 'og:title',
        content: 'Sombrillas del Sur | Fábrica de Sombrillas, Mesas y Sillas'
      },
      {
        name: 'og:description',
        content: 'Conocé nuestros productos de excelente calidad: sombrillas, mesas y sillas ideales para espacios exteriores. Fabricación nacional.'
      },
      {
        name: 'og:type',
        content: 'website'
      },
      {
        name: 'og:locale',
        content: 'es_AR'
      },
      {
        name: 'og:url',
        content: 'https://sombrillasdelsur.com.ar'
      },
      {
        name: 'og:site_name',
        content: 'Sombrillas del Sur'
      }
    ]);
  }
}
