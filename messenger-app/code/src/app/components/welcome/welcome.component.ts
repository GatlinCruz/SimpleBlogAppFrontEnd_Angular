import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessengerServiceService } from 'src/app/services/messenger-service.service';
import { UserBlogs } from 'src/app/models/user-blogs.model';

@Component({
  selector: 'messenger-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  blogs : Array<UserBlogs>;

  constructor(private router: Router, private messengerService: MessengerServiceService) {
    const token = localStorage.getItem('token')
    
    this.blogs = []
    if(!token) {
      this.router.navigate(['/login'])
    }
   }

  ngOnInit(): void {
    const userEmail : string  | null = localStorage.getItem('email');
    
    this.messengerService.getOtherBlogs(userEmail || "").subscribe((res)=>{
      this.blogs = res;
    })

  }
  signOut(){
    localStorage.clear();
    this.router.navigate(['login'])
  }

}
