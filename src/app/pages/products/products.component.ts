import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from './products.service';
import { ModelProduct } from '../../model/product-model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import * as _ from 'lodash';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


export class ProductsComponent implements OnInit, OnDestroy {

  public products: ModelProduct[] = [];

  private _getProductsSubscription: Subscription;

  constructor(private _productsService: ProductsService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const search = this._activatedRoute.snapshot.paramMap.get('search');
    const order = this._activatedRoute.snapshot.paramMap.get('order');

    this.getProducts(search, order);

  }

  ngOnDestroy(): void {
    if (this._getProductsSubscription) {
      this._getProductsSubscription.unsubscribe();
    }
  }

  private getProducts(search: string, order: string) {
    this._getProductsSubscription = this._productsService.getProducts()
      .subscribe( (resp: ModelProduct[]) => {
        if (search === 'unfiltered') {
          this.products = resp;
        } else {
          resp.forEach(item => {
            if (item.title.trim().toLowerCase().indexOf(search.trim().toLowerCase())  >= 0) {
              this.products.push(item);
            }
          });
        }
        if (order !== '') {
          this.products = this._productsService.orderList(this.products, order);
        }
    });
  }


}
