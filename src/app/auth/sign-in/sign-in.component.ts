import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

    constructor(private router: Router) { }

    // On Forgotpassword link click
    onForgotpassword() {
      //this.router.navigate(['forgot-password'], { relativeTo: this.route.parent });
    }
  
    // On Signup link click
    onSignup() {
      //this.router.navigate(['sign-up'], { relativeTo: this.route.parent });
    }
  

  ngOnInit(): void {
  }

}
