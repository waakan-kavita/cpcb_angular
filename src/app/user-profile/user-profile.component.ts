import { Component, OnInit } from '@angular/core';
import { LoginApiService } from '../login-api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userData:any={};
  username:string;

  constructor(private LoginApiService:LoginApiService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.LoginApiService.username;
    console.log("hiii", this.username);
  }


  fetchData=()=>{
  this.LoginApiService.getLoggedInName.subscribe(
    (data: any) => {
        console.log("main userData", data); 
            this.userData = data;
            console.log("userData", this.userData.username);
            console.log("userData", this.userData); 
          
            // this.cd.detectChanges(); 
        });

    (error: any) => {
        console.error("Error fetching user data:", error);
    }


  }
}
