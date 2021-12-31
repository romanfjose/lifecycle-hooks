import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { IMovie } from 'src/app/models/movie.model';
import { CartService } from 'src/app/services/cart.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit, OnDestroy {
  constructor(
    private movieService: MovieService,

    private router: Router,

    private cartService: CartService
  ) {}

  private subscription: Subscription | undefined;

  allMovie: IMovie[] = [];

  ngOnInit(): void {
    this.subscription = this.movieService
      .getMovies()
      .subscribe((movie) => (this.allMovie = movie));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  addToCart(id: number) {
    this.cartService.addMovie(id);
  }
}
