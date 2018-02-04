import { Injectable } from "@angular/core";
import { Http,Request,RequestOptions,Headers } from "@angular/http";

//importing observable
// import {Observable} from "rxjs/Observable";
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/catch";
// import "rxjs/add/operator/throw";



@Injectable()
export class AuthService {

    url="http://localhost:8080/login";
    constructor(
        private http: Http
    ) {

    }


    login(data){

           // console.log("Hello you are inside service....");

        this.http.post(this.url,data, this.reqOptions()).subscribe(
            data=>{
                    console.log("This is data in login ",data );
            }, error =>{
                console.log("Error arise at login in auth service ", error);
            }
        )

        // this.http.post(this.url,data, this.reqOptions())
        // .map(this.mapResult)
        // .catch(this.catchErr)
    }


    // mapResult(res:Response){
    //     let body:res.json();
    //     return body;
    // }

    // catchErr(err:any){
    //     return Observable.throw(err);
    // }


    reqOptions(){
        let headers = new Headers({"Content-type":"application/json"});
        let options = new RequestOptions({headers: headers});
        return options;
    }




}

