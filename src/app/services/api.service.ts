import { Injectable } from '@angular/core';
import { Movie } from './../models/movie';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  movies: Movie[];
  private _sub = new Subject();
  moviesEvent = this._sub.asObservable();

  constructor() {
    this.movies = this.initMoviesArray();
  }

  sub(data: Movie) {
    this._sub.next(data);
  }

  initMoviesArray() {
    return [
      {
        name: 'Pretty woman',
        imdbLink: 'https://www.imdb.com/title/tt0100405/',
        backgroundColor: ''
      },
      {
        name: 'Shutter Island',
        imdbLink: 'https://www.imdb.com/title/tt1130884/',
        backgroundColor: ''
      },
      {
        name: 'Joker',
        imdbLink: 'https://www.imdb.com/title/tt7286456/',
        backgroundColor: ''
      },
      {
        name: 'The Shawshank Redemption',
        imdbLink: 'https://www.imdb.com/title/tt0111161/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=TW9CGP4AGPE9711G64N5&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_1',
        backgroundColor: ''
      },
      {
        name: 'Fight Club',
        imdbLink: 'https://www.imdb.com/title/tt0137523/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=TW9CGP4AGPE9711G64N5&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_10',
        backgroundColor:''
      },
      {
        name: 'Titanic',
        imdbLink: 'https://www.imdb.com/title/tt0120338/',
        backgroundColor:''
      },
      {
        name: 'Forrest Gump',
        imdbLink: 'https://www.imdb.com/title/tt0109830/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=TW9CGP4AGPE9711G64N5&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_12',
        backgroundColor:''
      },
      {
        name: 'Star Wars',
        imdbLink: 'https://www.imdb.com/title/tt0076759/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=TW9CGP4AGPE9711G64N5&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_26',
        backgroundColor:''
      },
    ]
  }
}
