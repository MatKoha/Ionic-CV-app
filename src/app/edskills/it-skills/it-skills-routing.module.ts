import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItSkillsPage } from './it-skills.page';

const routes: Routes = [
  {
    path: '',
    component: ItSkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItSkillsPageRoutingModule {}
