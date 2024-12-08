import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { FilmsSeries } from '../models/films-series';

@Injectable({
  providedIn: 'root'
})
export class FilmsSeriesService {
  http: HttpClient;
  filmsSeriesArray: FilmsSeries[] = [];
  constructor() {
    this.http = inject(HttpClient);
  }

  getAllFilmsSeries() {
    return this.http.get<FilmsSeries[]>("http://localhost:3000/filmsSeries");
  }

  createFilmSerie(newFS: FilmsSeries) {
    return this.http.post<FilmsSeries[]>("http://localhost:3000/filmsSeries", newFS);
  }
}
