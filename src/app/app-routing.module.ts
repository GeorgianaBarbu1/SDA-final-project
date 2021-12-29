import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { FilteredSubjectsComponent } from './components/pages/filtered-subjects/filtered-subjects.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './components/pages/terms-and-conditions/terms-and-conditions.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NewAddComponent } from './components/pages/new-add/new-add.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { LogOutComponent } from './components/pages/log-out/log-out.component';
import { MainComponent } from './components/pages/main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'new-add',
    component: NewAddComponent,
  },
  {
    path: 'new-add/:id', //routa pt editarea cardului
    component: NewAddComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'home/:key',
    component: FilteredSubjectsComponent,
  },
  {
    path: 'home',
    component: MainComponent,
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },

  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent,
  },
  {
    path: 'logout',
    component: LogOutComponent,
  },
  {
    path: 'anunturileMele',
    component: FilteredSubjectsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
