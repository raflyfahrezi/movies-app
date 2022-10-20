import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MovieResponse } from '@/models';
import { environment } from '@/environments/environment';

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
}
