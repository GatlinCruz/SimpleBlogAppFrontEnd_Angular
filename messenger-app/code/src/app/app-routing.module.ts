import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { LoginComponent } from './components/login/login.component';
import { MyBlogPageComponent } from './components/my-blog-page/my-blog-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
  path: "", redirectTo:'login', pathMatch: 'full',
  },
  {
    path: "login", component: LoginComponent,
  },
  {
    path: "about", component: AboutPageComponent,
  },
  {
    path: "sign-up", component: SignUpPageComponent
  },
  {
    path: "welcome", component: WelcomeComponent
  },
  {
    path: "contact", component: ContactPageComponent
  },
  {
    path: "my-blog", component: MyBlogPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
