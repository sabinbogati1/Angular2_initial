import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public loginMsg = "PLEASE LOGIN TO START YOUR SESSION!";
  title = 'app';
  public username="sabin";
  public password="";

  constructor(){
 

  }


onSubmit(){

  console.log("Username and password is:  " ,this.username )
  console.log("This method is called");
}

 
}
