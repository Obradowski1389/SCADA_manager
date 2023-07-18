import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TrendingPageComponent } from './trending-page/trending-page.component';
import { ManagerPageComponent } from './manager-page/manager-page.component';
import { DBManagerComponent } from './dbmanager/dbmanager.component';

const routes: Routes = [
  {path: "login", component:LoginComponent},
  {path: 'trending', component: TrendingPageComponent},
  {path: 'manager', component: ManagerPageComponent},
  {path: "dbManager", component: DBManagerComponent},
  {path: '', pathMatch: 'full', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
