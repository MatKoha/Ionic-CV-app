import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePage } from './welcome.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomePage,
    children: [
      {
        path: 'introduction',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./introduction/introduction.module').then(m => m.IntroductionPageModule)
          }
        ]
      },
      {
        path: 'hobbies',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./hobbies/hobbies.module').then(m => m.HobbiesPageModule)
          }
        ]
      },
      {
        path: 'goals',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./goals/goals.module').then(m => m.GoalsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'welcome/introduction',
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
export class WelcomePageRoutingModule { }
