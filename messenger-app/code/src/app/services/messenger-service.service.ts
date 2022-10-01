import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserBlogs } from '../models/user-blogs.model';

@Injectable({
  providedIn: 'root'
})
export class MessengerServiceService {


  constructor(private httpClient : HttpClient) { 
    this.httpClient = httpClient;
  }

  login(email: string, password: string) {
    return this.httpClient.post("http://localhost:8080/api/v1/users/login", {"email": email, "password": password});
  }
  getMyBlogs(email : string) {
    return this.httpClient.get<UserBlogs[]>(`http://localhost:8080/api/v1/blogs/get-user-blogs/${email}`)
  }
  getOtherBlogs(email : string) {
    return this.httpClient.get<UserBlogs[]>(`http://localhost:8080/api/v1/blogs/get-other-blogs/:${email}`)
  }
}
