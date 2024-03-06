import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { LoginApiService } from 'src/app/login-api.service';
import { Observable } from 'rxjs';

import { NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
    username: string;
    userData: any = {};

    constructor(public sidebarservice: SidebarService, private LoginApiService: LoginApiService) {
    }

    toggleSidebar() {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    }

    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }

    hideSidebar() {
        this.sidebarservice.setSidebarState(true);
    }

    ngOnInit() {
        this.username = this.LoginApiService.username;
        console.log("hiii", this.username);
       
        // this.LoginApiService.username$.subscribe(username => {

        //         this.username = username;
        //         console.log("hiii", this.username);
        //       });
        // this.LoginApiService.getLoggedInName.subscribe(
        //     (data) => {
        //         this.zone.run(() => {
        //             this.username = data.username;
        //             console.log("Username in ngOnInit:", this.username);
        //             console.log("hiinew", this.username);
        //             this.userData = data;
        //             console.log("userData", this.userData.username);
        //             console.log("userData", this.userData);
        //             this.cd.detectChanges();//markForCheck
        //         });
        //     },
        //     (error: any) => {
        //         console.error("Error fetching user data:", error);
        //     }
        // );



        /* Search Bar */
        $(document).ready(function () {
            $(".search-toggle-icon").on("click", function () {
                $(".top-header .navbar form").addClass("full-searchbar")
            })
            $(".search-close-icon").on("click", function () {
                $(".top-header .navbar form").removeClass("full-searchbar")
            })

        });

    }

}
