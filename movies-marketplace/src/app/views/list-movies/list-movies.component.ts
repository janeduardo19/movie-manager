import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout/checkout.service';
import { Movie } from '../home/list-movies/movie-model';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  listMovies: Movie[] = [];

  constructor(private checkoutService:CheckoutService) { }

  ngOnInit(): void {
    this.checkoutService.getListMovies().subscribe((movie) => {
      this.listMovies = movie;
    })
  }

}
