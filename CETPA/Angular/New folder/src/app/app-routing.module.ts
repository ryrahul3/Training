import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { NoidaComponent } from './pages/noida/noida.component';
import { DelhiComponent } from './pages/delhi/delhi.component';
import { CoursesComponent } from './pages/courses/courses.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about-us',component:AboutComponent,children:
   [
     {path:'',redirectTo:'noida',pathMatch:'full'},
     {path:'noida',component:NoidaComponent},
     {path:'delhi',component:DelhiComponent}
   ]},
   {path:'courses/:cat',component:CoursesComponent},
  {path:'**',component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
