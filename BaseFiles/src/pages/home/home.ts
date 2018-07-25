import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'home.html'
})



export class HomePage {

  constructor(public navCtrl: NavController) {}
   
    loadAboutPage(){
      this.navCtrl.push(AboutPage, {
        val: "Doggies"
      })
    }
  }
