import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Admin } from '../models/admin';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service:AdminService, private root: AppComponent) { 
    this.getAllAdmin();
    root.loginSuccess = true;
  }

  ngOnInit(): void {
  }

  register(registerForm:any){
    if(registerForm.userName == "" || registerForm.password == ""){
      alert("Field is Empty!");
      return;
    }
    this.service.addOrUpdateAdmin(registerForm).subscribe(
      (res)=>{
        alert("Successfully register");
        this.getAllAdmin();
        console.log(res);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  // find all student function
  admins:any;
  getAllAdmin(){
    this.service.getAllAdmin().subscribe(
      (res)=>{
        this.admins = res;
        console.log(res);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  // delete student from here
  deleteAdmin(userName:String){
    // console.log(id);
    this.service.deleteAdmin(userName).subscribe(
      (res)=>{
        if(res != null){
          alert("Success fully deleted!");
          
        }
        this.getAllAdmin();
        console.log(res);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  //update student from here
  updateAdmin(admin:Admin){
    console.log(admin);
    this.service.updateAdmin(admin).subscribe(
      (res)=>{
        this.getAllAdmin();
        alert("Successfully updated!");
        console.log(res);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  // type = 101;
  // student!:Student;
  admin = {

    "userName":"",
    "password":"",
  };

  // show object value which are going to updated in update form
  setAdmin(admin:any){
    // this.student = new Student(student.id, student.name, student.gender);
    this.admin = admin;
    // console.log(student.id);
  }

  //search student by their id
  searchByUserName(userName:String){
    if(userName == ""){
      this.getAllAdmin();
      return;
    }
    this.service.searchByUserName(userName).subscribe(
      (res)=>{
        // this.getAllStudent();
        // this.students = res;
        if(res != null){
          this.admins = res;
        }
        console.log(res);
      },
      (error)=>{
        this.getAllAdmin();
        console.log(error);
      }
    )
  }
}
