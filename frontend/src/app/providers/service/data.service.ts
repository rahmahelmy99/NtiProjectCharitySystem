
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseurl : string = "http://localhost:5000/api/case/" 
  public imgPath = `images//profile/` 
  public isLogin = false
  constructor(private _http:HttpClient) { }
getAllCategories(): Observable<any>{
  return this._http.get(`${this.baseurl}getAll/}`)
}
getcaseByCatId(catId:number): Observable<any>{
  return this._http.get(`${this.baseurl}gitSingle/${catId}`)
}
getSinglecase(articleId:any): Observable<any>{
  return this._http.get(`${this.baseurl}SingleBlog/${articleId}`)
}
// {email:x@test.com,password:19101994Ab**}
login(data:any):Observable<any>{
  return this._http.post(`${this.baseurl}auth/login`, data)
}
me():Observable<any>{
    return this._http.post(`${this.baseurl}/me`,this.imgPath)
}
}