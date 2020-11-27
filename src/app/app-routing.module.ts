import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleCharacterComponent } from './pages/single-character/single-character.component';
import { AboutComponent } from './pages/about/about.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {
    path: '', 
    component: HomepageComponent
  },
  {
    path: 'about', 
    component: AboutComponent
  },
  {
    path: 'characters/:id', 
    component: SingleCharacterComponent
  },
  {
    path: 'characters', 
    component: CharactersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
