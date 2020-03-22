import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import {  map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  private url = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(options: any): Observable<any[]> {
    let path = options.path;
    return this.httpClient.get<any[]>(this.url + path);
  }
}
