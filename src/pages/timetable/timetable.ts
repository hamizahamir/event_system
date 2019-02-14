import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-timetable',
  templateUrl: 'timetable.html'
})
export class TimetablePage {

  public origin :any;
  public destination :any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
      this.origin = this.navParams.get('origin');
      this.destination = this.navParams.get('destinationName');
      console.log(this.destination);          
    
  }

}
