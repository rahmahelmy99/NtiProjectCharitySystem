import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {
  public isLogin : boolean = false
  public user: any = null

  commonApiURL="http://localhost:5000/api/user/"
  constructor(private _http:HttpClient) { }
  
  register(data:any):Observable<any>{
    return this._http.post(`${this.commonApiURL}register`, data)
  }
  
  login(data:any):Observable<any>{
    console.log(data)
    return this._http.post(`${this.commonApiURL}login`, data)
  }
  me():Observable<any>{
    return this._http.get(`${this.commonApiURL}me`)
  }
  delete(data:any):Observable<any>{
    return this._http.delete(`${this.commonApiURL}all/${this.user.id}`, data)
  }
 
  logout():Observable<any>{
    return this._http.post(`${this.commonApiURL}logout`, null)
  }
}
