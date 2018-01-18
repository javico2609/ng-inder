import { SharedModule } from './../shared/shared.module';
import { PROVIDERS } from './app.imports';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {environment} from '../environments/environment';
import { MyApp } from './app.component';

import { IonicStorageModule } from '@ionic/storage';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {AppReducers, metaReducers} from '../state-management';
import {AppEffects} from '../state-management/app-state/effects';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp, {
      iconMode: 'md',
      mode: 'md',
      pageTransition: 'md-transition'
    }),
    SharedModule,
    IonicStorageModule.forRoot({
      name: '__ngInderdb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),

    StoreModule.forRoot(AppReducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 20}) : [],
    EffectsModule.forRoot(AppEffects),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    ...[PROVIDERS],
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
