import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpBackend, HttpClient, HttpResponse } from '@angular/common/http';
import { response } from 'express';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData={
    username:'',
    password:''
  };
  constructor(
    private router:Router,
    private authService: AuthService
  ){}

  onSubmit(){
    this.authService.login(this.loginData).subscribe({
      next:async(response)=>{
        if(response.status== 200)
          {
            this.router.navigate(['/dashboard']);
          }
      },
      error:(err)=>{
        console.log('Login Failed',err);
      }

    }
      
      // success=>this.router.navigate(['/dashboard']),
      // error => console.log('Login Failed',error)
    )
  }

}
