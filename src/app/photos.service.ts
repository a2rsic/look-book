import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private baseUrl = 'https://picsum.photos/';

  constructor(private http: HttpClient) { }

  public getImages(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/v2/list`)
      .pipe(
        catchError(error => {
          console.log(error);
          return throwError(error);
        })
      );
  }
}
