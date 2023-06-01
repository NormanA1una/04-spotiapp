import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  //Esto nos ahorra el paso de importar a providers el SpotifyServices
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Spotify Service is Ready');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    //Como nos pide un token, por medio de esta importación del HttpClient
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDYYfX5owEuK3SkBqPMJycQ-ltn0rPxvMFA3t7eQ0C86G2-to2-bpyzDqLPa5NDVnWx17Z24pjN-JYPBUID3Vl7-qiDdHe7dgUVujnVMj8-9imcWB4',
    });

    return this.http.get(url, { headers });
  }

  //Por medio de esta funcion mandamos a llamar la infor de la API de Spotify
  getNewRealeases() {
    return this.getQuery('browse/new-releases').pipe(
      map((data: any) => {
        return data.albums.items;
      })
    );
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data: any) => {
        return data.artists.items;
      })
    );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`); /* .pipe(
      map((data: any) => {
        return data.artists.items;
      })
    ); */
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((data: any) => {
        return data.tracks;
      })
    );
  }
}
