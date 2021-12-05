import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { ForgotpassComponent } from './pages/auth/forgotpass/forgotpass.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/backend/dashboard/dashboard.component';
import { AboutComponent } from './pages/frontend/about/about.component';
import { ContactComponent } from './pages/frontend/contact/contact.component';
import { HomeComponent } from './pages/frontend/home/home.component';

const routes: Routes = [

  // Route สำหรับเรียกหน้า Frontend Layout
  {
    path: '',
    component: FrontendLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
    ]
  },
  // Route สำหรับเรียกหน้า Auth Layout
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'forgotpass',
        component: ForgotpassComponent
      }
    ]
  },
  // Route สำหรับเรียกหน้า Backend Layout
  {
    path:'backend',
    component: BackendLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
