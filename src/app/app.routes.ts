import { Routes } from '@angular/router';
import { UserFormComponent } from './features/components/user-form/user-form.component';
import { UserListComponent } from './features/components/user-list/user-list.component';
import { ComponentDocumentationComponent } from './features/components/component-documentation/component-documentation.component';
import { AuthGuard } from './core/guards/auth.guard';
import { SignInComponent } from './features/components/sign-in/sign-in.component';

export const routes: Routes = [
  {
    path: 'components',
    loadComponent: () =>
      import(
        './features/components/component-documentation/component-documentation.component'
      ).then((component) => component.ComponentDocumentationComponent),
  },
  { path: 'user-list', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'user-form', component: UserFormComponent, canActivate: [AuthGuard] },
  { path: 'sign-in', component: SignInComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
];
