import { TOKEN } from './../global-properties/properties';
import { SideMenu, MainPage, FirstRunPage } from './../pages/pages';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  public rootPage: any;
  public pages = SideMenu;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private storage: Storage) {

    this.goToMainPage();
  }

  logout() {

  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  private goToMainPage() {
    this.storage.get(TOKEN).then((token) => {
      if(token){
        this.rootPage = MainPage;
        //this.store.dispatch(new LookupUserinfoAction());
      }
      else
        this.rootPage = FirstRunPage;
    });
  }
  
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
