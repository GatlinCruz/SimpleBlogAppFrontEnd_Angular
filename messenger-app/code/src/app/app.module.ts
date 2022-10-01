import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';

import { HttpClientModule } from "@angular/common/http";
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SignedOutHeaderComponent } from './components/signed-out-header/signed-out-header.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { MyBlogPageComponent } from './components/my-blog-page/my-blog-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AboutPageComponent,
    SignUpPageComponent,
    WelcomeComponent,
    SignedOutHeaderComponent,
    ContactPageComponent,
    MyBlogPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
