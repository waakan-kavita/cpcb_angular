import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginApiService } from 'src/app/login-api.service';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usnameError:string='';
  passError:string='';
  error:string='';
  angForm: FormGroup;
  username:any;

  constructor(private fb: FormBuilder,private dataService: LoginApiService,private router:Router,private cd:ChangeDetectorRef) {
    this.angForm = this.fb.group({
  username: ['', Validators.required],
  password: ['', Validators.required]
  });
  }

  ngOnInit(): void {
  }

  postdata() {
    this.usnameError = '';
  this.passError = '';
  
    this.dataService.userlogin(this.angForm.value.username, this.angForm.value.password)
      .subscribe(
        data => {
      
          const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard/e-commerce';
          this.router.navigate([redirect]);
          
        },
        error => {
        // // this.usnameError="invalid username";
        // // this.passError="invalid password";
        // console.error(error); // Log the error for debugging


        // this.error = error.message;
        // console.log("ghh",error.message)
        // if (error.message.includes('Invalid username')) {
        //   this.usnameError = 'Invalid username';
        // } 
        // if (error.message.includes('Invalid password')) {
        //   this.passError = 'Invalid password';
        // }
        if (error.message.includes('Invalid username')) {
          this.usnameError = 'Invalid username';
        } 
        if (error.message.includes('Invalid password')) {
          this.passError = 'Invalid password';
        }
        this.cd.detectChanges();
        }
      );
  }

  


}
