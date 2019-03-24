import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ModelProduct } from '../../model/product-model';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  public getProducts(): Observable<ModelProduct[]> {
    return this._http.get<ModelProduct[]>('/assets/mock-data/products.json');
  }

  public orderList(products: ModelProduct[], order: string): ModelProduct[] {
    switch (order) {
      case '1':
        return _.orderBy(products, ['title'], ['asc']);
      case '2':
        return _.orderBy(products, ['title'], ['desc']);
      case '3':
        return _.orderBy(products, ['price'], ['asc']);
      case '4':
        return _.orderBy(products, ['price'], ['desc']);
    }
  }

}
