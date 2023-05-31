import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  //Esto nos ahorra el paso de importar a providers el SpotifyServices
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Spotify Service is Ready');
  }

  //Por medio de esta funcion mandamos a llamar la infor de la API de Spotify
  getNewRealeases() {
    //Como nos pide un token, por medio de esta importación del HttpClient
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAqz_0TZGLsFljWjwb0HXN-Nmdh6AlwtlOA2hWTtujouy_zjwMchTZVmAHMDqolwKtpGfm3Ucxm9AXhv4NzVet5yxkODMWCws9HLZvcB6Iv-zlSt54',
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers,
    });
  }
}
