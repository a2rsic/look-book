import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IImage } from './types/image.interface';



@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private baseUrl = 'https://picsum.photos/';

  constructor(private http: HttpClient) { }

  public getImages(): Observable<IImage[]> {
    return this.http.get<IImage[]>(`${this.baseUrl}/v2/list`)
      .pipe(
        catchError(error => {
          console.log(error);
          return throwError(error);
        })
      );
  }
}
