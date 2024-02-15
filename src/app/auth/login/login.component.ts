import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
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
  password: ['', Validators.required]
  });
  }

  ngOnInit(): void {
  }

  
  // postdata(angForm)
  // {
  //   //alert(angForm.value.email);
  // this.dataService.userlogin(angForm.value.email,angForm.value.password)
  // .pipe(first())
  // .subscribe(
  // data => {
  // const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard/e-commerce';
  // this.router.navigate([redirect]);
  // },
  // error => {
  // alert("User name or password is incorrect")
  // });
  // }

  postdata(angForm) {
    this.dataService.userlogin(angForm.value.email, angForm.value.password)
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

  // sendOTP() {
  //   // Generate a random OTP (e.g., a 6-digit number)
  //   this.generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
  //   // Send the OTP to the user's email (you'll need to implement this part)
  //   // Set otpSent flag to true
  //   this.otpSent = true;
  //   // Alert that OTP is sent
  //   alert('OTP has been sent to your email.');
  // }

  // submitOTP() {
  //   // Check if the entered OTP matches the generated OTP
  //   if (this.enteredOTP === this.generatedOTP) {
  //     alert('OTP verification successful. You can now login.');
  //     // Proceed with login process
  //   } else {
  //     alert('Invalid OTP. Please try again.');
  //   }
  // }
  
get email() { return this.angForm.get('email'); }
get password() { return this.angForm.get('password'); }


}
