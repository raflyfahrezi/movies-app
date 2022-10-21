import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@/environments/environment';
import { MovieResponse, SingleMovieResponse } from '@/models';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getDiscoverMovies(): Observable<MovieResponse> {
    const { apiKey, baseUrl } = environment;

    const result = this.http.get<MovieResponse>(
      `${baseUrl}discover/movie?api_key=${apiKey}`
    );

    return result;
  }

  getSingleMovie(id: string): Observable<SingleMovieResponse> {
    const { apiKey, baseUrl } = environment;

    const result = this.http.get<SingleMovieResponse>(
      `${baseUrl}movie/${id}?api_key=${apiKey}`
    );

    return result;
  }
}
