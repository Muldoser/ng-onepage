import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from '../pages/container.component';
import { homeRoutes } from '../pages/home/home.routes';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app'
  },
  {
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      homeRoutes
    ],
    component: ContainerComponent,
    path: 'app'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
