
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PalettePage} from "../palette/palette";
import { CustomPalettePage} from "../custompalette/custompalette";
import { SavedPage} from "../saved/saved";
import { RandomEmailPage} from "../randomemail/randomemail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {

  }

  savedThemes():void{
    this.navCtrl.push(SavedPage, {
      test:"test"
    });

  }

  customThemeChosen(): void {
    var blues = ["#5d667b","#45547b","#5765b0","#39457b","#236c75","#34a0ae","#040f7b","#6dbdc9","#7ab2b9","#678997","#80a9b0","#6683d0","#82bdd3","#33377b","#61808f","#64c8c6","#121f7b","#a4afe3","#477aed","#7baefb","#5a717b","#2360bf","#6f9df8","#aacaf4","#6f7fbe","#60b5c1","#4d687b","#7698b8","#2badb8","#1f40b8"]
    var browns= ["#968663","#7b6156","#7b6972","#7b6e58","#7b6a72","#baa994","#594446","#bca67f","#67697b","#7b4600","#7b625e","#7b403b","#7b5a43","#7b4424","#b7866d","#7b615b","#7b5650"]
    var greens = ["#617b66","#848b8c","#727b63","#6c7b4c","#c5be8b","#848b8c","#8cae87","#7acdad","#d5ef9a","#afc185","#5c7b69","#6c818f","#74ab86","#2e717b","#589a1f","#157b5c","#617b62","#787b39","#acd247","#83d780","#68ad74","#cae67c","#caeff4","#61c277","#499259","#647a7b","#b8b14e","#77b800"]
    var yellows = ["#d3af86","#e3a83e","#b79533","#fdcb73","#c29a50","#d9a42e","#f8e997","#bfb06b","#d6a149","#ffb822","#ffbd4a","#feba08","#dbff6b"]
    var creams = ["#e3d6cc","#c9beb5","#e3d6cc","#cdb98f","#e1d9d3"]
    var purples = ["#918696","#9a82ae","#524c7b","#a275a5","#b958c0","#3e427d","#57017b","#584e9a","#7a3a7b","#6f467b","#4b407b","#7b1877","#b760e6","#dfd1ef","#5546b8","#9e38b8","#575db8","#cb07bd"]
    var oranges = ["#bf834e","#8e6350","#eb7244","#e98441","#cd745f","#ee9547","#d3725b","#cd7746","#eb8119","#ab6141","#ba6a00","#e8926e","#ffab37"]
    var reds = ["#c94300","#7b1416","#d7000b","#8c412a","#e76753","#ea4627","#b80716"]
    var pinks = ["#7b536e","#d9b1b0","#f3bbaa","#a16c6a","#745a7b","#e76753","#e8926e","#7b3446","#ff9aac","#ef447a","#cdaad2","#b83e81"]
    var grays = ["#c5bde1","#a8a8a8","#78787b"]


    //Fonts
    var h1 = ["Raleway","'Raleway', sans-serif"];
    var h2 = ["Sail","'Sail', cursive"];
    var h3 = ["Space Mono","'Space Mono', monospace"];
    var h4 = ["Domine","'Domine', serif"];
    var h5 = ["Playfair Display","'Playfair Display', serif"];
    var h6 = ["Abril Fatface","'Abril Fatface', cursive"];
    var h7 = ["Cookie","'Cookie', cursive"];
    var h8 = ["Poiret One","'Poiret One', cursive"];
    var h9 = ["Cabin Sketch","'Cabin Sketch', cursive"];
    var h10 = ["Merriweather","'Merriweather', serif"];
    var h11 = ["Righteous","'Righteous', cursive"];
    var h12 = ["Passion One","'Passion One', cursive"];
    var h13 = ["Special Elite","'Special Elite', cursive"];
    var h14 = ["Hanalei Fill","'Hanalei Fill', cursive"];
    var h15 = ["Averia Libre","'Averia Libre', cursive"];
    var h16 =  ["Pacifico","'Pacifico', cursive"];
    var h17 = ["Alegreya","'Alegreya', serif"];
    var h18 =  ["Sacramento","'Sacramento', cursive"];
    var h19 = ["IM Fell English SC","'IM Fell English SC', serif"];
    var h20 = ["Londrina Outline","'Londrina Outline', cursive"];
    var h21 = ["Inconsolata","'Inconsolata', monospace"];
    var h22 = ["Bitter","'Bitter', serif"];
    var h23 = ["Oswald","'Oswald', sans-serif"];
    var h24 = ["Fredericka the Great","'Fredericka the Great', cursive"];
    var h25 = ["Barrio","'Barrio', cursive"];
    var h26 = ["Roboto Mono","'Roboto Mono', monospace"];
    var h27 = ["Libre Barcode","'Libre Barcode 39 Text', cursive"];
    var h28 = ["Ubuntu Mono","'Ubuntu Mono', monospace"];
    var h29 = ["Zilla Slab","'Zilla Slab Highlight', cursive"];
    var h30 = ["Monofett","'Monofett', cursive"];
    var h31 = ["Archivo Black","'Archivo Black', sans-serif"];
    var h32 = ["Oleo Script","'Oleo Script', cursive"];
    var h33 = ["Shrikhand","'Shrikhand', cursive"];
    var h34 = ["Lily Script One","'Lily Script One', cursive"];
    var h35 = ["Molengo","'Molengo', sans-serif"];
    var h36 =  ["Arvo","'Arvo', serif"];
    var h37 = ["Josefin Slab","'Josefin Slab', serif"];
    var h38 =  ["Lustria","'Lustria', serif"];
    var h39 = ["Nixie One","'Nixie One', cursive"];
    var h40 = ["Walter Turncoat","'Walter Turncoat', cursive"];
    var h41 = ["Baloo Tammudu","'Baloo Tammudu', cursive"];
    var h42 = ["Lobster","'Lobster', cursive"];
    var h43 = ["Fugaz One","'Fugaz One', cursive"];
    var h44 =  ["Frijole","'Frijole', cursive"];
    var h45 =  ["Ovo","'Ovo', serif"];
    var h46 = ["Ruslan Display","'Ruslan Display', cursive"];
    var h47 = ["Monoton","'Monoton', cursive"];
    var h48 = ["VT323","'VT323', monospace"];
    var h49 = ["Bungee Inline","'Bungee Inline', cursive"];
    var h50 = ["Rye","'Rye', cursive"];

    var headerfonts = [h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,h14,h15,h16,h17,h18,h19,h20,h21,h22,h23,h24,h25,h26,h27,h28,h29,h30,h31,h32,h33,h34,h35,h36,h37,h38,h39,h40,h41,h42,h43,h44,h45,h46,h47,h48,h49,h50];


    var b1 = ["Roboto Slab","'Roboto Slab', serif"];
    var b2 = ["Overpass","'Overpass', sans-serif"];
    var b3 = ["Nanum Gothic","'Nanum Gothic', sans-serif"];
    var b4 = ["Inconsolata","'Inconsolata', monospace"];
    var b5 = ["Source Sans Pro","'Source Sans Pro', sans-serif"];
    var b6 = ["Courier New","Courier"];
    var b7 = ["Calibri","Calibri"];
    var b8 = ["EB Garamond","'EB Garamond', serif"];
    var b9 = ["Merriweather","'Montserrat', sans-serif"];
    var b10 = ["Roboto","'Roboto', sans-serif"];
    var b11 = ["Roboto Condensed","'Roboto Condensed', sans-serif"];
    var b12 = ["Karla", "'Karla', sans-serif"];
    var b13 = ["PT Sans","'PT Sans', sans-serif"];
    var b14 = ["Electrolize","'Electrolize', sans-serif"];
    var b15 = ["Open Sans", "'Open Sans', sans-serif"];
    var b16 =  ["Lato","'Lato', sans-serif"];
    var b17 = ["Josefin Sans","'Josefin Sans', sans-serif"];
    var b18 = ["Kreon","'Kreon', serif"];
    var b19 =  ["Muli","'Muli', sans-serif"];


    var bodyfonts = [b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19];



    this.navCtrl.push(CustomPalettePage, {
      'blues' : blues,
       'browns' : browns,
       'greens' : greens,
       'yellows' : yellows,
       'creams' : creams,
       'purples' : purples,
       'oranges' : oranges,
       'reds' : reds,
       'pinks' : pinks,
       'grays' : grays,
       'theme': 'assets/imgs/custom.png',
       'headerfonts':headerfonts,
       'bodyfonts':bodyfonts

    });


  }

  navigateToPalettePage(theme): void {

    var palette1:string[];
    var palette2:string[]
    var palette3:string[]
    var palette4:string[]




    //based on what theme is = pass in palettes
    if (theme.includes("natural")) //natural
    {
      palette1 = ["#baa994","#968663","#5d667b","#617b66"];
      palette2 = ["#7b6156","#e3d6cc","#848b8c","#c9beb5"];
      palette3 = ["#918696","#7b6972","#727b63","#d3af86"];
      palette4 = ["#617b66","#c9beb5","#d3af86","#7b6e58"];
    }
    if (theme.includes("summer")) //summer
    {
      palette1 = ["#60d1d3","#477aed","#ef447a","#cae67c"];
      palette2 = ["#acd247","#e76753","#e8926e","#f8e997"];
      palette3 = ["#b760e6","#68ad74","#6f9df8","#cae67c"];
      palette4 = ["#ef447a","#ffab37","#6f9df8","#cae67c"];
    }
    if (theme.includes("fall")) //fall
    {
      palette1 = ["#4b407b","#5a717b","#787b39","#7b4424"];
      palette2 = ["#7b5a43","#787b39","#8c412a","#ba6a00"];
      palette3 = ["#787b39","#7b4424","#d9a42e","#cdb98f"];
      palette4 = ["#7b615b","#7b4600","#ba6a00","#cdb98f"];
    }
    if (theme.includes("tech")) //tech
    {
      palette1 = ["#263c75","#34a0ae","#7acdad","#a8a8a8"];
      palette2 = ["#040f7b","#eb7244","#6dbdc9","#b958c0"];
      palette3 = ["#7ab2b9","#d5ef9a","#fdcb73","#e98441"];
      palette4 = ["#678997","#a275a5","#cd745f","#f3bbaa"];
    }
    if (theme.includes("warm")) //warm
    {
      palette1 = ["#d9a42e","#e76753","#ba6a00","#7b4600"];
      palette2 = ["#e8926e","#7b625e","#bf834e","#eb8119"];
      palette3 = ["#f8e997","#bfb06b","#d6a149","#7b403b"];
      palette4 = ["#c94300","#7b1416","#d7000b","#ffb822"];
    }
    if (theme.includes("sophisticated")) //sophisticated
    {
      palette1 = ["#ee9547","#d3725b","#6683d0","#82bdd3"];
      palette2 = ["#afc185","#80a9b0","#3e427d","#baa994"];
      palette3 = ["#cd7746","#594446","#bca67f","#a16c6a"];
      palette4 = ["#c29a50","#e3d6cc","#33377b","#61808f"];
    }
    if (theme.includes("wellbeing")) //wellbeing
    {
      palette1 = ["#caeff4","#aacaf4","#cdaad2","#dfd1ef"];
      palette2 = ["#caeff4","#6f7fbe","#ee9547","#647a7b"];
      palette3 = ["#dfd1ef","#60b5c1","#4d687b","#647a7b"];
      palette4 = ["#ffbd4a","#acd247","#ee9547","#4d687b"];
    }
    if (theme.includes("bold")) //bold
    {
      palette1 = ["#ee9547","#5546b8","#b83e81","#4aae4e"];
      palette2 = ["#ee9547","#5546b8","#9e38b8","#7698b8"];
      palette3 = ["#2badb8","#ea4627","#b80716","#575db8"];
      palette4 = ["#7698b8","#dbff6b","#575db8","#cb07bd"];
    }
    if (theme.includes("cool")) {
      palette1 = ["#64c8c6","#5c7b69","#6c818f","#74ab86"];
      palette2 = ["#121g7b","#a4afe3","#745a7b","#2e717b"];
      palette3 = ["#a4afe3","#57017b","#584e9a","#2e717b"];
      palette4 = ["#74ab86","#2e717b","#584e9a","#7baefb"];
    }
    if (theme.includes("rustic")) {
      palette1 = ["#bf834e","#7b536e","#55707b","#6c7b4c"];
      palette2 = ["#c5bde1","#c5be8b","#5765b0","#c9beb5"];
      palette3 = ["#7b536e","#c5be8b","#848b8c","#8e6350"];
      palette4 = ["#d9b1b0","#848b8c","#5765b0","#6c7b4c"];
    }


   this.navCtrl.push(PalettePage, {
     'data' : theme,
     'palette1' : palette1,
      'palette2' : palette2,
      'palette3' : palette3,
      'palette4' : palette4

   });
 }

 randomThemeChosen() {

   var blues = ["#5d667b","#45547b","#5765b0","#39457b","#236c75","#34a0ae","#040f7b","#6dbdc9","#7ab2b9","#678997","#80a9b0","#6683d0","#82bdd3","#33377b","#61808f","#64c8c6","#121f7b","#a4afe3","#477aed","#7baefb","#5a717b","#2360bf","#6f9df8","#aacaf4","#6f7fbe","#60b5c1","#4d687b","#7698b8","#2badb8","#1f40b8"]
   var browns= ["#968663","#7b6156","#7b6972","#7b6e58","#7b6a72","#baa994","#594446","#bca67f","#67697b","#7b4600","#7b625e","#7b403b","#7b5a43","#7b4424","#b7866d","#7b615b","#7b5650"]
   var greens = ["#617b66","#848b8c","#727b63","#6c7b4c","#c5be8b","#848b8c","#8cae87","#7acdad","#d5ef9a","#afc185","#5c7b69","#6c818f","#74ab86","#2e717b","#589a1f","#157b5c","#617b62","#787b39","#acd247","#83d780","#68ad74","#cae67c","#caeff4","#61c277","#499259","#647a7b","#b8b14e","#77b800"]
   var yellows = ["#d3af86","#e3a83e","#b79533","#fdcb73","#c29a50","#d9a42e","#f8e997","#bfb06b","#d6a149","#ffb822","#ffbd4a","#feba08","#dbff6b"]
   var creams = ["#e3d6cc","#c9beb5","#e3d6cc","#cdb98f","#e1d9d3"]
   var purples = ["#918696","#9a82ae","#524c7b","#a275a5","#b958c0","#3e427d","#57017b","#584e9a","#7a3a7b","#6f467b","#4b407b","#7b1877","#b760e6","#dfd1ef","#5546b8","#9e38b8","#575db8","#cb07bd"]
   var oranges = ["#bf834e","#8e6350","#eb7244","#e98441","#cd745f","#ee9547","#d3725b","#cd7746","#eb8119","#ab6141","#ba6a00","#e8926e","#ffab37"]
   var reds = ["#c94300","#7b1416","#d7000b","#8c412a","#e76753","#ea4627","#b80716"]
   var pinks = ["#7b536e","#d9b1b0","#f3bbaa","#a16c6a","#745a7b","#e76753","#e8926e","#7b3446","#ff9aac","#ef447a","#cdaad2","#b83e81"]
   var grays = ["#c5bde1","#a8a8a8","#78787b"]


   //Fonts
   var h1 = ["Raleway","'Raleway', sans-serif"];
   var h2 = ["Sail","'Sail', cursive"];
   var h3 = ["Space Mono","'Space Mono', monospace"];
   var h4 = ["Domine","'Domine', serif"];
   var h5 = ["Playfair Display","'Playfair Display', serif"];
   var h6 = ["Abril Fatface","'Abril Fatface', cursive"];
   var h7 = ["Cookie","'Cookie', cursive"];
   var h8 = ["Poiret One","'Poiret One', cursive"];
   var h9 = ["Cabin Sketch","'Cabin Sketch', cursive"];
   var h10 = ["Merriweather","'Merriweather', serif"];
   var h11 = ["Righteous","'Righteous', cursive"];
   var h12 = ["Passion One","'Passion One', cursive"];
   var h13 = ["Special Elite","'Special Elite', cursive"];
   var h14 = ["Hanalei Fill","'Hanalei Fill', cursive"];
   var h15 = ["Averia Libre","'Averia Libre', cursive"];
   var h16 =  ["Pacifico","'Pacifico', cursive"];
   var h17 = ["Alegreya","'Alegreya', serif"];
   var h18 =  ["Sacramento","'Sacramento', cursive"];
   var h19 = ["IM Fell English SC","'IM Fell English SC', serif"];
   var h20 = ["Londrina Outline","'Londrina Outline', cursive"];
   var h21 = ["Inconsolata","'Inconsolata', monospace"];
   var h22 = ["Bitter","'Bitter', serif"];
   var h23 = ["Oswald","'Oswald', sans-serif"];
   var h24 = ["Fredericka the Great","'Fredericka the Great', cursive"];
   var h25 = ["Barrio","'Barrio', cursive"];
   var h26 = ["Roboto Mono","'Roboto Mono', monospace"];
   var h27 = ["Libre Barcode","'Libre Barcode 39 Text', cursive"];
   var h28 = ["Ubuntu Mono","'Ubuntu Mono', monospace"];
   var h29 = ["Zilla Slab","'Zilla Slab Highlight', cursive"];
   var h30 = ["Monofett","'Monofett', cursive"];
   var h31 = ["Archivo Black","'Archivo Black', sans-serif"];
   var h32 = ["Oleo Script","'Oleo Script', cursive"];
   var h33 = ["Shrikhand","'Shrikhand', cursive"];
   var h34 = ["Lily Script One","'Lily Script One', cursive"];
   var h35 = ["Molengo","'Molengo', sans-serif"];
   var h36 =  ["Arvo","'Arvo', serif"];
   var h37 = ["Josefin Slab","'Josefin Slab', serif"];
   var h38 =  ["Lustria","'Lustria', serif"];
   var h39 = ["Nixie One","'Nixie One', cursive"];
   var h40 = ["Walter Turncoat","'Walter Turncoat', cursive"];
   var h41 = ["Baloo Tammudu","'Baloo Tammudu', cursive"];
   var h42 = ["Lobster","'Lobster', cursive"];
   var h43 = ["Fugaz One","'Fugaz One', cursive"];
   var h44 =  ["Frijole","'Frijole', cursive"];
   var h45 =  ["Ovo","'Ovo', serif"];
   var h46 = ["Ruslan Display","'Ruslan Display', cursive"];
   var h47 = ["Monoton","'Monoton', cursive"];
   var h48 = ["VT323","'VT323', monospace"];
   var h49 = ["Bungee Inline","'Bungee Inline', cursive"];
   var h50 = ["Rye","'Rye', cursive"];

   var headerfonts = [h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,h14,h15,h16,h17,h18,h19,h20,h21,h22,h23,h24,h25,h26,h27,h28,h29,h30,h31,h32,h33,h34,h35,h36,h37,h38,h39,h40,h41,h42,h43,h44,h45,h46,h47,h48,h49,h50];


   var b1 = ["Roboto Slab","'Roboto Slab', serif"];
   var b2 = ["Overpass","'Overpass', sans-serif"];
   var b3 = ["Nanum Gothic","'Nanum Gothic', sans-serif"];
   var b4 = ["Inconsolata","'Inconsolata', monospace"];
   var b5 = ["Source Sans Pro","'Source Sans Pro', sans-serif"];
   var b6 = ["Courier New","Courier"];
   var b7 = ["Calibri","Calibri"];
   var b8 = ["EB Garamond","'EB Garamond', serif"];
   var b9 = ["Merriweather","'Montserrat', sans-serif"];
   var b10 = ["Roboto","'Roboto', sans-serif"];
   var b11 = ["Roboto Condensed","'Roboto Condensed', sans-serif"];
   var b12 = ["Karla", "'Karla', sans-serif"];
   var b13 = ["PT Sans","'PT Sans', sans-serif"];
   var b14 = ["Electrolize","'Electrolize', sans-serif"];
   var b15 = ["Open Sans", "'Open Sans', sans-serif"];
   var b16 =  ["Lato","'Lato', sans-serif"];
   var b17 = ["Josefin Sans","'Josefin Sans', sans-serif"];
   var b18 = ["Kreon","'Kreon', serif"];
   var b19 =  ["Muli","'Muli', sans-serif"];


   var bodyfonts = [b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19];


   //select random colors
   var colorsChosen = new Array();
   var i;
   for (i = 0; i < 4; i++) {
           var colorChoice = Math.floor((Math.random() * 10)+1); //random number between 1 - 10
           if (colorChoice == 1) {
              var hexcode = Math.floor((Math.random() * (blues.length - 1)));
              colorsChosen.push(blues[hexcode]);
          }
          else if (colorChoice == 2) {
             var hexcode = Math.floor((Math.random() * (browns.length - 1)));
             colorsChosen.push(browns[hexcode]);
         }
         else if (colorChoice == 3) {
            var hexcode = Math.floor((Math.random() * (greens.length - 1)));
            colorsChosen.push(greens[hexcode]);
        }
          else if (colorChoice == 4) {
             var hexcode = Math.floor((Math.random() * (yellows.length - 1)));
             colorsChosen.push(yellows[hexcode]);
         }
         else if (colorChoice == 5) {
            var hexcode = Math.floor((Math.random() * (creams.length - 1)));
            colorsChosen.push(creams[hexcode]);
        }
          else if (colorChoice == 6) {
             var hexcode = Math.floor((Math.random() * (purples.length - 1)));
             colorsChosen.push(purples[hexcode]);
         }
         else if (colorChoice == 7) {
              var hexcode = Math.floor((Math.random() * (oranges.length - 1)));
              colorsChosen.push(oranges[hexcode]);
          }
          else if (colorChoice == 8) {
               var hexcode = Math.floor((Math.random() * (reds.length - 1)));
               colorsChosen.push(reds[hexcode]);
           }
           else if (colorChoice == 9) {
                var hexcode = Math.floor((Math.random() * (pinks.length - 1)));
                colorsChosen.push(pinks[hexcode]);
            }
          else if (colorChoice == 10) {
                 var hexcode = Math.floor((Math.random() * (grays.length - 1)));
                 colorsChosen.push(grays[hexcode]);
             }
   }


   //select header
   var headerFontChoice = Math.floor((Math.random() * (headerfonts.length -1)));
   var headerFont = headerfonts[headerFontChoice];


   //select body
   var bodyFontChoice = Math.floor((Math.random() * (bodyfonts.length -1)));
   var bodyFont = bodyfonts[bodyFontChoice];

   //go to randomemail page = send all necessary information
   this.navCtrl.push(RandomEmailPage, {
     'color1': colorsChosen[0],
     'color2': colorsChosen[1],
     'color3': colorsChosen[2],
     'color4': colorsChosen[3],
     'data' : 'assets/imgs/random.png',
     'font1' : headerFont[0],
     'font2' : bodyFont[0],
     'font1code' : headerFont[1],
     'font2code' : bodyFont[1]
   });
 }


}
