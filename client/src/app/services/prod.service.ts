import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  private apiUrl = 'https://localhost:5001/api/v1';

  constructor(private http: HttpClient) { }

  public getTopFiveProducts(){
    const url = `${this.apiUrl}/Product`;

    return this.http.get(url);
  }
}
