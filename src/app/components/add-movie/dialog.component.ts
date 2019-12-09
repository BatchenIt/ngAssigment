import { Component, OnInit, Inject, Optional } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Movie } from '../../models/movie';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent implements OnInit {

  movie: Movie;
  editMode: boolean;

  constructor(private apiService: ApiService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Movie) { }

  ngOnInit() {
    this._initMovie();
  }

  private _initMovie() {
    if (this.data) {
      this.editMode = true;
      this.movie = this.data;
    }
    else {
      this.editMode = false;
      this.movie = new Movie();
    }
  }

  private isFormEmpty(): boolean {
    return !this.movie.name || this.movie.name.trim() == '' ||
      !this.movie.imdbLink || this.movie.imdbLink.trim() == '';
  }

  add() {
    if (!this.isFormEmpty()) {
      this.apiService.sub({ ...this.movie });
      return this.dialogRef.close('The movie saved!');
    }
    this.openSnackBar('Do not leave emtpy fields!');
  }

  cancel() {
    this.dialogRef.close();
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
      verticalPosition: 'top'
    });
  }

}
