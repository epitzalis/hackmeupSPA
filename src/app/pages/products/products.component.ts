import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { ModelProduct } from '../../model/product-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


export class ProductsComponent implements OnInit {

  public products: ModelProduct[] = [];

  private _getProductsSubscription: Subscription;

  constructor(private _productsService: ProductsService) { }

  ngOnInit() {

    this._getProductsSubscription = this._productsService.getProducts()
      .subscribe( (resp: ModelProduct[]) => {
        this.products = resp;
    });

  }

  ngOnDestroy(): void {
    if (this._getProductsSubscription) {
      this._getProductsSubscription.unsubscribe();
    }
  }

}
