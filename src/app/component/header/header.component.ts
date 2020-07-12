import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { isUndefined } from 'util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  uname = '';
  val : any;
  isAdmin;
  currentUser:any;
  constructor(private userService: UserServiceService, private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    
     this.currentUser= this.authenticationService.currentUserValue;
    console.log(this.currentUser);
    if(!isUndefined(this.currentUser)){
      if(this.currentUser){
        this.uname = this.authenticationService.currentUserValue[0].uName;
        this.isAdmin=this.authenticationService.currentUserValue[0].isAdmin;
      }
      
    }
    // if(localStorage.getItem('currentUser') != null){
    //   console.log(JSON.parse(localStorage.getItem('currentUser')));
    //   this.val =  JSON.parse(localStorage.getItem('currentUser'));
    //   console.log(this.val[0]);
    //   this.uname = 'Welcome '+this.val[0].uName;
    // }

   // console.log(this.userService.checkIsLogin())
    // if(!this.userService.checkIsLogin()){
    //   this.router.navigate(['/login']);
    // }
  }

  search(event: any){
    console.log(event.target.value);
  }

  logOut(){
    this.authenticationService.logout();
  }
  

}
