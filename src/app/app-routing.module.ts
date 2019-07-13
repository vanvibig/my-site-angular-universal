import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './admin/login/login.component';
import {RegisterComponent} from './admin/register/register.component';
import {ForgotPasswordComponent} from './admin/forgot-password/forgot-password.component';
import {VerifyEmailComponent} from './admin/verify-email/verify-email.component';
import {AdminComponent} from './admin/admin.component';
import {CreateComponent} from './components/create/create.component';
import {AuthGuard} from './auth.guard';
import {IndexComponent} from './components/index/index.component';
import {AuthComponent} from './admin/auth/auth.component';

const routes: Routes = [
  {
    path:  'admin',
    component:  AdminComponent,

    children: [
      // [...]
      { path:  'login', component:  LoginComponent},
      { path:  'register', component:  RegisterComponent },
      { path:  'forgot-password', component:  ForgotPasswordComponent },
      { path:  'verify-email', component:  VerifyEmailComponent },
    ]
  },

  { path: 'auth' , component: AuthComponent},
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'index',
    component: IndexComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
