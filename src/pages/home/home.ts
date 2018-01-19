import { TinderLoadAction } from './../../state-management/app-state/tinder-actions';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, ViewChild, ViewChildren, QueryList, ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {
  StackConfig,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent,
  ThrowEvent,
  Direction
} from 'angular2-swing';
import { AppState } from '../../state-management';
import { getTindersActive } from '../../state-management/app-state/tinder.selector';
import * as actions from '../../state-management/app-state/tinder-actions';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  public stackConfig: StackConfig;
  public recentCard: string = '';
  public cards$: Observable<TinderModel[]>;

  constructor(public navCtrl: NavController, private store: Store<AppState>) {
    this.cards$ = this.store.select(getTindersActive);

    this.stackConfig = {
      allowedDirections: [Direction.LEFT, Direction.RIGHT],

      throwOutConfidence: (offset, element: any) => {
        return Math.min(Math.abs(offset) / (element.offsetWidth / 2), 1);
      },
      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
      },
      throwOutDistance: (d) => {
        return 800;
      }
    };
  }

  reload() {
    this.store.dispatch( new actions.TinderLoadAction());
  }

  ngAfterViewInit() {
    this.swingStack.throwin.subscribe((event: DragEvent) => {
      event.target.style.background = '#ffffff';
    });
  }

  onItemMove(element, x, y, r) {
    let color = '';
    const abs = Math.abs(x);
    const min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
    const hexCode = this.decimalToHex(min, 2);

    if (x > 0) {
      color = '#' + hexCode + 'FF' + hexCode;
    } else {
      color = '#FF' + hexCode + hexCode;
    }

    // if (x > 200) {
    //   this.voteUp(true);
    // }
    // else if (x < -200) {
    //   this.voteUp(false);
    // }

    element.style.background = color;
    element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
  }

  voteUp(like: boolean) {
    this.store.dispatch( new actions.ApiSuccessAction({ action: actions.ActionTypes.TINDER_VOTE }));
  }

  // http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
  decimalToHex(d, padding) {
    let hex = Number(d).toString(16);
    const numPadding = typeof (padding) === 'undefined' || padding === null ? 2 : padding;

    while (hex.length < numPadding) {
      hex = '0' + hex;
    }

    return hex;
  }
}
