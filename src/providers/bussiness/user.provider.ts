import { TOKEN } from './../../global-properties/properties';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/do';
import {Observable} from "rxjs/Observable";
import * as props from '../../global-properties/properties';
import { Storage } from '@ionic/storage';

@Injectable()
export class UserProvider {

  constructor(private storage: Storage) {}

  getUserInfo() {
    return Observable.fromPromise(this.storage.get(TOKEN));
  }

  login(credentials): Observable<any> {
    return this.handleJwtResponse(credentials);
  }

  private handleUserInfoResponse(user) {
    return Observable.fromPromise(this.storage.set(props.USER, user));
  }

  private handleJwtResponse(token) {
    return Observable.fromPromise(this.storage.set(props.TOKEN, token));
  }

  logout() {
    return Observable.fromPromise(this.storage.remove(props.TOKEN));
  }
}
