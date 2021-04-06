import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { CsvuploadService } from './csvupload.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-csvupload',
  templateUrl: './csvupload.component.html',
  styleUrls: ['./csvupload.component.css']
})
export class CsvuploadComponent implements OnInit {
  public file:File;
  public errorMessage;
  public successMessage;
  public uploaded;
  public data;
  public filename;
  public success;
  public processeddata: any = [];
  fileToUpload: File = null;

  constructor(@Inject(DOCUMENT) private _document: Document, private router: Router, private snackBar: MatSnackBar, private uploadServ: CsvuploadService) {}

//Background image
  public getUrl() {
    return "url('../../assets/file.webp')";
  }

  public ngOnInit() {  
    sessionStorage.setItem("filename", "");
  }

//Snackbar Popup
  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: "center",
      panelClass: ["snackbar-position", "gray-snackbar"],
      verticalPosition: "top",
    });
  }

   
//File upload function
  changeListener(files: FileList){
     this.fileToUpload = files.item(0);
     sessionStorage.setItem("filename", "");
     if(this.fileToUpload.name.substr(-4)==".csv"){
      this.uploadFileToActivity(this.fileToUpload)
    } else {
      this.openSnackBar("Please upload CSV file", "OK");
    }
  }


  uploadFileToActivity(file) {
    sessionStorage.setItem("filename", file.name);
      this.uploadServ.postFile(file).subscribe(data => {
      this.openSnackBar("Uploaded Successfully", "OK");
      this.uploaded = "Uploaded Successfully";
      }, error => {
        this.openSnackBar("Some Error Occured", "OK");
      });
    }

//For Processing the data
  public ProcessData() {
    this.success = ""
    this.filename = sessionStorage.getItem("filename");
    this.uploaded = "";
    this.uploadServ.processdata(this.filename).subscribe (
      (response) => {
        this.success=response
      },
      (error) => { 
        this.errorMessage = error.error.message;
        this.openSnackBar("Some Error Occured", "OK");
      }
    )
  }
     
//For Closing the Popup
  public cancel(){
    this.uploaded = "";
    this._document.defaultView.location.reload();
  }
}

  



   
   




  

    
