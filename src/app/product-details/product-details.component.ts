import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, switchMap } from 'rxjs/operators';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private firestore: AngularFirestore
  ) {}

  product = this.route.paramMap.pipe(
    map(params => parseInt(params.get('productId'), 10)),
    switchMap(productId =>
      this.firestore
        .collection('products', ref => {
          return ref.where('id', '==', productId).limit(1);
        })
        .valueChanges()
    ),
    map(match => match[0])
  );

  ngOnInit() {}

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
