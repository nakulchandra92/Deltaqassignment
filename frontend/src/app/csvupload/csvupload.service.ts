import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CsvuploadService {

  public url = "http://localhost:5001/process";

  constructor(private http: HttpClient) { }

//Uploading File
  postFile(fileToUpload: File): Observable<any> {
      const headers = { 'enctype': 'multipart/form-data' }
      const endpoint = 'http://localhost:5001/uploader';
      const formData: FormData = new FormData();
      formData.append('file', fileToUpload);
      return this.http.post<any>(endpoint, formData,{
        headers: {​​​​​​​'enctype': 'multipart/form-data',responseType : 'text' }});
    }

//Processing Data
  public processdata(file): Observable<any> {
    let params = new HttpParams();
    params = params.append('file', file);
    return this.http.get<any>(this.url, { params: params });
    }
}
