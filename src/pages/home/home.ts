import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../../pages/main/main';
import { HomeService } from '../../providers/home-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public servicesList : any[];
  public originList : any[];
  public destinationList : any[];
  public showOrigin:boolean = false;
  public showDestination:boolean = false;
  public origin:any;
  public destination:any;
  public service:any;

  constructor(public navCtrl: NavController, private homeService: HomeService) {

  }

  ngOnInit() {
    this.getServices();
  }

  mainPage() {
    this.navCtrl.push(MainPage);
  }

  getServices() {
    this.homeService.getServices().subscribe(result => {
      console.log(JSON.parse(result));
      this.servicesList = JSON.parse(result);
    });
  }

  getOrigin(service:string){
    this.showDestination = false;
    this.homeService.getOrigin(service).subscribe(result => {
      console.log(JSON.parse(result));
      this.originList =JSON.parse(result);
      this.showOrigin = true;
    });
    //success = true
  }

  getDestination(origin:string){
     //success = true showDestination 
     this.homeService.getDestination(origin).subscribe(result => {
      console.log(JSON.parse(result));
      this.destinationList =JSON.parse(result);
      this.showDestination = true;
    });
  }
}
