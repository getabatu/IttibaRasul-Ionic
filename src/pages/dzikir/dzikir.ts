import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { PagiPage } from "../pagi/pagi";
import { PetangPage } from "../petang/petang";

@Component({
  selector: 'page-dzikir',
  templateUrl: 'dzikir.html',
})
export class DzikirPage {

  constructor(public navCtrl: NavController) { }
  
    pagi(){
        this.navCtrl.push(PagiPage);
    
      }
    petang(){
      this.navCtrl.push(PetangPage);
   
    }

}
