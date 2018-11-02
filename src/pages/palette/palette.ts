import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { HomePage} from "../home/home";
import { FontPage} from "../font/font";
import { SavedPage} from "../saved/saved";
@Component({
  selector: 'page-palette',
  templateUrl: 'palette.html'
})

export class PalettePage {

  theme: any;
  p1: any;
  p2: any;
  p3: any;
  p4: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.theme = navParams.get('data');
    this.p1 = navParams.get('palette1');
    this.p2 = navParams.get('palette2');
    this.p3 = navParams.get('palette3');
    this.p4 = navParams.get('palette4');
  }
  savedThemes():void{
    this.navCtrl.push(SavedPage, {
      dummy:"dummy",
      dummy2:"dummy2"
    });

  }

  navigateToHomePage() {
      this.navCtrl.pop();
  }

  navigateToFontPage(chosenPalette) {

    var fontcombo1 = new Array();
    var fontcombo2= new Array();
    var fontcombo3 = new Array();
    var fontcombo4= new Array();
    var fontcombo5= new Array();

    //based on what theme is = pass in palettes
    if (this.theme.includes("sophisticated"))
    {
      fontcombo1 = ["Raleway","Roboto Slab","'Raleway', sans-serif","'Roboto Slab', serif"];
      fontcombo2 = ["Sail","Overpass","'Sail', cursive","'Overpass', sans-serif"];
      fontcombo3 = ["Space Mono","Nanum Gothic","'Space Mono', monospace","'Nanum Gothic', sans-serif"];
      fontcombo4 = ["Domine","Inconsolata","'Domine', serif","'Inconsolata', monospace"];
      fontcombo5 = ["Playfair Display","Source Sans Pro","'Playfair Display', serif","'Source Sans Pro', sans-serif"];
    }
    else if (this.theme.includes("cool"))
    {
      fontcombo1 = ["Abril Fatface","Courier New","'Abril Fatface', cursive","Courier"];
      fontcombo2 = ["Cookie","Calibri","'Cookie', cursive","Calibri"];
      fontcombo3 = ["Poiret One","EB Garamond","'Poiret One', cursive","'EB Garamond', serif"];
      fontcombo4 = ["Cabin Sketch","Nanum Gothic","'Cabin Sketch', cursive","'Nanum Gothic', sans-serif"];
      fontcombo5 = ["Merriweather","Montserrat","'Merriweather', serif","'Montserrat', sans-serif"];
    }
    else if (this.theme.includes("warm"))
    {
      fontcombo1 = ["Righteous","Roboto","'Righteous', cursive","'Roboto', sans-serif"];
      fontcombo2 = ["Passion One","Roboto Condensed","'Passion One', cursive","'Roboto Condensed', sans-serif"];
      fontcombo3 = ["Special Elite","Open Sans","'Special Elite', cursive","'Open Sans', sans-serif"];
      fontcombo4 = ["Hanalei Fill","Karla","'Hanalei Fill', cursive","'Karla', sans-serif"];
      fontcombo5 = ["Averia Libre","Montserrat","'Averia Libre', cursive","'Montserrat', sans-serif"];
    }
    else if (this.theme.includes("natural"))
    {
      fontcombo1 = ["Pacifico","Overpass","'Pacifico', cursive","'Overpass', sans-serif"];
      fontcombo2 = ["Alegreya","EB Garamond","'Alegreya', serif","'EB Garamond', serif"];
      fontcombo3 = ["Sacramento","Calibri","'Sacramento', cursive","Calibri"];
      fontcombo4 = ["IM Fell English SC","Montserrat","'IM Fell English SC', serif","'Montserrat', sans-serif"];
      fontcombo5 = ["Londrina Outline","Courier New","'Londrina Outline', cursive","Courier"];
    }
    else if (this.theme.includes("rustic"))
    {
      fontcombo1 = ["Inconsolata","Inconsolata","'Inconsolata', monospace","'Inconsolata', monospace"];
      fontcombo2 = ["Bitter","PT Sans","'Bitter', serif","'PT Sans', sans-serif"];
      fontcombo3 = ["Oswald","EB Garamond","'Oswald', sans-serif","'EB Garamond', serif"];
      fontcombo4 = ["Fredericka the Great","Montserrat","'Fredericka the Great', cursive","'Montserrat', sans-serif"];
      fontcombo5 = ["Barrio","Calibri","'Barrio', cursive","Calibri"];
    }
    else if (this.theme.includes("tech"))
    {
      fontcombo1 = ["Roboto Mono","Roboto Condensed","'Roboto Mono', monospace","'Roboto Condensed', sans-serif"];
      fontcombo2 = ["Libre Barcode","Inconsolata","'Libre Barcode 39 Text', cursive","'Inconsolata', monospace"];
      fontcombo3 = ["Ubuntu Mono","Nanum Gothic","'Ubuntu Mono', monospace","'Nanum Gothic', sans-serif"];
      fontcombo4 = ["Zilla Slab","Courier New","'Zilla Slab Highlight', cursive","Courier"];
      fontcombo5 = ["Monofett","Electrolize","'Monofett', cursive","'Electrolize', sans-serif"];
    }
    else if (this.theme.includes("wellbeing"))
    {
      fontcombo1 = ["Archivo Black","Karla","'Archivo Black', sans-serif","'Karla', sans-serif"];
      fontcombo2 = ["Oleo Script","Overpass","'Oleo Script', cursive","'Overpass', sans-serif"];
      fontcombo3 = ["Shrikhand","Open Sans","'Shrikhand', cursive","'Open Sans', sans-serif"];
      fontcombo4 = ["Lily Script One","Montserrat","'Lily Script One', cursive","'Montserrat', sans-serif"];
      fontcombo5 = ["Molengo","Calibri","'Molengo', sans-serif","Calibri"];
    }
    else if (this.theme.includes("fall"))
    {
      fontcombo1 = ["Arvo","Lato","'Arvo', serif","'Lato', sans-serif"];
      fontcombo2 = ["Josefin Slab","Josefin Sans","'Josefin Slab', serif","'Josefin Sans', sans-serif"];
      fontcombo3 = ["Lustria","Roboto Condensed","'Lustria', serif","'Roboto Condensed', sans-serif"];
      fontcombo4 = ["Nixie One","Nanum Gothic","'Nixie One', cursive","'Nanum Gothic', sans-serif"];
      fontcombo5 = ["Walter Turncoat","Kreon","'Walter Turncoat', cursive","'Kreon', serif"];
    }
    else if (this.theme.includes("summer"))
    {
      fontcombo1 = ["Baloo Tammudu","Calibri","'Baloo Tammudu', cursive","Calibri"];
      fontcombo2 = ["Lobster","EB Garamond","'Lobster', cursive","'EB Garamond', serif"];
      fontcombo3 = ["Fugaz One","PT Sans","'Fugaz One', cursive","'PT Sans', sans-serif"];
      fontcombo4 = ["Frijole","Karla","'Frijole', cursive","'Karla', sans-serif"];
      fontcombo5 = ["Ovo","Muli","'Ovo', serif","'Muli', sans-serif"];
    }
    else if (this.theme.includes("bold"))
    {
      fontcombo1 = ["Ruslan Display","EB Garamond","'Ruslan Display', cursive","'EB Garamond', serif"];
      fontcombo2 = ["Monoton","Electrolize","'Monoton', cursive","'Electrolize', sans-serif"];
      fontcombo3 = ["VT323","PT Sans","'VT323', monospace","'PT Sans', sans-serif"];
      fontcombo4 = ["Bungee Inline","Montserrat","'Bungee Inline', cursive","'Montserrat', sans-serif"];
      fontcombo5 = ["Rye","Roboto Slab","'Rye', cursive","'Roboto Slab', serif"];
    }



    this.navCtrl.push(FontPage, {
      'data' : this.theme,
      'color1' : chosenPalette[0],
       'color2' : chosenPalette[1],
       'color3' : chosenPalette[2],
       'color4' : chosenPalette[3],
       'font1' : fontcombo1,
       'font2' : fontcombo2,
       'font3' : fontcombo3,
       'font4' : fontcombo4,
       'font5' : fontcombo5

    });
  }








}
