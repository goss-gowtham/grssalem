import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { ContactComponent } from './core/contact/contact.component';
import { HomeComponent } from './core/home/home.component';
import { ServicesComponent } from './core/services/services.component';
import { ErrorComponent } from './error/error.component';
import { UnderdevComponent } from './underdev/underdev.component';


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
  path:'dev',
  component: UnderdevComponent
}, {
  path: '',
  redirectTo: '/dev',
  pathMatch: 'full',
}, {
  path: '**',
  component: ErrorComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    useHash: true,
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
