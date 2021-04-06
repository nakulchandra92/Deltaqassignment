import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule, MatCard, MatCardModule, MatCheckboxModule, MatChipsModule,
     MatDialogModule, MatExpansionModule, MatFormField, MatFormFieldModule, MatGridListModule,
     MatIconModule, MatInputModule, MatNativeDateModule, MatPaginatorModule, MatProgressSpinnerModule,
      MatSidenavModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule,
      MatTabsModule, MatToolbarModule} from "@angular/material";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatDatepickerModule } from "@angular/material/datepicker";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
// import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from "@angular/material/list";
// import {MatTabsModule} from '@angular/material/tabs';
import { MatMenuModule } from "@angular/material/menu";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";
// import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from "@angular/material/tooltip";
// import { SidebarModule } from 'ng-sidebar';
// import { CarouselModule, WavesModule, ButtonsModule, CardsModule,IconsModule} from 'angular-bootstrap-md';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// For MDB Angular Pro
// import { SidenavModule, WavesModule, AccordionModule } from 'ng-uikit-pro-standard'

import { ScrollingModule } from "@angular/cdk/scrolling";
@NgModule({
    exports: [MatTooltipModule, MatMenuModule, MatListModule, MatAutocompleteModule, MatIconModule,
        ScrollingModule, MatChipsModule, MatSlideToggleModule, MatExpansionModule, MatGridListModule,
         MatButtonToggleModule, MatSidenavModule, MatTabsModule, MatDividerModule, MatSliderModule,
          MatSelectModule, MatRadioModule, MatNativeDateModule, MatDatepickerModule, MatSnackBarModule,
           MatIconModule, MatDialogModule, MatProgressSpinnerModule, MatButtonModule, MatSortModule,
            MatCheckboxModule, MatToolbarModule, MatCardModule, MatTableModule, MatTabsModule,
            MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatPaginatorModule],
    imports: [MatTooltipModule, MatMenuModule, MatListModule, MatAutocompleteModule,
         MatIconModule, ScrollingModule, MatChipsModule, MatSlideToggleModule, MatExpansionModule,
         MatGridListModule, MatButtonToggleModule, MatSidenavModule, MatTabsModule, MatDividerModule,
          MatSliderModule, MatSelectModule, MatRadioModule, MatNativeDateModule,
           MatDatepickerModule, MatSnackBarModule, MatIconModule, MatDialogModule,
            MatProgressSpinnerModule, MatButtonModule, MatSortModule, MatTableModule, MatTabsModule,
            MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule,
            MatProgressSpinnerModule, MatInputModule, MatPaginatorModule],
})
export class MaterialModule { }
