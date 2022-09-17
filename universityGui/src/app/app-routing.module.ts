import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/admin-login",
    pathMatch:"full"
  },
  {
    component:LoginComponent,
    path:"admin-login"
  },
  {
    component:StudentDashboardComponent,
    path:"student-dashboard"
  },
  {
    component:AdminComponent,
    path:"admin"
  },
  {
    component:CourseComponent,
    path:"course"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
