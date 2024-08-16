import { Component } from '@angular/core';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserListComponent } from '../user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [UserFormComponent, UserListComponent, HttpClientModule],
  providers: [UserService],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss',
})
export class UserManagementComponent {
  addUser() {
    throw new Error('Method not implemented.');
  }
  deleteUser() {
    throw new Error('Method not implemented.');
  }
  updateUser() {
    throw new Error('Method not implemented.');
  }
}
