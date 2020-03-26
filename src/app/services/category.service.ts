import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, from, scheduled, of, interval } from 'rxjs';
import { Category } from '../models/category';
import { plainToClass } from 'class-transformer';
import { environment } from 'src/environments/environment';
import { catchError, map, tap, filter, take, count } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }


  getAll(): Observable<Category[]> {

    // const numbers = [1,2,3,4,5];
    // const numbers$ = from(numbers);
    // numbers$
    //   .pipe(
    //     tap(val => console.log('from tap - ',val))
    //   )
    //   .subscribe((val) => console.log(val));

    let fruits = [
      {
        id: 1,
        fruit: 'apple',
        color: 'red',
        size: 'small',
        hasLeaf: true
      },
      {
        id: 2,
        fruit: 'apple',
        color: 'green',
        size: 'medium',
        hasLeaf: false
      },
      {
        id: 3,
        fruit: 'apple',
        color: 'red/green',
        size: 'large',
        hasLeaf: true
      },
      {
        id: 4,
        fruit: 'apple',
        color: 'red',
        size: 'small',
        hasLeaf: false
      },
    ];

    const fruits$ = from(fruits)
      .pipe(
        tap((f)=> console.log('from tap - ', f)),
        // filter((f)=>  f.color === 'red'),
        map(f => {
          if(f.hasLeaf) {
            f.hasLeaf = false;
          }
          console.log('from map - ',f)
          return f

        })
      )
      // .subscribe(
      //   (fruit)=> console.log('in subsc - ', fruit)
      // );

      const counter$ = interval(1000)
        .pipe(
          take(10)
        )
        // .subscribe((a)=> console.log('final: ', a))
      const prime$ = counter$
        .pipe(
          filter((val)=> val % 2 !== 0)
        )
        .subscribe(
          (val)=> console.log(`prime: ${val}`)
        )

      const odd$ = counter$
      .pipe(
        filter((val)=> val % 2 === 0)
      )
      .subscribe(
        (val) => console.log(`odd: ${val}`)
      )



    return this.http
      .get<Category[]>(`${environment.apiUrl}list.php?c=list`).pipe(
        map((response: any)=> {
          return response.drinks.map(category => plainToClass(Category ,category));
        })
      )
  }
  createCategory(args){
    return this.http.post(`${environment.apiUrl}list.php?c=list`, args);
  }
}
