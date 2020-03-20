import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { plainToClass } from 'class-transformer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: Http
  ) { }

  getAll(): Observable<Category[]> {
    return this.http
      .get(`${environment.apiUrl}list.php?c=list`)
      .map((response: Response)=> {
        return response.json().drinks.map(category => plainToClass(Category ,category));
      });
  }
}
