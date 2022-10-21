import { Routes } from '@angular/router';

import { HomeComponent } from '@/modules/home/home.component';
import { AboutComponent } from '@/modules/about/about.component';
import { MovieComponent } from '@/modules/movie/movie.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'movie/:id', component: MovieComponent },
];
