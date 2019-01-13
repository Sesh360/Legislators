import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'governor',
    loadChildren: './governor/governor.module#GovernorPageModule'
  },
  {
    path: 'senators',
    loadChildren: './senators/senators.module#SenatorsPageModule'
  },
  {
    path: 'districts',
    loadChildren: './districts/districts.module#DistrictsPageModule'
  },
  {
    path: 'ndmca',
    loadChildren: './ndmca/ndmca.module#NdmcaPageModule'
  },
  {
    path: 'house',
    loadChildren: './house/house.module#HousePageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
