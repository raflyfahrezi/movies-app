import { OnInit, Component } from '@angular/core';

import { Movie } from '@/models';
import { MovieService } from '@/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movieList: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getDiscoverMovies().subscribe((response) => {
      this.movieList = response.results;
    });
  }
}
