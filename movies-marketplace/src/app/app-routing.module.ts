import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ListMoviesComponent } from './views/list-movies/list-movies.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "list-movies",
  component: ListMoviesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
