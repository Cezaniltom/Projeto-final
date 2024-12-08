import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FilmsSeriesService } from '../../services/films-series.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-films-series-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './films-series-form.component.html',
  styleUrl: './films-series-form.component.scss'
})
export class FilmsSeriesFormComponent {
  private filmsSeriesService: FilmsSeriesService;
  private router: Router;
  private snackBar: MatSnackBar;
  filmSeriesForm: FormGroup;

  constructor() {
    this.filmsSeriesService = inject(FilmsSeriesService);
    this.router = inject(Router);
    this.snackBar = inject(MatSnackBar);

    this.filmSeriesForm = new FormGroup({
      title: new FormControl('', Validators.required),
      imageLink: new FormControl('', [Validators.required, ]),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      description: new FormControl('', [Validators.required, ]),
      availableInStock: new FormControl(0, [Validators.required, ]),
    });
  }

  submitForm() {
    if (this.filmSeriesForm.invalid) {
      this.snackBar.open("Formulário possui campos inválidos!", "Fechar");
      return;
    }

    this.filmsSeriesService.createFilmSerie(this.filmSeriesForm.value).subscribe({
      next: () => {
        this.snackBar.open("Item adicionado com sucesso!", "Fechar");
        this.router.navigate(['filmsSeries']);
      },
      error: () => {
        this.snackBar.open("Erro interno do servidor. Contate o suporte para mais informações!", "Fechar")
      }
    })
  }
}
