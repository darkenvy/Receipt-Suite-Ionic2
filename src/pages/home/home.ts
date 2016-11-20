import { Component } from '@angular/core';
import { Camera } from 'ionic-native';
import { CameraImage } from './sample-camera-image'; // dummy image
import { ModalPage } from './modal-page';
import { NavController, ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { ModalContentPage } from '../modal/pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public base64Image: string;
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {}

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }

  pretendTakePicture() {
    // Made for Ionic Serve since we cand access cordova plugins on ionic serve
    this.base64Image = "data:image/jpeg;base64," + CameraImage;
  }

  takePicture(){
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    })
    .then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {console.log(err)});
  }

}
