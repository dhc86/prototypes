import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Glass } from '../models/glass';
import { environment } from 'src/environments/environment';
import { plainToClass } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})
export class GlassService {

  constructor(
    private http: Http
  ) { }

  getAll(): Observable<Glass[]> {
    return this.http
      .get(`${environment.apiUrl}list.php?g=list`)
      .map((response: Response)=> {
        return response.json().drinks.map(glass => plainToClass(Glass ,glass));
      });
  }
}
