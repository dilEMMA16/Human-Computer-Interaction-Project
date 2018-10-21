import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { HomePage} from "../home/home";
import { FontPage} from "../font/font";

@Component({
  selector: 'page-palette',
  templateUrl: 'palette.html'
})

export class PalettePage {

  theme: any;
  p1: any;
  p2: any;
  p3: any;
  p4: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.theme = navParams.get('data');
    this.p1 = navParams.get('palette1');
    this.p2 = navParams.get('palette2');
    this.p3 = navParams.get('palette3');
    this.p4 = navParams.get('palette4');
  }


  navigateToHomePage() {
      this.navCtrl.pop();
  }

  navigateToFontPage(chosenPalette) {
    this.navCtrl.push(FontPage, {
      'data' : this.theme,
      'color1' : chosenPalette[0],
       'color2' : chosenPalette[1],
       'color3' : chosenPalette[2],
       'color4' : chosenPalette[3]

    });
  }








}
