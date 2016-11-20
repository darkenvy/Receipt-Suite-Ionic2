import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

interface Receipt {
  id: number,
  name: string,
  price: number
}

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public receipt: Receipt[];

  constructor(public navCtrl: NavController) {
    this.receipt = [
      {
        id: 142354,
        name: "RITZ CRACKER",
        price: 8.59
      },
      {
        id: 5628,
        name: "CRAN GOAT CH",
        price: 6.59
      },
      {
        id: 5628,
        name: "CRAN GOAT CH",
        price: 6.59
      },
      {
        id: 947759,
        name: "MINI NAAN",
        price: 5.49
      },
      {
        id: 87745,
        name: "ROTISSERIE",
        price: 4.99
      },
      {
        id: 30669,
        name: "BANANAS",
        price: 1.39
      },
      {
        id: 83333,
        name: "GRN GRAPES",
        price: 7.99
      }
    ]
  }

}
