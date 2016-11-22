import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CameraImage } from '../home/sample-camera-image'; // dummy image
import { Observable } from 'rxjs/Observable';

interface Receipt {
  id: number,
  name: string,
  price: number,
  expires: string
}

@Injectable()
export class HttpService {
  public test: string;
  public listItems: Receipt[];
  // public base64Image: string;
  public base64ImageRaw: string;

  constructor(public http:Http) {
    // this.base64ImageRaw = CameraImage;
    this.test = 'fresh instance';
    this.base64ImageRaw = CameraImage;
  }

  sendImage() {
    if (this.listItems != null) return Observable.of(this.listItems);
    else return this.getData()
  }

  // POST route : Post image to recieve text
  private getData(): Observable<Receipt[]> {
    this.test = 'same instance!';
    let uri = 'http://development.com:3000/'
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = '{"base64": "' + this.base64ImageRaw + '"}'
    return this.http.post(uri, body, options)
      .map(response => <Receipt[]>response.json().map(item => {item['expires'] = ''; return item;}))
      .do(data => this.listItems = data)
  }

}
