import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from './products.service';
import { ModelProduct } from '../../model/product-model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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

    this._getProductsSubscription = this._productsService.getProducts()
      .subscribe( (resp: ModelProduct[]) => {
        if (search === '') {
          this.products = resp;
        } else {
          resp.forEach(item => {
            if (item.title.trim().toLowerCase().indexOf(search.trim().toLowerCase())  >= 0) {
              this.products.push(item);
            }
          });
        }
    });

  }

  ngOnDestroy(): void {
    if (this._getProductsSubscription) {
      this._getProductsSubscription.unsubscribe();
    }
  }

}
