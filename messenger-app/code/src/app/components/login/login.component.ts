import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessengerServiceService } from 'src/app/services/messenger-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'messenger-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  messengerService : MessengerServiceService;
  c : any
  router : Router
  didSucceed : boolean;
  isInvalidCredentials : boolean;

  constructor(messengerService : MessengerServiceService, router: Router) { 
    this.router = router;
    this.didSucceed = false;
    this.isInvalidCredentials = false;
    const token = localStorage.getItem('token');
    if(token) {
      this.router.navigate(['/welcome']);
    }

    this.messengerService = messengerService;
    
    this.loginForm = new FormGroup({
      email    : new FormControl("", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password : new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    var email : string = this.loginForm.value.email;
    var password : string = this.loginForm.value.password;
    
    var succeed = false;
    
    this.messengerService.login(email, password).subscribe((res) => {
      this.c = JSON.stringify(res);
      succeed = true
      const d = JSON.parse(this.c);
      var token = d["token"];
      localStorage.setItem('token', token)
      localStorage.setItem('email', email);
      this.router.navigate(['/welcome'])
      
    });
    if(!succeed) {
      this.isInvalidCredentials = true;
    }
  }

  get email() {
    return this.loginForm.get('email')
  }

}
