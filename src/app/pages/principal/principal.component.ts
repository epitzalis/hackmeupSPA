import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pincipal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public txtSearch = '';

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {

  }

  public clearSearch(): void {
    this.txtSearch = '';
  }

  public onSearchChange(search: string) {
    this.txtSearch = search;
  }

  public goPrincipal() {
    if (this.txtSearch.length >= 3) {
      this._router.navigate(['/products', this.txtSearch]);
    } else {
      this._router.navigate(['/products', '']);
    }
  }

}
