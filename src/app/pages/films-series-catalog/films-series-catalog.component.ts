import { Component, inject } from '@angular/core';
import { FilmsSeries } from '../../models/films-series';
import { CardFaSComponent } from "../../shared/card-fa-s/card-fa-s.component";
import { FilmsSeriesService } from '../../services/films-series.service';

@Component({
  selector: 'app-films-series-catalog',
  standalone: true,
  imports: [CardFaSComponent, ],
  templateUrl: './films-series-catalog.component.html',
  styleUrl: './films-series-catalog.component.scss'
})
export class FilmsSeriesCatalogComponent {
  private filmesSeriesService: FilmsSeriesService;
  filmsSeriesArray: FilmsSeries[] = [];

  constructor() {
    this.filmesSeriesService = inject(FilmsSeriesService);

    this.filmesSeriesService.getAllFilmsSeries().subscribe((filmsSeriesArray: FilmsSeries[]) => {
      this.filmsSeriesArray = filmsSeriesArray
    })
  }
}
