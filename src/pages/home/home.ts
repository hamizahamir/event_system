import { Component, OnInit,ViewChild } from '@angular/core';
import { NavController,ToastController,App } from 'ionic-angular';
import { MainPage } from '../../pages/main/main';
import { TimetablePage } from '../../pages/timetable/timetable';
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

  constructor(public navCtrl: NavController, 
              private homeService: HomeService,
              private toastCtrl: ToastController,
              public app: App) {

  }

  ngOnInit() {
    this.getServices();
  }

  mainPage() {
    this.navCtrl.push(MainPage);
  }

  getServices() {
    this.homeService.getServices().subscribe(result => {
      this.servicesList = JSON.parse(result);
    });
  }

  getOrigin(service:string){
    this.showDestination = false;
    this.homeService.getOrigin(service).subscribe(result => {
      this.originList =JSON.parse(result);
      this.showOrigin = true;
    });
    //success = true
  }

  getDestination(origin:string){
     //success = true showDestination 
     this.homeService.getDestination(origin).subscribe(result => {
      this.destinationList =JSON.parse(result);
      this.showDestination = true;
    });
  }

  search(){

  }

  timetable(){
    if(!this.origin || !this.destination){
      let toast = this.toastCtrl.create({
        message: 'Please select origin and destination',
        duration: 3000,
        position: 'bottom'
      });
    
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
    }else{
      var item_dest = this.destinationList.find(item => item['STOP_CODE'] === this.destination);
      var item_origin = this.originList.find(item => item['STOP_CODE'] === this.origin);
      
      this.app.getRootNav().push(TimetablePage,{
        origin: item_origin.STOP_NAME,
        destinationId: this.destination,
        destinationName : item_dest.STOP_NAME
      });
      
    }
  }
}
