import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { CustomPalettePage} from "../custompalette/custompalette";
import { EmailComposer } from '@ionic-native/email-composer';
import { HomePage} from "../home/home";
import { SavedPage} from "../saved/saved";
import { FontPage} from "../font/font";
import { SaveThemeProvider } from './../../providers/save-theme/save-theme';
@Component({
  selector: 'page-randomemail',
  templateUrl: 'randomemail.html'
})
export class RandomEmailPage {

  color1: any;
  color2: any;
  color3: any;
  color4: any;
  email: any;
  theme: any;
  font1:any;
  font2:any;
  font1code:any;
  font2code:any;
  themeName: any;



  constructor(public navCtrl: NavController, public navParams : NavParams,private emailComposer: EmailComposer,public saveThemeProvider: SaveThemeProvider) {
    this.color1 = navParams.get('color1');
    this.color2 = navParams.get('color2');
    this.color3 = navParams.get('color3');
    this.color4 = navParams.get('color4');
    this.email = "";
    this.theme = navParams.get('data');
    this.font1 = navParams.get('font1');
    this.font2 = navParams.get('font2');
    this.font1code = navParams.get('font1code');
    this.font2code = navParams.get('font2code');
    this.themeName = "";
  }



  navigateToHomePage() {
    this.navCtrl.pop();
  }

  savedThemes():void{
    this.navCtrl.push(SavedPage, {
      dummy:"dummy",
      dummy2:"dummy2"
    });

  }

  startNewTheme():void{
    this.navCtrl.popToRoot();
  }

  triggerSaveTheme() {

    let element: HTMLElement = document.getElementById("saveThemeCard");
    element.style.display = "block";
    let saveButton: HTMLElement = document.getElementById("saveButton");
    let themeNameInput: HTMLElement = document.getElementById("themeNameInput");
    saveButton.style.display = "block";
    themeNameInput.style.display = "block";
    document.getElementById("newtheme").style.height = "6vh";

  }


  saveTheme() {
    console.log(this.themeName);
    let element: HTMLElement = document.getElementById("inputofname");
    element.style.backgroundColor = "#e8f7ca";
    element.style.color = "#abbc89";
    element.innerHTML = "your theme " + this.themeName + " was saved successfully!";
    this.saveThemeProvider.saveTheme(this.themeName,this.color1,this.color2,this.color3,this.color4,this.font1,this.font2);
    console.log(this.saveThemeProvider.getAllSavedThemesArray());
  }



  remove(array, element) {
    const index = array.indexOf(element);

    if (index !== -1) {
        array.splice(index, 1);

      }
}


sendEmail() :void {
  //replace all spaces in font names with a +
    var replaced1 = this.font1.split(' ').join('+');
    var replaced2 = this.font2.split(' ').join('+');

    var importLink1 = "//put in FIRST line of css file <br>  @import url('https://fonts.googleapis.com/css?family=" + replaced1 + "');<br><br>";
    var importLink2 = "//put in SECOND line of css file <br>  @import url('https://fonts.googleapis.com/css?family=" + replaced2 + "');<br><br>";

    var cssstyle1 = " //put in css file <br> h1,h2,h3,h4,h5,h6 {font-family:" + this.font1code + ";}";
    var cssstyle2 = " //put in css file <br> p {font-family:" + this.font2code + ";}";
    let emailContent = "COLORS:<br>//put in css file:<br>:root{<br>--color-one:" + this.color1 +";<br>--color-two:" + this.color2 +";<br>--color-three:" + this.color3 + ";<br>--color-four:" + this.color4 + ";<br>}<br>//to use these css variables =   background-color: var(--color-one);<br><br>FONTS:<br>" + importLink1 + "<br>" + importLink2 + "<br>" + cssstyle1 + "<br>" + cssstyle2;

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





}
