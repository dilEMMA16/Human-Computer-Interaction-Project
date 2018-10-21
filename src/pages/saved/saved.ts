import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { HomePage} from "../home/home";
import { FontPage} from "../font/font";
import { SaveThemeProvider } from './../../providers/save-theme/save-theme';
@Component({
  selector: 'page-saved',
  templateUrl: 'saved.html'
})
export class SavedPage {

savedThemes: any;


  constructor(public navCtrl: NavController, private emailComposer: EmailComposer,public navParams: NavParams,public saveThemeProvider: SaveThemeProvider) {
    this.saveThemeProvider.getAllSavedThemes().then(result => {
      console.log("local storage for themes on saved page" + result);
      this.savedThemes = result;
    });
    console.log(this.savedThemes);
  }


  navigateToHomePage() {
      this.navCtrl.pop();
  }

  emailTheme(){

        //let emailContent = color1 + " " + color2 + " " + color3 + " " + color4;
        let emailContent = "//put in css file:<br>:root{<br>--color-one:" + this.color1 +";<br>--color-two:" + this.color2 +";<br>--color-three:" + this.color3 + ";<br>--color-four:" + this.color4 + ";<br>}<br>//to use these css variables =   background-color: var(--color-one);"

        let email = {
          to: '',
          cc: '',
          attachments: [
          ],
          subject: 'Eye for Design Theme',
          body: emailContent,
          isHtml: true
        };

        this.emailComposer.open(email);
        console.log("send email");
  }

  deleteTheme(index){
    this.saveThemeProvider.deleteTheme(index);
  }


}
