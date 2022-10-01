import { Component, OnInit } from '@angular/core';
import { MessengerServiceService } from 'src/app/services/messenger-service.service';
import { UserBlogs } from 'src/app/models/user-blogs.model';


@Component({
  selector: 'messenger-my-blog-page',
  templateUrl: './my-blog-page.component.html',
  styleUrls: ['./my-blog-page.component.css']
})
export class MyBlogPageComponent implements OnInit {

  blogs : Array<UserBlogs>

  constructor(private messengerService: MessengerServiceService) {
    this.blogs = [];
   }

  ngOnInit(): void {
    const userEmail : string  | null = localStorage.getItem('email');
    this.messengerService.getMyBlogs(userEmail || "").subscribe((res)=>{
      this.blogs = res;
      //alert(this.blogs[0].blog)
    })
    
  }

}
