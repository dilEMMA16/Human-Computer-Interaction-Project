import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
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


  constructor(public navCtrl: NavController, private cd: ChangeDetectorRef,private emailComposer: EmailComposer,public navParams: NavParams,public saveThemeProvider: SaveThemeProvider) {
    this.saveThemeProvider.getAllSavedThemes().then(result => {
      console.log("local storage for themes on saved page" + result);
      this.savedThemes = result;
    });
    console.log(this.savedThemes);

  }


  navigateToHomePage() {
    this.navCtrl.pop();

  }

  emailTheme(theme){
    //replace all spaces in font names with a +
      var replaced1 = theme.font1.split(' ').join('+');
      var replaced2 = theme.font2.split(' ').join('+');

      var importLink1 = "//put in FIRST line of css file <br>  @import url('https://fonts.googleapis.com/css?family=" + replaced1 + "');<br><br>";
      var importLink2 = "//put in SECOND line of css file <br>  @import url('https://fonts.googleapis.com/css?family=" + replaced2 + "');<br><br>";

      var cssstyle1 = " //put in css file <br> h1,h2,h3,h4,h5,h6 {font-family:" + theme.font1code + ";}";
      var cssstyle2 = " //put in css file <br> p {font-family:" + theme.font2code + ";}";
      let emailContent = "COLORS:<br>//put in css file:<br>:root{<br>--color-one:" + theme.color1 +";<br>--color-two:" + theme.color2 +";<br>--color-three:" + theme.color3 + ";<br>--color-four:" + theme.color4 + ";<br>}<br>//to use these css variables =   background-color: var(--color-one);<br><br>FONTS:<br>" + importLink1 + "<br>" + importLink2 + "<br>" + cssstyle1 + "<br>" + cssstyle2;

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
    this.saveThemeProvider.getAllSavedThemes().then(result => {
      console.log("local storage for themes on saved page" + result);
      this.savedThemes = result;
    });
  }


}
