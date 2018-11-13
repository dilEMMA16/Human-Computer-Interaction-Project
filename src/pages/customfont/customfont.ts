
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
	}
	else {
		element.classList.add("opened");
	  element.style.display = "block";
	}

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
	element1.innerHTML= this.font1+"";
	
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
	element2.innerHTML= this.font2+"";

	}



showbodyDiv():void{
	let element: HTMLElement = document.getElementById("bodyDiv");
	if (element.classList.contains("opened")) { 
      //remove classes
      element.classList.remove("opened");
	  element.style.display = "none";
	}
	else {
		element.classList.add("opened");
	  element.style.display = "block";
	}
	
}

confirm():void{
	if (this.headerfontisselected && this.bodyfontisselected){
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