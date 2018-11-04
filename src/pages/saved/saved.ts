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
    // this.navCtrl.push(this.navCtrl.getByIndex(this.previousPage));
    this.navCtrl.pop();

  }

  // refresh():void{
  //   let element: HTMLElement = document.getElementById("savedthemesdiv");
  //   element.innerHTML = "<div *ngFor='let t of savedThemes;let i=index'id=savedDiv>{{t.name}}<hr><button color=light id=email ion-button clear (click)='emailTheme(t)'>email</button><span class=gray>|</span><button color=light id=delete ion-button clear (click)='deleteTheme(i)'>delete</button><br><br><ion-grid><ion-row><ion-col class='col col-3'><div class=tear [style.background-color]='t.color1'></div></ion-col><ion-col class='col col-3'><div class=tear [style.background-color]='t.color2'></div></ion-col><ion-col class='col col-3'><div class=tear [style.background-color]='t.color3'></div></ion-col><ion-col class='col col-3'><div class=tear [style.background-color]='t.color4'></div></ion-col></ion-row><br><br><ion-row><ion-col class='col col-3'>{{t.color1}}</ion-col><ion-col class='col col-3'>{{t.color2}}</ion-col><ion-col class='col col-3'>{{t.color3}}</ion-col><ion-col class='col col-3'>{{t.color4}}</ion-col></ion-row><ion-row><ion-col class='col col-6 gray'><h1 [style.font-family]='t.font1'>{{t.font1}}</h1></ion-col><ion-col class='col col-6 gray'><h2 [style.font-family]='t.font2'>{{t.font2}}</h2></ion-col></ion-row></ion-grid></div>";
  //
  //   // this.countToPop = this.countToPop +1;
  //   // this.navCtrl.push(SavedPage, {
  //   //   dummy:"dummy",
  //   //   dummy2:"dummy2"
  //   // });
  // }

  emailTheme(theme){
    //  let el: HTMLElement = document.getElementById("selectedEmail");
    //replace all spaces in font names with a +
      var replaced1 = theme.font1.split(' ').join('+');
      var replaced2 = theme.font2.split(' ').join('+');


      var importLink1 = "//put in FIRST line of css file <br>  @import url('https://fonts.googleapis.com/css?family=" + replaced1 + "');<br><br>";
      var importLink2 = "//put in SECOND line of css file <br>  @import url('https://fonts.googleapis.com/css?family=" + replaced2 + "');<br><br>";

      // var elementstyle1 = " //use for html element tags <br> style='font-family:" + this.font1code + ";'";
      // var elementstyle2 = " //use for html element tags <br> style='font-family:" + this.font2code + ";'";

      var cssstyle1 = " //put in css file <br> h1,h2,h3,h4,h5,h6 {font-family:" + theme.font1code + ";}";
      var cssstyle2 = " //put in css file <br> p {font-family:" + theme.font2code + ";}";
      //let emailContent = color1 + " " + color2 + " " + color3 + " " + color4;
      let emailContent = "COLORS:<br>//put in css file:<br>:root{<br>--color-one:" + theme.color1 +";<br>--color-two:" + theme.color2 +";<br>--color-three:" + theme.color3 + ";<br>--color-four:" + theme.color4 + ";<br>}<br>//to use these css variables =   background-color: var(--color-one);<br><br>FONTS:<br>" + importLink1 + "<br>" + importLink2 + "<br>" + cssstyle1 + "<br>" + cssstyle2;

      //<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&amp;lang=en" /> put in header html
      //style="font-family:{{font2code}};" use for element

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
    //this.refresh();
  }


}
