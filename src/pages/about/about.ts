import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { ModalContentPage } from '../item-list-modal/modal';

interface Receipt {
  id: number,
  name: string,
  price: number,
  expires: string
}

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styles: [`
    ion-note {
      font-size: 12px;
      align-self: flex-start;
      margin-top: 14px;
    }
  `]
})
export class AboutPage {
  public receipt: Receipt[];

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {
    this.receipt = [
      {
        id: 142354,
        name: "RITZ CRACKER",
        price: 8.59,
        expires: ''
      },
      {
        id: 5628,
        name: "CRAN GOAT CH",
        price: 6.59,
        expires: ''
      },
      {
        id: 5628,
        name: "CRAN GOAT CH",
        price: 6.59,
        expires: ''
      },
      {
        id: 947759,
        name: "MINI NAAN",
        price: 5.49,
        expires: ''
      },
      {
        id: 87745,
        name: "ROTISSERIE",
        price: 4.99,
        expires: ''
      },
      {
        id: 30669,
        name: "BANANAS",
        price: 1.39,
        expires: ''
      },
      {
        id: 83333,
        name: "GRN GRAPES",
        price: 7.99,
        expires: ''
      }
    ]
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }

}
