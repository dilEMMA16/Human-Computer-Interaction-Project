
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { CustomPalettePage} from "../custompalette/custompalette";
import { EmailComposer } from '@ionic-native/email-composer';
@Component({
  selector: 'page-font',
  templateUrl: 'font.html'
})
export class FontPage {
  color1: any;
  color2: any;
  color3: any;
  color4: any;
  theme: any;
  constructor(public navCtrl: NavController,public navParams : NavParams) {
    this.color1 = navParams.get('color1');
    this.color2 = navParams.get('color2');
    this.color3 = navParams.get('color3');
    this.color4 = navParams.get('color4');
    this.theme = ""+navParams.get('data')+"";
  }

  navigateToHomePage() {
      this.navCtrl.pop();
      this.navCtrl.pop();
  }

  navigateToPalletePage() {
    this.navCtrl.pop();

  }


}
