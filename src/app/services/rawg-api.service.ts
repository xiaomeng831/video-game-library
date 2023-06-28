import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http"
import { APIResponse, Game, Screenshots, Trailer } from '../models/models';
import { environment } from 'src/environments/environment';
import { forkJoin, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RawgApiService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getGameList(ordering: string, search?: string) {

    let params = new HttpParams().set('ordering', ordering);

    if (search) params = new HttpParams().set('ordering', ordering).set('search', search);

    return this.http.get<APIResponse<Game>>(`${this.baseUrl}/games`, { params });
  }

  getGameDetails(id: string) {
    const gameInfoRequest = this.http.get<Game>(`${this.baseUrl}/games/${id}`);
    const gameTrailersRequest = this.http.get<Trailer>(`${this.baseUrl}/games/${id}/movies`);
    const gameScreenshotsRequest = this.http.get<Screenshots>(`${this.baseUrl}/games/${id}/screenshots`);

    return forkJoin({
      gameInfoRequest,
      gameScreenshotsRequest,
      gameTrailersRequest,
    }).pipe(
      map((resp: any) => {
        console.log(resp)
        return {
          ...resp['gameInfoRequest'],
          screenshots: resp['gameScreenshotsRequest']?.results,
          trailers: resp['gameTrailersRequest']?.results,
        };
      })
    );
  }
}
