import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Student} from '../models/student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  api = "http://localhost:8080/student"
  constructor(private http: HttpClient) { }

  addOrUpdateStudent(student:Student){
    return this.http.post(this.api+"/add", student);
  }

  getAllStudents(){
    return this.http.get(this.api+"/find/all");
  }

  deleteStudent(id:number){
    return this.http.delete(this.api+"/delete/"+id);
  }

  updateStudent(student:Student){
    return this.http.put(this.api+"/update", student);
  }

  searchById(id:number){
    return this.http.get(this.api+"/find/id/"+id);

  }

  searchByName(name:String){
    return this.http.get(this.api+"/find/name/"+name);
  }
}
