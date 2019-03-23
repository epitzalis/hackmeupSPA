import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
declare const M;


@Component({
  selector: 'app-pincipal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit, OnDestroy {
  @ViewChild('select') private _select: ElementRef;

  public txtSearch = '';
  private instanceSelect;


  constructor(
    private _router: Router
  ) { }

  ngOnInit() {

    this.instanceSelect = M.FormSelect.init(this._select.nativeElement);

  }

  ngOnDestroy(): void {
    if (this.instanceSelect) {
      this.instanceSelect.destroy();
    }
  }

  public clearSearch(): void {
    this.txtSearch = '';
  }

  public onSearchChange(search: string) {
    this.txtSearch = search;
  }

  public goPrincipal() {
    if (this.txtSearch.length >= 3) {
      this._router.navigate(['/products', this.txtSearch, this._select.nativeElement.value]);
    } else {
      this._router.navigate(['/products', 'unfiltered', this._select.nativeElement.value]);
    }
  }

}
