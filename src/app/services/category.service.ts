import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { plainToClass } from 'class-transformer';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Category[]> {
    return this.http
      .get<Category[]>(`${environment.apiUrl}list.php?c=list`).pipe(
        map((response: any)=> {
          return response.drinks.map(category => plainToClass(Category ,category));
        })
      )
  }
}
