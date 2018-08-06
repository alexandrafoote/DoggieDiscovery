import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

    image: string;

    options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

  constructor(public navCtrl: NavController,  private camera: Camera, public navParams: NavParams, public loadingCtrl: LoadingController)
  {
    console.log(navParams.get('val'));
  }

    async takePicture() : Promise<any> {
      try {
             this.image = await this.camera.getPicture(this.options);
      }
      catch(e) {
        console.log(e);
      }
    }

    presentLoading() {
      this.loadingCtrl.create({
        content: 'Please wait...',
        duration: 3000,
        dismissOnPageChange: true
      }).present();
    }

}
