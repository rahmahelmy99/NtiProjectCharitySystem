import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Data2Service } from 'src/app/providers/service/data2.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string=""
  apiFlag:boolean=false
  isSubmitted = true
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('wasq@gmail.com', [Validators.email, Validators.required]),
    password:new FormControl('174ds536', [Validators.required,Validators.minLength(3), Validators.maxLength(20)])
  })
  get email(){return this.loginForm.get('email')}
  get password(){return this.loginForm.get('password')}
  constructor(private _auth:Data2Service, private _router:Router){ }

  ngOnInit(): void {
  }

  login(){
    this.isSubmitted=true
    this.message=""
    if(this.loginForm.valid){
      this._auth.login(this.loginForm.value).subscribe(
        (data)=>{
          console.log(data)
          localStorage.setItem("token", `bearer ${data.token}`) 
        },
        (err)=>{
          this.message="Unauthorized"
        },
        ()=>{
          this._auth.me().subscribe(
            user=>{
              this._auth.isLogin=true
              this._auth.user = user.data
              this.apiFlag=true
            },
            (e)=>{
              this._auth.isLogin=false
              this._auth.user=null
              this.apiFlag=false
            },
            ()=>{
              this._router.navigateByUrl("/home")
              this.apiFlag=true
            }
          )
        }
      )
    }
  }
}



