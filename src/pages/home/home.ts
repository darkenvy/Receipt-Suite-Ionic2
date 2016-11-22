import { Component } from '@angular/core';
import { Camera } from 'ionic-native';
import { CameraImage } from './sample-camera-image'; // dummy image
// import { ModalPage } from './modal-page';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public base64Image: string;
  public base64ImageRaw: string;
  public debug: string;
  constructor(
    public navCtrl: NavController,
    public http:Http) {
      this.http = http;
      this.debug = 'pre';
  }



  pretendTakePicture() {
    // Made for Ionic Serve since we cand access cordova plugins on ionic serve
    this.base64Image = "data:image/jpeg;base64," + CameraImage;
    this.base64ImageRaw = CameraImage;
    this.debug = 'fake pic took';
  }

  takePicture(){
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    })
    .then((imageData) => {
      // imageData is a base64 encoded string
      // this.base64Image = "data:image/jpeg;base64," + imageData;
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.base64ImageRaw = imageData;
      this.debug = 'pic took';
    }, (err) => {console.log(err)});
  }

  sendPicture() {
    this.debug = 'send button pressed';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = '{"base64": "' + this.base64ImageRaw + '"}'
    console.log('base64Image: ', this.base64Image.length);
    this.http.post('192.168.1.112:3000/', body, options)
    // this.http.post('http://development.com:3000/', body, options)
      .subscribe(
        data => {
          console.log(data);
          this.debug = 'pic sent';
        },
        error => {
          console.log(error)
          this.debug = 'send pic error';
        }
        )
  }

  // getSampleData() {
  //   this.http.get('http://development.com:3000/')
  //     .subscribe(
  //       data => console.log(data),
  //       error => console.log(error)
  //       )
  // }

}
