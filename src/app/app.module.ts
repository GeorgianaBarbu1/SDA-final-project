import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { NewAddComponent } from './components/pages/new-add/new-add.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { MainComponent } from './components/pages/main/main.component';
import { SponsoredComponent } from './components/common/sponsored/sponsored.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './components/pages/terms-and-conditions/terms-and-conditions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardSubjectsComponent } from './components/common/card-subject/card-subject.component';
import { FilteredSubjectsComponent } from './components/pages/filtered-subjects/filtered-subjects.component';
import { TutoringCardComponent } from './components/common/tutoring-card/tutoring-card.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { USER_SERVICE_STORAGE } from './service/auth.service';
import { LOCAL_STORAGE } from 'ngx-webstorage-service';
import { LogOutComponent } from './components/pages/log-out/log-out.component';
import { MatDialog, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewAddComponent,
    LoginComponent,
    SignInComponent,
    MainComponent,
    SponsoredComponent,
    FooterComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    CardSubjectsComponent,
    FilteredSubjectsComponent,
    TutoringCardComponent,
    AboutUsComponent,
    LogOutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: USER_SERVICE_STORAGE,

      useExisting: LOCAL_STORAGE,
    },
    MatDialog,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
