
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { CustomPalettePage} from "../custompalette/custompalette";
import { SavedPage} from "../saved/saved";
import { EmailPage} from "../email/email";
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
  fontcombo1: any;
  fontcombo2: any;
  fontcombo3: any;
  fontcombo4: any;
  fontcombo5: any;
  font1nameheader: any;
  font1namebody: any;
  font1codeheader: any;
  font1codebody:any;
  font2nameheader: any;
  font2namebody: any;
  font2codeheader: any;
  font2codebody:any;
  font3nameheader: any;
  font3namebody: any;
  font3codeheader: any;
  font3codebody:any;
  font4nameheader: any;
  font4namebody: any;
  font4codeheader: any;
  font4codebody:any;
  font5nameheader: any;
  font5namebody: any;
  font5codeheader: any;
  font5codebody:any;


  constructor(public navCtrl: NavController,public navParams : NavParams) {
    this.fontcombo1 = new Array();
    this.fontcombo2 = new Array();
    this.fontcombo3 = new Array();
    this.fontcombo4 = new Array();
    this.fontcombo5 = new Array();
    this.color1 = navParams.get('color1');
    this.color2 = navParams.get('color2');
    this.color3 = navParams.get('color3');
    this.color4 = navParams.get('color4');
    this.theme = ""+navParams.get('data')+"";
    this.fontcombo1 = navParams.get('font1');
    this.fontcombo2 = navParams.get('font2');
    this.fontcombo3 = navParams.get('font3');
    this.fontcombo4 = navParams.get('font4');
    this.fontcombo5 = navParams.get('font5');
    this.font1nameheader = this.fontcombo1[0];
    this.font1namebody = this.fontcombo1[1];
    this.font1codeheader = this.fontcombo1[2];
    this.font1codebody = this.fontcombo1[3];
    this.font2nameheader = this.fontcombo2[0];
    this.font2namebody = this.fontcombo2[1];
    this.font2codeheader = this.fontcombo2[2];
    this.font2codebody = this.fontcombo2[3];
    this.font3nameheader = this.fontcombo3[0];
    this.font3namebody = this.fontcombo3[1];
    this.font3codeheader = this.fontcombo3[2];
    this.font3codebody = this.fontcombo3[3];
    this.font4nameheader = this.fontcombo4[0];
    this.font4namebody = this.fontcombo4[1];
    this.font4codeheader = this.fontcombo4[2];
    this.font4codebody = this.fontcombo4[3];
    this.font5nameheader = this.fontcombo5[0];
    this.font5namebody = this.fontcombo5[1];
    this.font5codeheader = this.fontcombo5[2];
    this.font5codebody = this.fontcombo5[3];
    //font combos = 0 --> header name, 1 --> body name, 2 --> header css, 3 --> body css
  }

  navigateToHomePage() {
      this.navCtrl.pop();
      this.navCtrl.pop();
  }

  navigateToPalletePage() {
    this.navCtrl.pop();

  }

  navigateToEmailPage(comboChosen) {
    let font1 = "";
    let font2 = "";
    let font1code = "";
    let font2code = "";

    if (comboChosen == 1){
      font1 = this.font1nameheader;
      font2 = this.font1namebody;
      font1code = this.font1codeheader;
      font2code = this.font1codebody;
    }
    if (comboChosen == 2){
      font1 = this.font2nameheader;
      font2 = this.font2namebody;
      font1code = this.font2codeheader;
      font2code = this.font2codebody;
    }
    if (comboChosen == 3){
      font1 = this.font3nameheader;
      font2 = this.font3namebody;
      font1code = this.font3codeheader;
      font2code = this.font3codebody;
    }
    if (comboChosen == 4){
      font1 = this.font4nameheader;
      font2 = this.font4namebody;
      font1code = this.font4codeheader;
      font2code = this.font4codebody;
    }
    if (comboChosen == 5){
      font1 = this.font5nameheader;
      font2 = this.font5namebody;
      font1code = this.font5codeheader;
      font2code = this.font5codebody;
    }

    this.navCtrl.push(EmailPage, {
      'color1':this.color1,
      'color2':this.color2,
      'color3': this.color3,
      'color4': this.color4,
      'data' : this.theme,
      'font1':font1,
      'font2':font2,
      'font1code':font1code,
      'font2code':font2code
    });



  }

  savedThemes():void{
    this.navCtrl.push(SavedPage, {
      dummy:"dummy",
      dummy2:"dummy2"
    });

  }


}
