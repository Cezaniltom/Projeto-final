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
    title: "Deadpool & Wolverine",
    imageLink: "https://m.media-amazon.com/images/S/pv-target-images/dd6fb66997dd4cb5606b587bb255d2cd2cec20ecbd11852a8f6b07a1358d09a1.jpg",
    price: 19.99,
    description: "Wolverine está se recuperando quando cruza seu caminho com Deadpool. Juntos, eles formam uma equipe e enfrentam um inimigo em comum."
  },

  {
    title: "Interstellar",
    imageLink: "https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png",
    price: 14.99,
    description: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar"
  }
  ];
}
