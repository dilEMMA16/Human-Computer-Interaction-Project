
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PalettePage} from "../palette/palette";
import { CustomPalettePage} from "../custompalette/custompalette";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {

  }

  customThemeChosen(): void {
    var blues = ["#5d667b","#55707b","#45547b","#5765b0","#39457b","#236c75","#34a0ae","#040f7b","#6dbdc9","#7ab2b9","#678997","#80a9b0","#6683d0","#82bdd3","#33377b","#61808f","#64c8c6","#121f7b","#a4afe3","#477aed","#7baefb","#5a717b","#60d1d3","#477aed","#2360bf","#6f9df8","#aacaf4","#6f7fbe","#60b5c1","#4d687b","#7698b8","#2badb8","#1f40b8"]
    var browns= ["#baa994","#968663","#7b6156","#7b6972","#7b6e58","#7b6a72","#baa994","#594446","#bca67f","#67697b","#7b4600","#7b625e","#bf834e","#7b403b","#7b5a43","#7b4424","#b7866d","#7b615b","#7b4600","#7b5650"]
    var greens = ["#617b66","#848b8c","#727b63","#6c7b4c","#c5be8b","#848b8c","#8cae87","#7acdad","#d5ef9a","#afc185","#5c7b69","#6c818f","#74ab86","#2e717b","#589a1f","#157b5c","#617b62","#787b39","#acd247","#83d780","#68ad74","#cae67c","#caeff4","#61c277","#499259","#acd247","#647a7b","#b8b14e","#77b800"]
    var yellows = ["#d3af86","#e3a83e","#b79533","#fdcb73","#c29a50","#d9a42e","#f8e997","#bfb06b","#d6a149","#ffb822","#d9a42e","#f8e997","#ffbd4a","#feba08","#dbff6b"]
    var creams = ["#e3d6cc","#c9beb5","#c9beb5","#e3d6cc","#cdb98f","#e1d9d3"]
    var purples = ["#918696","#9a82ae","#524c7b","#a275a5","#b958c0","#3e427d","#57017b","#584e9a","#7a3a7b","#6f467b","#4b407b","#7b1877","#b760e6","#dfd1ef","#5546b8","#9e38b8","#575db8","#cb07bd"]
    var oranges = ["#bf834e","#8e6350","#eb7244","#e98441","#cd745f","#ee9547","#d3725b","#cd7746","#ba6a00","#eb8119","#ab6141","#ba6a00","#e8926e","#ffab37","#ee9547","#ee9547"]
    var reds = ["#c94300","#7b1416","#d7000b","#8c412a","#e76753","#ea4627","#b80716"]
    var pinks = ["#7b536e","#d9b1b0","#f3bbaa","#a16c6a","#745a7b","#e76753","#e8926e","#7b3446","#ff9aac","#ef447a","#cdaad2","#b83e81"]
    var grays = ["#c5bde1","#a8a8a8","#78787b"]



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
       'grays' : grays

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

}
// =======
// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
// import { PalettePage} from "../palette/palette";
// import { CustomPalettePage} from "../custompalette/custompalette";
//
// @Component({
//   selector: 'page-home',
//   templateUrl: 'home.html'
// })
// export class HomePage {
//
//
//   constructor(public navCtrl: NavController) {
//
//   }
//
//   customThemeChosen(): void {
//     var blues = ["#5d667b","#55707b","#45547b","#5765b0","#39457b","#236c75","#34a0ae","#040f7b","#6dbdc9","#7ab2b9","#678997","#80a9b0","#6683d0","#82bdd3","#33377b","#61808f","#64c8c6","#121f7b","#a4afe3","#477aed","#7baefb","#5a717b","#60d1d3","#477aed","#2360bf","#6f9df8","#aacaf4","#6f7fbe","#60b5c1","#4d687b","#7698b8","#2badb8","#1f40b8"]
//     var browns= ["#baa994","#968663","#7b6156","#7b6972","#7b6e58","#7b6a72","#baa994","#594446","#bca67f","#67697b","#7b4600","#7b625e","#bf834e","#7b403b","#7b5a43","#7b4424","#b7866d","#7b615b","#7b4600","#7b5650"]
//     var greens = ["#617b66","#848b8c","#727b63","#6c7b4c","#c5be8b","#848b8c","#8cae87","#7acdad","#d5ef9a","#afc185","#5c7b69","#6c818f","#74ab86","#2e717b","#589a1f","#157b5c","#617b62","#787b39","#acd247","#83d780","#68ad74","#cae67c","#caeff4","#61c277","#499259","#acd247","#647a7b","#b8b14e","#77b800"]
//     var yellows = ["#d3af86","#e3a83e","#b79533","#fdcb73","#c29a50","#d9a42e","#f8e997","#bfb06b","#d6a149","#ffb822","#d9a42e","#f8e997","#ffbd4a","#feba08","#dbff6b"]
//     var creams = ["#e3d6cc","#c9beb5","#c9beb5","#e3d6cc","#cdb98f","#e1d9d3"]
//     var purples = ["#918696","#9a82ae","#524c7b","#a275a5","#b958c0","#3e427d","#57017b","#584e9a","#7a3a7b","#6f467b","#4b407b","#7b1877","#b760e6","#dfd1ef","#5546b8","#9e38b8","#575db8","#cb07bd"]
//     var oranges = ["#bf834e","#8e6350","#eb7244","#e98441","#cd745f","#ee9547","#d3725b","#cd7746","#ba6a00","#eb8119","#ab6141","#ba6a00","#e8926e","#ffab37","#ee9547","#ee9547"]
//     var reds = ["#c94300","#7b1416","#d7000b","#8c412a","#e76753","#ea4627","#b80716"]
//     var pinks = ["#7b536e","#d9b1b0","#f3bbaa","#a16c6a","#745a7b","#e76753","#e8926e","#7b3446","#ff9aac","#ef447a","#cdaad2","#b83e81"]
//     var grays = ["#c5bde1","#a8a8a8","#78787b"]
//
//
//
//     this.navCtrl.push(CustomPalettePage, {
//       'blues' : blues,
//        'browns' : browns,
//        'greens' : greens,
//        'yellows' : yellows,
//        'creams' : creams,
//        'purples' : purples,
//        'oranges' : oranges,
//        'reds' : reds,
//        'pinks' : pinks,
//        'grays' : grays
//
//     });
//
//
//   }
//
//   navigateToPalettePage(theme): void {
//
//     var palette1:string[];
//     var palette2:string[]
//     var palette3:string[]
//     var palette4:string[]
//
//
//
//
//     //based on what theme is = pass in palettes
//     if (theme.includes("natural")) //natural
//     {
//       palette1 = ["#baa994","#968663","#5d667b","#617b66"];
//       palette2 = ["#7b6156","#e3d6cc","#848b8c","#c9beb5"];
//       palette3 = ["#918696","#7b6972","#727b63","#d3af86"];
//       palette4 = ["#617b66","#c9beb5","#d3af86","#7b6e58"];
//     }
//     if (theme.includes("summer")) //summer
//     {
//       palette1 = ["#60d1d3","#477aed","#ef447a","#cae67c"];
//       palette2 = ["#acd247","#e76753","#e8926e","#f8e997"];
//       palette3 = ["#b760e6","#68ad74","#6f9df8","#cae67c"];
//       palette4 = ["#ef447a","#ffab37","#6f9df8","#cae67c"];
//     }
//     if (theme.includes("fall")) //fall
//     {
//       palette1 = ["#4b407b","#5a717b","#787b39","#7b4424"];
//       palette2 = ["#7b5a43","#787b39","#8c412a","#ba6a00"];
//       palette3 = ["#787b39","#7b4424","#d9a42e","#cdb98f"];
//       palette4 = ["#7b615b","#7b4600","#ba6a00","#cdb98f"];
//     }
//     if (theme.includes("tech")) //tech
//     {
//       palette1 = ["#263c75","#34a0ae","#7acdad","#a8a8a8"];
//       palette2 = ["#040f7b","#eb7244","#6dbdc9","#b958c0"];
//       palette3 = ["#7ab2b9","#d5ef9a","#fdcb73","#e98441"];
//       palette4 = ["#678997","#a275a5","#cd745f","#f3bbaa"];
//     }
//     if (theme.includes("warm")) //warm
//     {
//       palette1 = ["#d9a42e","#e76753","#ba6a00","#7b4600"];
//       palette2 = ["#e8926e","#7b625e","#bf834e","#eb8119"];
//       palette3 = ["#f8e997","#bfb06b","#d6a149","#7b403b"];
//       palette4 = ["#c94300","#7b1416","#d7000b","#ffb822"];
//     }
//     if (theme.includes("sophisticated")) //sophisticated
//     {
//       palette1 = ["#ee9547","#d3725b","#6683d0","#82bdd3"];
//       palette2 = ["#afc185","#80a9b0","#3e427d","#baa994"];
//       palette3 = ["#cd7746","#594446","#bca67f","#a16c6a"];
//       palette4 = ["#c29a50","#e3d6cc","#33377b","#61808f"];
//     }
//     if (theme.includes("wellbeing")) //wellbeing
//     {
//       palette1 = ["#caeff4","#aacaf4","#cdaad2","#dfd1ef"];
//       palette2 = ["#caeff4","#6f7fbe","#ee9547","#647a7b"];
//       palette3 = ["#dfd1ef","#60b5c1","#4d687b","#647a7b"];
//       palette4 = ["#ffbd4a","#acd247","#ee9547","#4d687b"];
//     }
//     if (theme.includes("bold")) //bold
//     {
//       palette1 = ["#ee9547","#5546b8","#b83e81","#4aae4e"];
//       palette2 = ["#ee9547","#5546b8","#9e38b8","#7698b8"];
//       palette3 = ["#2badb8","#ea4627","#b80716","#575db8"];
//       palette4 = ["#7698b8","#dbff6b","#575db8","#cb07bd"];
//     }
//     if (theme.includes("cool")) {
//       palette1 = ["#64c8c6","#5c7b69","#6c818f","#74ab86"];
//       palette2 = ["#121g7b","#a4afe3","#745a7b","#2e717b"];
//       palette3 = ["#a4afe3","#57017b","#584e9a","#2e717b"];
//       palette4 = ["#74ab86","#2e717b","#584e9a","#7baefb"];
//     }
//     if (theme.includes("rustic")) {
//       palette1 = ["#bf834e","#7b536e","#55707b","#6c7b4c"];
//       palette2 = ["#c5bde1","#c5be8b","#5765b0","#c9beb5"];
//       palette3 = ["#7b536e","#c5be8b","#848b8c","#8e6350"];
//       palette4 = ["#d9b1b0","#848b8c","#5765b0","#6c7b4c"];
//     }
//
//
//    this.navCtrl.push(PalettePage, {
//      'data' : theme,
//      'palette1' : palette1,
//       'palette2' : palette2,
//       'palette3' : palette3,
//       'palette4' : palette4
//
//    });
// }
//
// }
// >>>>>>> ae28ee429d8b33d1a53fc6b6265df2434a56a54d
