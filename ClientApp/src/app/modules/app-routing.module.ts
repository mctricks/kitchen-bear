import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { IngredientsComponent } from '../components/ingredients/ingredients.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full", },
  { path: "home", component: HomeComponent },
  { path: "ingredients", component: IngredientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
