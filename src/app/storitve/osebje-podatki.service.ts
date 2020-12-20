import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Oseba } from '../razredi/Oseba';

@Injectable({
  providedIn: 'root'
})

export class OsebjePodatkiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/v1';

  public getOsebje(): Promise<Oseba[]> {

    const url: string = `${this.apiUrl}/osebe`;

    return this.http
      .get(url)
      .toPromise()
      .then(odgovor => odgovor as Oseba[])
      .catch(this.obdelajNapako);
  }

  private obdelajNapako(napaka: any): Promise<any> {
    console.error('Prišlo je do napake', napaka);
    return Promise.reject(napaka.message || napaka);
  }

}
