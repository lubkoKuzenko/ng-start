import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { LoginContainerComponent } from './components/login-container/login-container.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginContainerComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        // only: ['ADMIN', 'EDITOR', 'VIEWER'],
        // except: 'ADMIN',
        // redirectTo: ''
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule {}
