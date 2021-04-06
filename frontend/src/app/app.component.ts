import { Component, Inject } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Router, Routes } from "@angular/router";
import { DOCUMENT } from '@angular/common';


@Component({
  selector: "app-root",
  styleUrls: ["./app.component.css"],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private _document: Document, private router: Router, private snackBar: MatSnackBar) { }

  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: "center",
      panelClass: ["snackbar-position", "gray-snackbar"],
      verticalPosition: "top",
    });
  }

  public ngOnInit() {}

  public reload() {
    this._document.defaultView.location.reload();
  }
}
