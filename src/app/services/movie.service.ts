import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICart } from '../models/cart.model';
import { IMovie } from '../models/movie.model';
import { moviesMock } from './movies.mock';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  rentalMovie: ICart[] = [];
  uniqueMovie: IMovie | undefined;

  getMovies(): Observable<IMovie[]> {
    return of(moviesMock);
  }

  getMovieById(id: Number): Observable<IMovie | undefined> {
    return of(moviesMock.find((movies) => movies.id === id));
  }
}
