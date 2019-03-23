import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ModelProduct } from '../../model/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  public getProducts(): Observable<ModelProduct[]> {

    return this._http.get<ModelProduct[]>('http://json.hackmeup.io/products');

  }

}
