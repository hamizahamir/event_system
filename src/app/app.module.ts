import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { TimetablePage } from '../pages/timetable/timetable';
import { InformationPage } from '../pages/information/information';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MainPage } from "../pages/main/main";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//services
import { HomeService } from "../providers/home-service";

import { TimelineComponent } from '../pages/timeline/timeline';
import { TimelineTimeComponent } from '../pages/timeline/timeline';
import { TimelineItemComponent } from '../pages/timeline/timeline';

@NgModule({
  declarations: [
    MyApp,
    TimetablePage,
    InformationPage,
    HomePage,
    TabsPage,
    MainPage,
    TimelineComponent,
    TimelineItemComponent,
    TimelineTimeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TimetablePage,
    InformationPage,
    HomePage,
    TabsPage,
    MainPage
  ],
  providers: [
    HomeService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
