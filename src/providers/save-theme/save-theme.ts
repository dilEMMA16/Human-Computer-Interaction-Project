
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'savedThemes';
/*
  Generated class for the SaveGameProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SaveThemeProvider {

  constructor( public storage: Storage) {
    console.log('Hello SaveThemeProvider');
  }


  saveTheme(themeName,c1,c2,c3,c4,f1,f2) {
    let theme = {name:themeName,color1:c1,color2:c2,color3:c3,color4:c4,font1:f1,font2:f2};
    return this.getAllSavedThemes().then(result => {
      console.log("local storage for save theme " + result);
      if(result) {
        result.push(theme);
        return this.storage.set(STORAGE_KEY, result);
      }else {
        return this.storage.set(STORAGE_KEY, [theme]);
      }
    });
  }

  reSaveTheme(index,themeName,c1,c2,c3,c4,f1,f2) {
    let theme = {name:themeName,color1:c1,color2:c2,color3:c3,color4:c4,font1:f1,font2:f2};
    return this.getAllSavedThemes().then(result => {
      console.log("local storage for save theme " + result);
      if (result) {
        result.splice(index, 1, theme);
        return this.storage.set(STORAGE_KEY, result);
      }
    });

    }

  deleteTheme(index) {

    return this.getAllSavedThemes().then(result => {
      if (result) {
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
        }

      });
  }



  getAllSavedThemes() {
    return this.storage.ready().then(() => {
      return this.storage.get(STORAGE_KEY);
    });

    }

    getAllSavedThemesArray() {
      let savedThemes = new Array();
      this.getAllSavedThemes().then(result => {
        savedThemes = result;
        console.log("local storage gave " + result);
        return savedThemes;
    });

      }


}
