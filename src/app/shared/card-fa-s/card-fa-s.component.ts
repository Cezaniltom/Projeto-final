import { Component, EventEmitter, Input, Output } from '@angular/core';
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
    @Input() filmsSeries?: FilmsSeries = {
      id: 0,
      title: "Film Default",
      imageLink: "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
      price: 0,
      description: "Mussum Ipsum, cacilds vidis litro abertis.  Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Casamentiss faiz malandris se pirulitá. Bota 1 metro de cachacis aí pra viagem! Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!"
  };
  @Output() warnFilmsSeriesCatalog: EventEmitter<FilmsSeries> = new EventEmitter();

  warnParentAboutItemAddition(filmsSeries: FilmsSeries) {
    console.log(`testando ${filmsSeries.title}`)
    this.warnFilmsSeriesCatalog.emit(filmsSeries)
  }
}
