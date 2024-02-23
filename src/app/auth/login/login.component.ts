import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginApiService } from 'src/app/login-api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  angForm: FormGroup;
  generatedOTP: string;
  enteredOTP: string;
  otpSent: boolean = false;

  constructor(private fb: FormBuilder,private dataService: LoginApiService,private router:Router) {
  this.angForm = this.fb.group({
  email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
  password: ['', Validators.required],
  username: ['', [Validators.required]],
  pass: ['', Validators.required]
  });
  }

  ngOnInit(): void {
  }

  postdata(angForm) {

    this.dataService.userlogin(angForm.value.username, angForm.value.pass)
      .subscribe(
        data => {
          // Redirect to dashboard upon successful login
          const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard/e-commerce';
          this.router.navigate([redirect]);
        },
        error => {
          // Display error message to the user
          alert("Incorrect username or password");
          console.error('Login failed:', error);
        }
      );
  }

 
get email() { return this.angForm.get('email'); }
get password() { return this.angForm.get('password'); }


}
