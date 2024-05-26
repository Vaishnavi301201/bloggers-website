import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registrationData={
    username:'',
    password:''
  };
  constructor(
    private router:Router,
    private authService: AuthService
  ){}

  onSubmit(){
    this.authService.register(this.registrationData).subscribe({
      next:async(response)=>{
        if(response.status== 200)
          {
            this.router.navigate(['/login']);
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



