import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CsvuploadComponent } from "./csvupload/csvupload.component";

const routes: Routes = [
  {component: CsvuploadComponent, path: "csvupload" },
  {path: "**", redirectTo: "csvupload" }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]})

export class AppRoutingModule { }
