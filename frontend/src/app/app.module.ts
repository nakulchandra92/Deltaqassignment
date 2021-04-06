import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./shared/material/material.module";
import { SharedModule } from "./shared/shared.module";
import { CsvuploadComponent } from './csvupload/csvupload.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    CsvuploadComponent,
  ],
  entryComponents: [],
  imports: [
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [],

})
export class AppModule { }
