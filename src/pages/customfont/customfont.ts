import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { CustomPalettePage} from "../custompalette/custompalette";
import { SavedPage} from "../saved/saved";
import { EmailPage} from "../email/email";
import { FontPage} from "../font/font";
import { EmailComposer } from '@ionic-native/email-composer';
@Component({
  selector: 'page-customfont',
  templateUrl: 'customfont.html'
})
export class CustomFontPage {
  color1: any;
  color2: any;
  color3: any;
  color4: any;
  theme: any;
  font1: any;
  font2: any;
  font1code: any;
  font2code: any;
  headerfonts: any; headerfontisselected: any;
  bodyfonts: any; bodyfontisselected:any;

  constructor(public navCtrl: NavController,public navParams : NavParams) {
    this.color1 = navParams.get('color1');
    this.color2 = navParams.get('color2');
    this.color3 = navParams.get('color3');
    this.color4 = navParams.get('color4');
    this.theme = ""+navParams.get('data')+"";
    this.headerfonts = navParams.get('headerfonts');
    this.bodyfonts = navParams.get('bodyfonts');
	this.headerfontisselected = false;
	this.bodyfontisselected = false;

  }

  navigateToHomePage() {
      this.navCtrl.pop();
      this.navCtrl.pop();
  }

  navigateToPalletePage() {
    this.navCtrl.pop();

  }

  savedThemes():void{
    let element: HTMLElement = document.getElementById("headerDiv");
    if (element.classList.contains("opened")) {
        //remove classes
        element.classList.remove("opened");
      }
    let element: HTMLElement = document.getElementById("bodyDiv");
      if (element.classList.contains("opened")) {
          //remove classes
          element.classList.remove("opened");
        }
    this.navCtrl.push(SavedPage, {
      dummy:"dummy",
      dummy2:"dummy2"
    });

  }

showheaderDiv():void{
	let element: HTMLElement = document.getElementById("headerDiv");
	if (element.classList.contains("opened")) {
      //remove classes
      element.classList.remove("opened");
	  element.style.display = "none";
    if (!this.headerfontisselected){
      let element2: HTMLElement = document.getElementById("headerbutton");
      element2.style.paddingTop = "10vh";
      element2.style.paddingBottom = "11vh";
      return;
    }
	}
	else {
		element.classList.add("opened");
	  element.style.display = "block";
    let element2: HTMLElement = document.getElementById("headerbutton");
    element2.style.paddingTop = "5vh !important";
    element2.style.paddingBottom = "5vh !important";
	}
  let element2: HTMLElement = document.getElementById("headerbutton");
  element2.style.paddingTop = "5vh";
  element2.style.paddingBottom = "5vh";

}

headerfontClicked(font):void{
	let element: HTMLElement = document.getElementById("headerDiv");
	element.style.display = "none";
	this.headerfontisselected= true;
	this.font1 = font[0];
	this.font1code= font[1];
	let element1: HTMLElement = document.getElementById("showclickedheaderDiv");
	element1.style.fontFamily = font[1];
	element1.style.display = "block";
	element1.innerHTML= "<span style='font-size:1.8rem;  font-family: Josefin Slab, serif !important;'>your selected header font:</span><br>"+this.font1+"";
  let element2: HTMLElement = document.getElementById("headerbutton");
  element2.style.paddingTop = "5vh";
  element2.style.paddingBottom = "5vh";
  if (this.headerfontisselected && this.bodyfontisselected){
    let element2: HTMLElement = document.getElementById("confirmError");
	   element2.style.display = "none";
  }
}

bodyfontClicked(font):void{
	let element: HTMLElement = document.getElementById("bodyDiv");
	element.style.display = "none";
	this.bodyfontisselected= true;
	this.font2 = font[0];
	this.font2code= font[1];
	let element2: HTMLElement = document.getElementById("showclickedbodyDiv");
	element2.style.fontFamily = font[1];
	element2.style.display = "block";
	element2.innerHTML= "<span style='font-size:1.8rem; font-family: Josefin Slab, serif !important;'>your selected body font:</span><br>"+this.font2+"";
  let element3: HTMLElement = document.getElementById("bodybutton");
  element3.style.paddingTop = "5vh";
  element3.style.paddingBottom = "5vh";
  if (this.headerfontisselected && this.bodyfontisselected){
    let element2: HTMLElement = document.getElementById("confirmError");
	   element2.style.display = "none";
  }
	}



showbodyDiv():void{
	let element: HTMLElement = document.getElementById("bodyDiv");
	if (element.classList.contains("opened")) {
      //remove classes
      element.classList.remove("opened");
	  element.style.display = "none";
    if(!this.bodyfontisselected) {
      let element2: HTMLElement = document.getElementById("bodybutton");
      element2.style.paddingTop = "10vh";
      element2.style.paddingBottom = "11vh";
    }
	}
	else {
		element.classList.add("opened");
	  element.style.display = "block";
    let element2: HTMLElement = document.getElementById("bodybutton");
    element2.style.paddingTop = "5vh";
    element2.style.paddingBottom = "5vh";
	}

}

confirm():void{
	if (this.headerfontisselected && this.bodyfontisselected){
    let element: HTMLElement = document.getElementById("headerDiv");
    if (element.classList.contains("opened")) {
        //remove classes
        element.classList.remove("opened");
      }
    let element: HTMLElement = document.getElementById("bodyDiv");
      if (element.classList.contains("opened")) {
          //remove classes
          element.classList.remove("opened");
        }
	this.navCtrl.push(EmailPage, {
      'color1':this.color1,
      'color2':this.color2,
      'color3': this.color3,
      'color4': this.color4,
      'data' : this.theme,
      'font1':this.font1,
      'font2':this.font2,
      'font1code':this.font1code,
      'font2code':this.font2code

    });
	}
	else{
		let element2: HTMLElement = document.getElementById("confirmError");
	element2.style.display = "block";
	element2.innerHTML= "Please make sure you have both the header and body fonts selected!";
	}
}
}
