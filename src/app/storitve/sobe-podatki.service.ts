import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Soba } from '../razredi/Soba';

@Injectable({
  providedIn: 'root'
})

export class SobePodatkiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/v1';

  public getSobe(): Promise<Soba[]> {

    const url: string = `${this.apiUrl}/sobe`;

    return this.http
      .get(url)
      .toPromise()
      .then(odgovor => odgovor as Soba[])
      .catch(this.obdelajNapako);
  }

  public getSoba(idSobe: string): Promise<Soba> {
    
    const url: string = `${this.apiUrl}/sobe/${idSobe}`;
    
    return this.http
    .get(url)
    .toPromise()
    .then(odgovor => odgovor as Soba)
    .catch(this.obdelajNapako);
  }
  
  public deleteSoba(idSobe: number): Promise<any> {
    
    const url:string = `${this.apiUrl}/sobe/${idSobe}`;
    
    return this.http
    .delete(url)
    .toPromise()
    .then(odgovor => odgovor as any)
    .catch(this.obdelajNapako);
  }

  public spremeniStLjudi(idSobe: number, stevilo: number): Promise<any> {
    
    const url:string = `${this.apiUrl}/sobe/${idSobe}/dodaj/${stevilo}`;
    
    return this.http
    .post(url, null)
    .toPromise()
    .then(odgovor => odgovor as any)
    .catch(napaka => napaka as any);
  }

  public pridobiSlike(keyword: string): Promise<any> {
    
    const url:string = `${this.apiUrl}/podatki/slike/${keyword}`;
    
    return this.http
    .get(url)
    .toPromise()
    .then(odgovor => odgovor as any)
    .catch(this.obdelajNapako);
  }
  
  public createSoba(soba: Soba): Promise<any> {
    
    const url:string = `${this.apiUrl}/sobe`;
    
    return this.http
    .post(url, soba)
    .toPromise()
    .then(odgovor => odgovor as any)
    .catch(this.obdelajNapako);
  }
  // const headers = new HttpHeaders({'Content-Type': 'application/json'});
  
  private obdelajNapako(napaka: any): Promise<any> {
    console.error('Prišlo je do napake', napaka);
    return Promise.reject(napaka.message || napaka);
  }
  
  // private url = 'http://localhost:8080/v1/seznami';

  // constructor(private http: HttpClient) {
  // }

  // getSeznami(): Observable<NakupovalniSeznam[]> {
  //     return this.http.get<NakupovalniSeznam[]>(this.url)
  //                     .pipe(catchError(this.handleError));
  // }

  // getSeznam(id: number): Observable<NakupovalniSeznam> {
  //     const url = `${this.url}/${id}`;
  //     return this.http.get<NakupovalniSeznam>(url)
  //                     .pipe(catchError(this.handleError));
  // }


  // create(seznamId: number, artikel: Artikel): Observable<Artikel> {
  //     return this.http.post<Artikel>(this.url + '/' + seznamId + '/artikli', JSON.stringify(artikel), {headers: this.headers})
  //                     .pipe(catchError(this.handleError));
  // }

  // private handleError(error: any): Promise<any> {
  //     console.error('Prišlo je do napake', error);
  //     return Promise.reject(error.message || error);
  // }











}
