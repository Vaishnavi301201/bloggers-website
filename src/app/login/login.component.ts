import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


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
    this.authService.login(this.loginData).subscribe(
      success=>this.router.navigate(['/dashboard']),
      error => console.error('Login Failed',error)
    )
  }

}
