import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'https://localhost:5005/api/v1';

  constructor(private http: HttpClient) { }

  public getOrdersInProgress(){
    const url = `${this.apiUrl}/Orders`;

    return this.http.get(url);
  }
}
