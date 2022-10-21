import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { MovieService } from '@/services';
import { SingleMovieResponse } from '@/models';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  public movie?: SingleMovieResponse;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.movieService.getSingleMovie(id).subscribe((res) => {
        this.movie = res;
      });
    });
  }

  ngOnInit(): void {}
}
