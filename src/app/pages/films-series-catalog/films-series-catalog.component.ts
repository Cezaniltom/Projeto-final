import { Component } from '@angular/core';
import { FilmsSeries } from '../../models/films-series';
import { CardFaSComponent } from "../../shared/card-fa-s/card-fa-s.component";

@Component({
  selector: 'app-films-series-catalog',
  standalone: true,
  imports: [CardFaSComponent],
  templateUrl: './films-series-catalog.component.html',
  styleUrl: './films-series-catalog.component.scss'
})
export class FilmsSeriesCatalogComponent {
  filmsSeriesArray: FilmsSeries[] = [
    {
      id: 1,
      title: "Deadpool & Wolverine",
      imageLink: "https://m.media-amazon.com/images/S/pv-target-images/dd6fb66997dd4cb5606b587bb255d2cd2cec20ecbd11852a8f6b07a1358d09a1.jpg",
      price: 19.99,
      description: "Wolverine está se recuperando quando cruza seu caminho com Deadpool. Juntos, eles formam uma equipe e enfrentam um inimigo em comum."
    },
    {
      id: 2,
      title: "Interstellar",
      imageLink: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_SL1500_.jpg",
      price: 14.99,
      description: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas."
    },
    {
      id: 3,
      title: "Até o ultimo homem",
      imageLink: "https://cinegarimpo.com.br/wp/content/uploads/2017/02/cinegarimpo.com.br-ate-o-ultimo-homem-hacksaw-ridge-ate-o-ultimo-homem-286x425.jpg",
      price: 13.99,
      description: "Acompanhe a história de Desmond T. Doss, um médico do exército americano que, durante a Segunda Guerra Mundial, se recusa a pegar em armas."
    }
  ];
}
