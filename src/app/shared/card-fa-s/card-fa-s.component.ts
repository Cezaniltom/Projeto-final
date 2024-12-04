import { Component, Input } from '@angular/core';
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
  @Input() filmsSeries?: FilmsSeries;

}
