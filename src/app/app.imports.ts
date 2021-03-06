// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/if';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/delay';
import "rxjs/add/observable/interval";
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/first';

import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/of';
import "rxjs/add/observable/fromEvent";
import 'rxjs/add/observable/fromPromise';

import { APP_PROVIDERS } from '../providers/index';

export const PIPES = [
  
];

export const DIRECTIVES = [
  
];

// Ionic app providers + native providers

export const PROVIDERS = [
  ...APP_PROVIDERS
];


