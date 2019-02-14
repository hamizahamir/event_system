import { Component } from '@angular/core';

import { TimetablePage } from '../timetable/timetable';
import { InformationPage } from '../information/information';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TimetablePage;
  tab3Root = InformationPage;

  constructor() {

  }
}
