import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItSkillsPageRoutingModule } from './it-skills-routing.module';

import { ItSkillsPage } from './it-skills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItSkillsPageRoutingModule
  ],
  declarations: [ItSkillsPage]
})
export class ItSkillsPageModule {}
