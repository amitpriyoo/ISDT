import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  adminApi = "http://localhost:8080/admin";
  constructor(private http:HttpClient) { }

  searchByUserName(userName:String){
    return this.http.get(this.adminApi+"/find/username/"+userName);
  }

  login(admin:Admin){
    return this.http.post(this.adminApi+"/login", admin);
  }

  addOrUpdateAdmin(admin:Admin){
    return this.http.post(this.adminApi+"/add", admin);
  }

  getAllAdmin(){
    return this.http.get(this.adminApi+"/find/all");
  }

  deleteAdmin(userName:String){
    return this.http.delete(this.adminApi+"/delete/"+userName);

  }

  updateAdmin(admin:Admin){
    return this.http.put(this.adminApi+"/update/",admin);
  }
}
