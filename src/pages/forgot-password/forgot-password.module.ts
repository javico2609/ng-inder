import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgotPasswordPage } from './forgot-password';

@NgModule({
  declarations: [
    ForgotPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(ForgotPasswordPage),
    SharedModule
  ],
})
export class ForgotPasswordPageModule {}
