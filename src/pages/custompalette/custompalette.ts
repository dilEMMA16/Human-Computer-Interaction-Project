import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { EmailPage} from "../email/email";
import { SavedPage} from "../saved/saved";
import { CustomFontPage} from "../customfont/customfont";
@Component({
  selector: 'page-custompalette',
  templateUrl: 'custompalette.html'
})
export class CustomPalettePage {

  reds: any;
  browns: any;
  blues: any;
  greens: any;
  yellows: any;
  creams: any;
  purples: any;
  oranges: any;
  pinks: any;
  grays: any;
  chosenColors: any;
  headerfonts: any;
  bodyfonts : any;

  constructor(public navCtrl: NavController, public navParams : NavParams) {
    this.reds = navParams.get('reds');
    this.browns = navParams.get('browns');
    this.blues = navParams.get('blues');
    this.greens = navParams.get('greens');
    this.yellows = navParams.get('yellows');
    this.creams = navParams.get('creams');
    this.purples = navParams.get('purples');
    this.oranges = navParams.get('oranges');
    this.pinks = navParams.get('pinks');
    this.grays = navParams.get('grays');
    this.chosenColors = new Array();
    this.headerfonts = navParams.get('headerfonts');
    this.bodyfonts = navParams.get('bodyfonts');
  }


  navigateToHomePage() {
      this.navCtrl.pop();
  }



  navigateToCustomFontPage() {
    this.navCtrl.push(CustomFontPage, {
      'data' : 'assets/imgs/custom.png',
      'color1' : this.chosenColors[0],
      'color2' : this.chosenColors[1],
      'color3' : this.chosenColors[2],
      'color4' : this.chosenColors[3],
      'font1' : "Calibri",
      'font2' : "Times New Roman",
      'font1code' :'Calibri',
      'font2code' : 'Times New Roman',
      'headerfonts' : this.headerfonts,
      'bodyfonts' : this.bodyfonts
    });
  }

  navigateToEmailPage() {
    this.navCtrl.push(EmailPage, {
      'data' : 'assets/imgs/custom.png',
      'color1' : this.chosenColors[0],
      'color2' : this.chosenColors[1],
      'color3' : this.chosenColors[2],
      'color4' : this.chosenColors[3],
      'font1' : "Calibri",
      'font2' : "Times New Roman",
      'font1code' :'Calibri',
      'font2code' : 'Times New Roman'

    });

  }



  savedThemes():void{
    this.navCtrl.push(SavedPage, {
      test:"test"
    });

  }

  selectColor(colorcode)  {

    //check if element has class inactive or active = toggle to whatever one
    let element: HTMLElement = document.getElementById(colorcode);

    if (element.classList.contains("selected")) { //if the color is currently selected
      //remove classes
      element.classList.remove("selected");

      //remove from chosenColors array
      this.remove(this.chosenColors, colorcode);

      //make splat not display and drop show
      let idOfSplat = colorcode + "splat";
      document.getElementById(idOfSplat).style.display = "none";
      document.getElementById(colorcode).style.display = "block";

      //reorder selected colors
      let number = 1;
      for (let choice of this.chosenColors) {
        var content = document.getElementById(idOfSplat);
        content.innerHTML = "<br><div class='tear2'id='"+ choice + "tear'style='margin-right:auto; margin-left:auto;background-color:"+choice+"'><p id='" + idOfSplat +"p' style='padding-bottom:25px;padding-left:45px;transform:rotate(225deg);color:#9c9c9c;'></p></div>';"
        var content2 = document.getElementById(choice + "splat"+"p");
        content2.innerHTML = number +"";
        number++;
      }

      //if length == 4 ---> go to font page
      if (this.chosenColors.length == 4) {
        this.navigateToCustomFontPage();
    }
      return
    }

    if (!element.classList.contains("selected")) { //if the color is not selected
      //add  class
      element.classList.add("selected");

      //add to chosenColors array
      this.chosenColors.push(colorcode)

      //make splat display and drop hide
      let idOfSplat = colorcode + "splat";
      document.getElementById(idOfSplat).style.display = "block";
      document.getElementById(colorcode).style.display = "none";

      //reorder selected colors
      let number = 1;
      for (let choice of this.chosenColors) {
        var content = document.getElementById(idOfSplat);
        content.innerHTML = "<br><div class='tear2'id='"+ choice + "tear'style='margin-right:auto; margin-left:auto;background-color:"+choice+"'><p id='" + idOfSplat +"p' style='padding-bottom:25px;padding-left:45px;transform:rotate(225deg);color:#9c9c9c;'>" + "</p></div>"
        var content2 = document.getElementById(choice + "splat"+"p");
        content2.innerHTML = number +"";
        number++;
      }
    }

    //if length == 4 ---> go to font page
    if (this.chosenColors.length == 4) {
      this.navigateToCustomFontPage();
  }

  }




  remove(array, element) {
    const index = array.indexOf(element);

    if (index !== -1) {
        array.splice(index, 1);
    }
}





}
