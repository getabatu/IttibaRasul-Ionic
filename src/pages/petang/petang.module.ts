import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetangPage } from './petang';

@NgModule({
  declarations: [
    PetangPage,
  ],
  imports: [
    IonicPageModule.forChild(PetangPage),
  ],
})
export class PetangPageModule {}
