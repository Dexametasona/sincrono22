import { HomeComponent } from './page/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './page/post/post.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'entrada', component:PostComponent},
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
