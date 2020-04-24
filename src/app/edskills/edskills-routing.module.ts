import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EdskillsPage } from './edskills.page';

const routes: Routes = [
  {
    path: '',
    component: EdskillsPage,
    children: [
      {
        path: 'education',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./education/education.module').then(m => m.EducationPageModule)
          }
        ]
      },
      {
        path: 'it-skills',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./it-skills/it-skills.module').then(m => m.ItSkillsPageModule)
          }
        ]
      },
      {
        path: 'other',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./other/other.module').then(m => m.OtherPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'edskills/education',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'edskills/education',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdskillsPageRoutingModule { }
