import { LogoutAction, LookupUserinfoAction } from './../state-management/app-state/user-actions';
import { Store } from '@ngrx/store';
import { TOKEN } from './../global-properties/properties';
import { SideMenu, MainPage, FirstRunPage } from './../pages/pages';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { InteractionProvider } from '../providers/utils';
import { AppState } from '../state-management';

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
    private storage: Storage,
    private interaction: InteractionProvider,
    private store: Store<AppState>) {

    this.listenForNavigationEvents();
    this.goToMainPage();
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  listenForNavigationEvents() {
    this.interaction.getNavigatorListener().subscribe((page: any) => {
      if (page.type === 'POP') {
        this.nav.pop();
      }
      else if(page.type == 'ROOT') {
        this.nav.setRoot(page.page)
      }
      else {
        this.nav.push(page.page);
      }
    });
  }

  private goToMainPage() {
    this.storage.get(TOKEN).then((token) => {
      if (token) {
        this.rootPage = MainPage;
        this.store.dispatch(new LookupUserinfoAction());
      }
      else
        this.rootPage = FirstRunPage;
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.page);
  }
}
