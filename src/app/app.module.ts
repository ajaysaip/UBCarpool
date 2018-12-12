import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { PostridesComponent } from './postrides/postrides.component';
import { SearchridesComponent } from './searchrides/searchrides.component';
import { ConfirmAccComponent } from './confirm-acc/confirm-acc.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { ViewridesComponent } from './viewrides/viewrides.component';
import { ConfirmrideComponent } from './confirmride/confirmride.component';
import { PayportalComponent } from './payportal/payportal.component';

import { FeedbackComponent } from './feedback/feedback.component';
import { NgxBraintreeModule } from 'ngx-braintree';
import * as emailjs from 'emailjs-com';
import { RegisterService } from './register.service';
import { AuthGuard } from './auth.guard';
import { ReportridesComponent } from './reportrides/reportrides.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { SuccessComponent } from './success/success.component';
import { CheckinComponent } from './checkin/checkin.component';


const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'signin', component: SigninComponent },
  {path:'homepage',component: HomepageComponent},
  {path:'postrides',component: PostridesComponent,canActivate:[AuthGuard]},
  {path:'searchrides',component: SearchridesComponent,canActivate:[AuthGuard]},
  {path:'confirm',component: ConfirmAccComponent},
  {path:'profile',component: ProfilePageComponent,canActivate:[AuthGuard]},
  {path:'forgot',component: ForgotPwdComponent},
  {path:'changepwd',component: ChangepwdComponent},
  {path:'view',component: ViewridesComponent,canActivate:[AuthGuard]},
  {path:'results',component: SearchresultsComponent,canActivate:[AuthGuard]},
  {path:'pay',component: PayportalComponent,canActivate:[AuthGuard]},
  {path:'success',component: SuccessComponent,canActivate:[AuthGuard]},
  {path:'feedback',component: FeedbackComponent,canActivate:[AuthGuard]},
  {path:'report',component: ReportridesComponent,canActivate:[AuthGuard]},
  {path:'checkin',component: CheckinComponent,canActivate:[AuthGuard]},
  {path:'confirmride',component: ConfirmrideComponent,canActivate:[AuthGuard]}
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SigninComponent,
    RegisterComponent,
    PostridesComponent,
    SearchridesComponent,
    ConfirmAccComponent,
    ForgotPwdComponent,
    ProfilePageComponent,
    ChangepwdComponent,
    ViewridesComponent,
    ConfirmrideComponent,
    PayportalComponent,
    
    FeedbackComponent,
    ReportridesComponent,
    SearchresultsComponent,
    SuccessComponent,
    CheckinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxBraintreeModule,
    
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
