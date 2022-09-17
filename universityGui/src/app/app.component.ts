import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginSuccess:boolean = false;
  constructor(){
    this.loginSuccess = true;
  }

  title = 'universityGui';
  setLougout(){
    this.loginSuccess = false;
  }
}
