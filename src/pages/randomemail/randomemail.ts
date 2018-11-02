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
    // this.navCtrl.push(HomePage, {
    //   dummy:"dummy",
    //   dummy2:"dummy2"
    // });
    this.navCtrl.popToRoot();
  }

  triggerSaveTheme() {

    let element: HTMLElement = document.getElementById("saveThemeCard");
      element.style.display = "block";
    let saveButton: HTMLElement = document.getElementById("saveButton");
    let themeNameInput: HTMLElement = document.getElementById("themeNameInput");

      saveButton.style.display = "block";
      themeNameInput.style.display = "block";


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

  //  let el: HTMLElement = document.getElementById("selectedEmail");

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





}
