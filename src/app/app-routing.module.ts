import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from 'src/layout/container/container.component';
import { CalculateComponent } from 'src/modules/calculate/calculate.component';
import { HomeComponent } from 'src/modules/home/home.component';
import { Whatis7ttComponent } from 'src/modules/whatis7tt/whatis7tt.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'calculate',
        component: CalculateComponent
      },
      {
        path: 'whatis77tt',
        component: Whatis7ttComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
