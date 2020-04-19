import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productName;
  constructor(private _active: ActivatedRoute) { }

  ngOnInit() {
    this._active.params.subscribe(par => {
      this.productName = par.id;
    })
  }
 
}
