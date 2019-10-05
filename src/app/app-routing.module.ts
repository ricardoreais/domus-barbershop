import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    data: {animation: 'Home'}
  },
  {
    path: 'about',
    component: AppComponent,
    data: {animation: 'Bio'}
  },
  {
    path: 'experience',
    component: AppComponent,
    data: {animation: 'Timeline'}
  },
  {
    path: 'projects',
    component: AppComponent,
    data: {animation: 'Projects'}
  },
  {
    path: 'contact',
    component: AppComponent,
    data: {animation: 'Contact'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
