import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import 'firebase/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {
  AngularFireAuthGuardModule,
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/auth-guard';
import {
  AngularFireRemoteConfigModule,
  SETTINGS
} from '@angular/fire/remote-config';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { environment } from 'src/environments/environment';
import { SignInComponent } from './sign-in/sign-in.component';
import { PromotionMessageComponent } from './promotion-message/promotion-message.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      {
        path: 'cart',
        component: CartComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/sign-in']))
      },
      { path: 'shipping', component: ShippingComponent },
      {
        path: 'sign-in',
        component: SignInComponent,
        ...canActivate(() => redirectLoggedInTo(['/']))
      }
    ]),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    AngularFireRemoteConfigModule
  ],
  providers: [
    {
      provide: SETTINGS,
      useValue: { minimumFetchIntervalMillis: 10_000 }
    }
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    SignInComponent,
    PromotionMessageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
