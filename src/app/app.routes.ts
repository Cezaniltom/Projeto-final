import { Routes } from '@angular/router';
import { FilmsSeriesCatalogComponent } from './pages/films-series-catalog/films-series-catalog.component';
import { FilmsSeriesFormComponent } from './pages/films-series-form/films-series-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "filmsSeries", component: FilmsSeriesCatalogComponent },
    { path: "form", component: FilmsSeriesFormComponent },
    { path: "", redirectTo: "filmsSeries", pathMatch: "full" },
    { path: "**", component: NotFoundComponent }
];
