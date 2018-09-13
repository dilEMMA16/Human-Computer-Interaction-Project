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

    if (element.classList.contains("active")) { //if the color is currently selected
      //remove active class
      element.classList.remove("active");
      //remove from chosenColors array
      remove(this.chosenColors, colorcode);

      //return
      return
    }

    if (!element.classList.contains("active")) { //if the color is not selected
      //add active class
      element.classList.add("active");

      //add to chosenColors array
      this.chosenColors.push(colorcode)

      //inner html add length of chosen colors array
      element.innerHTML = this.chosenColors.length;

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
