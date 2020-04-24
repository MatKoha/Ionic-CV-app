import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdskillsPageRoutingModule } from './edskills-routing.module';

import { EdskillsPage } from './edskills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdskillsPageRoutingModule
  ],
  declarations: [EdskillsPage]
})
export class EdskillsPageModule {}
