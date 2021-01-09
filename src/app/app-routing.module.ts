import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';

  const routers : Routes = [
    {path: 'heroes', component: HeroesComponent},
    {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule] 
})

export class AppRoutinModule{

}

