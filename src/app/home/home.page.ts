import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
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
  ngOnInit() {}
}
