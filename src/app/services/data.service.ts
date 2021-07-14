import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FieldData } from '../models/FieldData.model';
import { Observable } from 'rxjs';

//Servicio para obtener los datos de la API

//uso los enviroment como variables de entorno como se trabaja en la vida real
const BASE_URL = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(token: string): Observable<FieldData[]> {
    const headers = {
      headers: {
        Accept: 'application/vnd.solid-v1.0+json',
        Authorization: `Bearer ${token}`,
      },
    };

    return this.http
      .get(
        `${BASE_URL}/quotes/2970161-1058-814?fields= LVAL_NORM,CLOSE_ADJ_NORM,NC2_PR_NORM,NC2_NORM,VOL,TUR,PY_CLOSE,YTD_PR_NORM`,
        headers
      ) //pasamos por el pipe para dejar solo los datos que nos importa el array de fields
      .pipe(
        map((data: any) =>
          data.quotes.map((quotes: any) => quotes.fields as FieldData[])
        )
      );
  }
}
