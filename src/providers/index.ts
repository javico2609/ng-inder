import * as native from './ionic-native';
import * as bussiness from './bussiness';
import * as utils from './utils';

export const APP_PROVIDERS = [
  utils.InteractionProvider,
  
  bussiness.UserProvider,
  bussiness.TinderProvider,

  native.StatusBar,
  native.SplashScreen
];
