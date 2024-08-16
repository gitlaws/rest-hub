import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserManagementComponent } from './features/components/user-management/user-management.component';
import { UserListComponent } from './features/components/user-list/user-list.component';
import { UserFormComponent } from './features/components/user-form/user-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserManagementComponent,
    UserListComponent,
    UserFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rest-hub';
}
