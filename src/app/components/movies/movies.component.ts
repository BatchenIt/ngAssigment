import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import { ApiService } from './../../services/api.service';
import { Movie } from './../../models/movie';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit, OnDestroy {

  movies: Movie[];
  masterColor: string = '#ea981d';
  icons: any = {};
  private activatedSub: Subscription;
  _mtm = window['_mtm'];

  constructor(private apiService: ApiService, public dialog: MatDialog) {
    this.activatedSub = apiService.moviesEvent.subscribe((res: Movie) => this.movies = [...this.movies, { ...res }]);
  }

  ngOnInit() {
    this.movies = [...this.apiService.movies];
    this.icons = {
      faTrashAlt: faTrashAlt,
      faPencilAlt: faPencilAlt
    }
  }

  private _openDialog(movie?: Movie) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: movie
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result', result);
    });
  }

  changeColor(i?: number) {
    let arrColors: string[] = colors();
    let colorsWithoutLastColor: string[] = i ? arrColors.filter(color => color != this.movies[i].backgroundColor) :
      arrColors.filter(color => color != this.masterColor);
    let random: number = Math.floor(Math.random() * colorsWithoutLastColor.length);

    if (i) {
      this.movies[i].backgroundColor = arrColors[random];
      return this._mtm.push({'change_color': this.movies[i].name});
    }
    this._mtm.push({'change_color': 'all'});
    this.masterColor = arrColors[random];
    console.log('_mtm', this._mtm);
  }

  addMovie() {
    this._openDialog();
  }

  deleteMovie(i: number) {
    this.movies.splice(i, 1);
  }

  updateMovie(i: number) {
    this._openDialog(this.movies[i]);
  }

  ngOnDestroy() {
    this.activatedSub.unsubscribe();
  }
}

function colors(): string[] {
  return [
    '#ea4c1d',
    '#ec1d1d',
    '#ecbf1d',
    '#ccec1d',
    '#1de2ec',
    '#1d83ec',
    '#931dec',
    '#ec1d69'
  ];
}


