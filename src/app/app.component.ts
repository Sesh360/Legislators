import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Office of the Governor',
      url: '/governor',
      icon: 'business'
    },
    {
      title: 'Senators',
      url: '/senators',
      icon: 'person'
    },
    {
      title: 'House Members',
      url: '/house',
      icon: 'people'
    },
    {
      title: 'Districts',
      url: '/districts',
      icon: 'pin'
    },
    {
      title: 'NDMCA',
      url: '/ndmca',
      icon: 'call'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
