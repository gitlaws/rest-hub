import { Routes } from '@angular/router';
import { UserFormComponent } from './features/components/user-form/user-form.component';
import { UserListComponent } from './features/components/user-list/user-list.component';

export const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'add-user', component: UserFormComponent },
  { path: 'edit-user/:id', component: UserFormComponent },
];
