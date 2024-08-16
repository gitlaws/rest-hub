import { Routes } from '@angular/router';
import { UserFormComponent } from './features/components/user-form/user-form.component';
import { UserListComponent } from './features/components/user-list/user-list.component';
import { ComponentDocumentationComponent } from './features/components/component-documentation/component-documentation.component';

export const routes: Routes = [
  {
    path: 'components',
    loadComponent: () =>
      import(
        './features/components/component-documentation/component-documentation.component'
      ).then((component) => component.ComponentDocumentationComponent),
  },
  // { path: '', component: UserListComponent },
  // { path: 'add-user', component: UserFormComponent },
  // { path: 'edit-user/:id', component: UserFormComponent },
];
