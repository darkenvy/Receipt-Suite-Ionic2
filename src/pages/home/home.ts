import { Component } from '@angular/core';
import { Camera } from 'ionic-native';
// import { CameraImage } from './sample-camera-image'; // dummy image
// import { ModalPage } from './modal-page';
import { NavController } from 'ionic-angular';
import { HttpService } from '../services/http.service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public base64Image: string;
  public base64ImageRaw: string;
  public result: any[];
  constructor(
    public navCtrl: NavController,
    public httpService: HttpService
    ) {}



  ngOnInit(): void {
    this.httpService.sendImage()
      .subscribe(data => this.result = data);
    // this.httpService.sendImage();
    // this.httpService.getData()
    //   .subscribe(data => this.result = data);
  }







  pretendTakePicture() {
    // Made for Ionic Serve since we cand access cordova plugins on ionic serve
    // this.base64Image = "data:image/jpeg;base64," + CameraImage;
    // this.base64ImageRaw = CameraImage;
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
      // this.base64ImageRaw = imageData;
    }, (err) => {console.log(err)});
  }



  // getSampleData() {
  //   this.http.get('http://development.com:3000/')
  //     .subscribe(
  //       data => console.log(data),
  //       error => console.log(error)
  //       )
  // }

}
