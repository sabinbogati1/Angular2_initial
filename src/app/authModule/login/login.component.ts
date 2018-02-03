import { Component } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
//Observable Imports
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user;
  constructor(
    private router:Router
  ) {
    this.user = {
      username:"",
      password:""
    }

  }


  callForNote(note){
    return new Promise((resolve,reject)=>{
      if(note=="ts"){
        resolve({
          note:note,
          desc:"This is note of typescript"
        })
      }
      else{
        reject("No note");
      }
    })
  }


  callForNoteWithObservable(note):Observable<any>{
    return Observable.create((observer)=>{
      if(note=="ts"){

        // setTimeout(()=>{
        //   observer.next({
        //     note:note,
        //     desc:"This is note of typescript"
        //   })
        // },2000);
        // setTimeout(()=>{
        //   observer.next({
        //     note:note,
        //     desc:"This is next ........ note of typescript"
        //   })
        // },5000);

        // setTimeout(()=>{
        //   observer.complete();
        // },6000);
        let i=0;
        setInterval(()=>{

          if(i==10){
            observer.complete();
          }

          observer.next(i);
          i++;
        },1000);

      }
      else{
        observer.error("No note");
      }
    })

  }

  login(){

    //this.router.navigate(["/user/dashboard"]);

    // this.callForNote("ts")
    // .then(data=>{
    //   console.log("Data is here: ", data);
    // }),
    // err=>{
    //   console.log("Error is this " , err);
    // }


    this.callForNoteWithObservable("ts").subscribe(
      data=>{

        console.log("Data is here at first observable: ", data);
      },
      error=>{
        console.log("Error is at first observable: " , error);
      },
      ()=>{
          console.log("Completed.....");
      }
    )

   let a= this.callForNoteWithObservable("ts").subscribe(
      data=>{
        if(data==5){
          a.unsubscribe();
          console.log("Now I Unsuscribe...")
        }
        console.log("Data is here at second  observable: ", data);
      },
      error=>{
        console.log("Error is at observable: " , error);
      },
      ()=>{
          console.log("Completed.....");
      }
    )


  }


}
