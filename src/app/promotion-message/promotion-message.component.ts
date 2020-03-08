import { Component, OnInit } from '@angular/core';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';

@Component({
  selector: 'app-promotion-message',
  templateUrl: './promotion-message.component.html',
  styleUrls: ['./promotion-message.component.css']
})
export class PromotionMessageComponent implements OnInit {
  constructor(private config: AngularFireRemoteConfig) {}

  promotionMessage = this.config.strings['promotionMessage'];

  ngOnInit(): void {}
}
