import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchPageComponent } from './components/launch-page/launch-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  {path:'', component: LoginPageComponent},
  {path:'launchPage', component: LaunchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
