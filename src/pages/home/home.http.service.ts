// // Imports
// import { Injectable }     from '@angular/core';
// import { Http, Response } from '@angular/http'; //Headers //RequestOptions
// import { Comment }           from '../model/comment';
// import { Observable } from 'rxjs/Rx';

// // Import RxJs required methods
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

// @Injectable()
// export class CommentService {
//   private commentsUrl = 'http://localhost:3000/'; // private instance variable to hold base url
//   constructor (private http: Http) {} // Resolve HTTP using the constructor

//   // Fetch all existing comments
//   getComments() : Observable<Comment[]> {
//     return this.http.get(this.commentsUrl) // ...using get request
//       .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
//       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
//   }
// }
