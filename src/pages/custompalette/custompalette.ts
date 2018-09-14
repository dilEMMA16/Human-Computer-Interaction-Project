import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

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

  }

  navigateToHomePage() {
      this.navCtrl.pop();
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
      document.getElementById(colorcode).style.display = "inline-flex";

      //reorder selected colors
      let number = 1;
      for (let choice of this.chosenColors) {
        //let tear = choice + "splat";
       var content = document.getElementById(idOfSplat);
       //content.innerHTML  = number + "<div><span class='fa-stack fa-lg'><i class='fa fa-paw fa-stack-2x' style='transform:rotate(-96deg);color =" + choice + "!important'></i><i class='fa fa-paw fa-stack-2x'style='margin-top:8px;transform:rotate(186deg);color =" + choice + "!important'></i><i class='fa fa-paw fa-stack-2x' style='margin-top:5px;margin-left:9px;transform:rotate(56deg);color =" + choice + "!important'></i></span></div>"

        //content.innerHTML = number + "<br><div class='tear2'id='"+ choice + "tear'style='margin-right:20px;margin-left:20px;margin-top:5px;margin-bottom:30px;background-color:"+choice+"'></div>';"
        //content.innerHTML = number + "<br><div class='tear2'id='"+ choice + "tear'style='margin-right:auto; margin-left:auto;background-color:"+choice+"'></div>';"
        content.innerHTML = "<br><div class='tear2'id='"+ choice + "tear'style='margin-right:auto; margin-left:auto;background-color:"+choice+"'><p style='padding-bottom:25px;padding-left:45px;transform:rotate(225deg);color:#9c9c9c;'>" + number + "</p></div>';"

        number++;
      }


      //return
      return
    }

    if (!element.classList.contains("selected")) { //if the color is not selected
      //add  class
      element.classList.add("selected");

      //add to chosenColors array
      this.chosenColors.push(colorcode)

      //make splat display and drop hide
      let idOfSplat = colorcode + "splat";
      document.getElementById(idOfSplat).style.display = "inline-flex";
      document.getElementById(colorcode).style.display = "none";

      //reorder selected colors
      let number = 1;
      for (let choice of this.chosenColors) {
        //let tear = choice + "splat";
       var content = document.getElementById(idOfSplat);
       //content.innerHTML  = number + "<div><span class='fa-stack fa-lg'><i class='fa fa-paw fa-stack-2x' style='transform:rotate(-96deg);color =" + choice + "!important'></i><i class='fa fa-paw fa-stack-2x'style='margin-top:8px;transform:rotate(186deg);color =" + choice + "!important'></i><i class='fa fa-paw fa-stack-2x' style='margin-top:5px;margin-left:9px;transform:rotate(56deg);color =" + choice + "!important'></i></span></div>"
       //content.innerHTML = number + "<br><div class='tear2'id='"+ choice + "tear'style='margin-right:20px;margin-left:20px;margin-top:5px;margin-bottom:30px;background-color:"+choice+"'></div>';"
       //content.innerHTML = number + "<br><div class='tear2'id='"+ choice + "tear'style='margin-right:auto; margin-left:auto;background-color:"+choice+"'></div>';"
        content.innerHTML = "<br><div class='tear2'id='"+ choice + "tear'style='margin-right:auto; margin-left:auto;background-color:"+choice+"'><p style='padding-bottom:25px;padding-left:45px;transform:rotate(225deg);color:#9c9c9c;'>" + number + "</p></div>';"

        number++;
      }

      //inner html add length of chosen colors array

      //check length of chosen colors array

        //if length == 4 ---> go to font page
    }


  }



  remove(array, element) {
    const index = array.indexOf(element);

    if (index !== -1) {
        array.splice(index, 1);
    }
}





}
