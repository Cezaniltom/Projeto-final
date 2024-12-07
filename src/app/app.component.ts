import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';


import { HeaderComponent } from './shared/header/header.component';
import { FilmsSeriesCatalogComponent } from "./pages/films-series-catalog/films-series-catalog.component";
import { CartComponent } from "./shared/cart/cart.component";
import { CartItem } from './models/cart-item';
import { FilmsSeries } from './models/films-series';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FilmsSeriesCatalogComponent, MatSidenavModule, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'films-and-series-ecommerce';

}
