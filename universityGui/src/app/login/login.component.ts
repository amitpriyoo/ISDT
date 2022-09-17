import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Admin } from '../models/admin';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router, private root: AppComponent) {
    root.loginSuccess = false;
    // this.findAdmin("admin");
   }

  ngOnInit(): void {
    
  }

  admin ={
    userName :"",
    password :""
  };

  findAdmin(userName:String){
    this.adminService.searchByUserName(userName).subscribe(
      (res)=>{
        console.log(res);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  //login authentication here
  login(admin:Admin){
    if(admin.userName == ""|| admin.password == ""){
      alert("Field is Empty!");
      return;
    }
    // console.log(admin.password);
    this.adminService.login(admin).subscribe(
      (res)=>{
        // console.log(admin.userName);
        if(res == null){
          alert("username or password is wrong");
          return;
        }
        this.router.navigate(["/student-dashboard"]);
        this.root.loginSuccess = true;
        console.log(res);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
