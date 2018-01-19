import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class InteractionProvider {

  private _nav: EventEmitter<any> = new EventEmitter(null);

  constructor() {}

  public push(namePage: any): void {
    return this._nav.emit(namePage);
  }

  public pop(): void {
    this._nav.emit('POP');
  }

  public getNavigatorListener(): Observable<string> {
    return this._nav.asObservable();
  }
}
