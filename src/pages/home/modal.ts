import { Component } from '@angular/core';
import { ViewController} from 'ionic-angular';

@Component({
  template: `
    <ion-navbar *navbar>
      <ion-buttons start>
        <button (click)="dismiss()">
          Cancel
        </button>
      </ion-buttons>
      <ion-title>Sample Modal</ion-title>
    </ion-navbar>
    <ion-content padding class="sample-modal-page">
      my sample modal page
    </ion-content>
  `
})
export class SampleModalPage {

  constructor(private viewCtrl: ViewController) {
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

}
