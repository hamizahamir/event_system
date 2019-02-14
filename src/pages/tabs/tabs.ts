import { Component } from '@angular/core';

import { InformationPage } from '../information/information';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = InformationPage;

  constructor() {

  }
}
