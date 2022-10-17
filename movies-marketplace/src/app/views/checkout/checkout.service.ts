import { Injectable } from '@angular/core';
import { Movie } from '../home/list-movies/movie-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  public baseUrl: string = "http://localhost:3001";
  public listMovies: Movie[] = [];
  public totalPrice: number = 0;
  public listSelectedMovies: Movie[] = []
  private _priceHandler: number = 0;
  private _movieHandler!: Movie;

  getPrice(): number {
    return this._priceHandler
  }

  setPrice(value: number) {
    this._priceHandler = value;
  }

  getMovie(): Movie {
    return this._movieHandler
  }

  setMovie(value: Movie) {
    this._movieHandler = value;
  }

  constructor(private httpClient: HttpClient) { }

  getListMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.baseUrl + '/movies');
  }

  selectMovie() {
    setTimeout(() => {
      this.totalPrice += this.getPrice();
      this.listSelectedMovies.push(this.getMovie());
      console.log(this.listSelectedMovies);
    }, 1);
  }

  unselectMovie() {
    this.totalPrice -= this.getPrice();
    if (this.totalPrice < 0) {
      this.totalPrice = 0;
    }

    let index = this.listSelectedMovies.indexOf(this.getMovie());
    if (index == -1 || index == this.listSelectedMovies.indexOf(this.getMovie())) {
      this.listSelectedMovies.splice(index, 1)
    }
    console.log(this.listSelectedMovies);
  }
}
