import { HomeComponent } from './components/home/home.component';
import { UsersearchComponent } from './components/usersearch/usersearch.component';
import { ReposearchComponent } from './components/reposearch/reposearch.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo: 'users', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'repositories', component: ReposearchComponent},
  {path: 'users', component:UsersearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
