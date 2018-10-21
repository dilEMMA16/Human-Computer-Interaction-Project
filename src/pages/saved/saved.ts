import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { HomePage} from "../home/home";
import { FontPage} from "../font/font";
import { SaveThemeProvider } from './../../providers/save-theme/save-theme';
@Component({
  selector: 'page-saved',
  templateUrl: 'saved.html'
})
export class SavedPage {

savedThemes: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public saveThemeProvider: SaveThemeProvider) {
    this.saveThemeProvider.getAllSavedThemes().then(result => {
      console.log("local storage for themes on saved page" + result);
      this.savedThemes = result;
    });
    console.log(this.savedThemes);
  }


  navigateToHomePage() {
      this.navCtrl.pop();
  }



}
