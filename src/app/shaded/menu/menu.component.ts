import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
declare const M;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') private _sidenav: ElementRef;

  private _instanceSidenav;
  public urlImage = '';

  constructor() { }

  ngOnInit() {
    this._instanceSidenav = M.Sidenav.init(this._sidenav.nativeElement);

  }

  ngOnDestroy(): void {
    if (this._instanceSidenav) {
      this._instanceSidenav.destroy();
    }
  }

  public changeImage(event: any) {
    this.urlImage = event;
  }

}
