import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Glass } from '../models/glass';
import { environment } from 'src/environments/environment';
import { plainToClass } from 'class-transformer';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlassService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Glass[]> {
    return this.http
      .get<Glass[]>(`${environment.apiUrl}list.php?g=list`).pipe(
        map((response: any)=> {
          return response.drinks.map(glass => plainToClass(Glass ,glass));
        })
      );
  }
}
