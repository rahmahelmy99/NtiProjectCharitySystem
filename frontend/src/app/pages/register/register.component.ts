import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Data2Service } from 'src/app/providers/service/data2.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message:string=""
  apiFlag:boolean=false
  constructor(private _auth:Data2Service , private _router:Router) { }

  ngOnInit(): void {
  }
  handleRegister(registerForm:NgForm){
    if(registerForm.valid){
      this._auth.register(registerForm.value).subscribe(data=>{},
        (err)=>{
          this.message="error adding user "
          this.apiFlag=false
        },
        ()=>{
          registerForm.resetForm()
          this.message="data added successfully"
          this.apiFlag=true
          this._router.navigateByUrl('/login')
        
        }      
      )
    }

  }
}
