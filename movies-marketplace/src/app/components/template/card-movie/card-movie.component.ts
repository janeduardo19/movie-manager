import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../views/home/list-movies/movie-model';
import { CheckoutService } from '../../../views/checkout/checkout.service';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {

  listMovies: Movie[] = [];

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.checkoutService.getListMovies().subscribe((movie) => {
      this.listMovies = movie;
      //console.log(this.listMovies);
    })
  }

  selectMovie(movie: Movie): void {
    this.checkoutService.setMovie(movie);
    this.checkoutService.setPrice(movie.price);
  }
}
