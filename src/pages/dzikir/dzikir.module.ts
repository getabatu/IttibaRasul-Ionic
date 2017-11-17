import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DzikirPage } from './dzikir';

@NgModule({
  declarations: [
    DzikirPage,
  ],
  imports: [
    IonicPageModule.forChild(DzikirPage),
  ],
})
export class DzikirPageModule {}
