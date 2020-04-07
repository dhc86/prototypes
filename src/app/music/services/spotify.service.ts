import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Track } from '../models/track';
import { plainToClass } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  static BASE_URL = "https://api.spotify.com/v1";

  constructor(
    private http: HttpClient
  ) { }

  query(URL: string, params?: Array<string>): Observable<any> {
    // spotifu settting to be sent all requests
    let queryURL = `${SpotifyService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join("&")}`;
    }
    const apiKey = environment.SPOTIFY_API_KEY;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${apiKey}`
    });
    const options = {
      headers: headers
    };

    return this.http.request("GET", queryURL, options);
  }

  searchTrack(query: string): Observable<any> {
    return this.search(query, "track");
  }

  search(query: string, type: string): Observable<any> {
    return this.query(`/search`, [`q=${query}`, `type=${type}`])
    .pipe(
      map((data)=>
        plainToClass(Track, data.tracks.items as Track)
      )
    );
  }
}
