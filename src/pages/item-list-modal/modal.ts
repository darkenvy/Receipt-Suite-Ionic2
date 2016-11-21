import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

interface Product {
  id: number,
  name: string,
  price: number
}

@Component({
  templateUrl: 'modal.html',
})
export class ModalContentPage {
  public product: Product;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.product = this.params.get('current');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
