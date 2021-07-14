import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

//Servicio par obtener el token de acceso

//uso los enviroment como variables de entorno como se trabaja en la vida real
const BASE_URL = environment.base_url;

const { clientId, clientPassword, username, password } =
  environment.api_credentials;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  get headers() {
    return {
      headers: {
        Authorization: 'Basic d2ViZmctdGVzdDpXVzU4WUpqODlsdFI0M0Ny',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
  }

  getToken() {
    return this.http.post(
      `${BASE_URL}/oauth/token?grant_type=password&username=${username}&scope=uaa.user&password=${password}`,
      {},
      this.headers
    );
  }
}
