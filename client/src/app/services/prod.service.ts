import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductToBeUpdatedWithId } from '../models/productToBeUpdatedWithId';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  private apiUrl = 'https://localhost:5005/api/v1';

  constructor(private http: HttpClient) { }

  public getTopFiveProducts(){
    const url = `${this.apiUrl}/Product`;

    return this.http.get(url);
  }

  public getProductToBeUpdated(){
    const url = `${this.apiUrl}/Product/GetTopFiveProducts`;

    return this.http.get(url);
  }

  public updateProduct(prod: ProductToBeUpdatedWithId){

    const url = `${this.apiUrl}/Product`;

    return this.http.post(url, prod);
  }
}
