import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private valueSubject = new Subject<string>();
  value$ = this.valueSubject.asObservable();

  constructor() { }

  public emitValue(value: string) {
    this.valueSubject.next(value);
  }
}
