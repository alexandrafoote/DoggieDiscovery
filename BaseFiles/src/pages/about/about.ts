import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,  public navParams: NavParams, public loadingCtrl: LoadingController)
  {
    console.log(navParams.get('val'));
  }


    presentLoading() {
      this.loadingCtrl.create({
        content: 'Please wait...',
        duration: 3000,
        dismissOnPageChange: true
      }).present();
    }



}
