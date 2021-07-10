import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { ContactComponent } from './core/contact/contact.component';
import { HomeComponent } from './core/home/home.component';
import { ServicesComponent } from './core/services/services.component';


const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'services',
  component: ServicesComponent
}, {
  path: 'about',
  component: AboutComponent
}, {
  path: 'contact',
  component: ContactComponent
}, {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
