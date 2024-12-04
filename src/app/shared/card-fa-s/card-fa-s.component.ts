import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FilmsSeries } from '../../models/films-series';

@Component({
  selector: 'app-card-fa-s',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './card-fa-s.component.html',
  styleUrl: './card-fa-s.component.scss'
})
export class CardFaSComponent {
  filmsSeries: FilmsSeries = {
    title: "Deadpool & Wolverine",
    streamer: "",
    imageLink: "https://m.media-amazon.com/images/S/pv-target-images/dd6fb66997dd4cb5606b587bb255d2cd2cec20ecbd11852a8f6b07a1358d09a1.jpg",
    price: 19.99,
    description: "Wolverine está se recuperando quando cruza seu caminho com Deadpool. Juntos, eles formam uma equipe e enfrentam um inimigo em comum."
  }
}
