import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent ,HttpInterceptor, HttpHandler} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  intercept(request: HttpRequest<any>, next: HttpHandler){
    const token = localStorage.getItem('token')
    if(token){
      request = request.clone({
        headers: request.headers.set("Authorization", `${token}`)
      })
    }
    return next.handle(request);
  }
}

